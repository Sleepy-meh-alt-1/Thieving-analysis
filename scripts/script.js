A1lib.identifyApp("appconfig.json");

// -------------------------
// Variables
// -------------------------

// Alt1 stuff
let reader = new Chatbox.default();
const appColor = A1lib.mixColor(255, 199, 0);
const timestampRegex = /\[\d{2}:\d{2}:\d{2}\]/g;
let chatInterval = null;

// Timer
let isRunning = false;
let startTime = 0;
let pausedTime = 0;
let timerInterval = null;
let displayInterval = null;
let lastRenderedTick = -1;
let tickOffset = 0;
let lastCompletedActionSlot = 0;


// Counters
let normalPP = 0;
let fastboiPP = 0;
let camoPP = 0;
let failedPP = 0;

// Save snapshot storage
let saveSnapshot = null;

// Save key
const SAVE_KEY = "ppTrackerSave";

// Settings
let setting_autoStart = false;
let setting_stickyFingers = true;

let ticksPerAction = setting_stickyFingers ? 2 : 3;


// icons
let currentNPC = "";
const npcData = {
    "menaphos market guard": {
        icon: "https://runescape.wiki/images/Menaphos_market_guard_icon.png?bcb77",
        drops: [
            { key: "Sealed clue scroll (elite)", label: "Sealed clue scroll (elite)", icon: "https://runescape.wiki/images/Sealed_clue_scroll_%28elite%29.png?82229", rate: 500 / 100000 },
            { key: "Sealed clue scroll (hard)", label: "Sealed clue scroll (hard)", icon: "https://runescape.wiki/images/Sealed_clue_scroll_%28hard%29.png?64dd1", rate: 6 / 1000 },
        ]
    },

    "archaeology professor": {
        icon: "https://runescape.wiki/images/Archaeology_professor_icon.png?dae9b",
        drops: [
            { key: "Coins", label: "Coins", icon: "https://runescape.wiki/images/Coins_250.png?ddfd5", rate: 736 / 1000 },
            { key: "Chronotes", label: "Chronotes", icon: "https://runescape.wiki/images/Chronotes.png?69a3c", rate: 175 / 1000 },
            { key: "Binding contract", label: "Binding contract", icon: "https://runescape.wiki/images/Binding_contract.png?c9b02", rate: 10 / 1000 },
            { key: "Tetracompass piece", label: "Tetracompass piece", icon: "https://runescape.wiki/images/Tetracompass_piece_%28left%29.png?b135a", rate: 1 / 1000 },
        ]
    },

    "h.a.m. female follower": {
        icon: "https://runescape.wiki/images/H.A.M._Member_%28female%29_icon.png?31b9d",
        drops: [
            { key: "easy", icon: "easy clues", rate: 1 / 100 }
        ]
    },

    "default": {
        icon: "https://runescape.wiki/images/Irksol_chathead.png?68578",
        drops: [] // nothing interesting
    }
};


// -------------------------
// UI Buttons
// -------------------------

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("saveBtn").addEventListener("click", () => {
    if (!isRunning) return;

    const ticksPerAction = setting_stickyFingers ? 2 : 3;

    const waitForNextAction = () => {
        const elapsed = performance.now() - startTime;
        const rawTicks = Math.floor(elapsed / 600);
        const completedTicks = Math.max(0, rawTicks + tickOffset);
        const completedActionSlots = Math.floor(completedTicks / ticksPerAction);

        if (
            !saveSnapshot ||
            completedActionSlots > saveSnapshot.completedActionSlots
        ) {
            saveSnapshot = buildSnapshot(completedActionSlots);
            buildSavePreview(saveSnapshot);
            document.getElementById("confirmSavePopup").style.display = "block";
        } else {
            requestAnimationFrame(waitForNextAction);
        }
    };

    // mark current state so we know when next action happens
    const elapsed = performance.now() - startTime;
    const rawTicks = Math.floor(elapsed / 600);
    const completedTicks = Math.max(0, rawTicks + tickOffset);
    saveSnapshot = {
        completedActionSlots: Math.floor(completedTicks / ticksPerAction)
    };

    waitForNextAction();
});

document.getElementById("confirmSaveYes").addEventListener("click", () => {
    if (!saveSnapshot) return;

    saveState(saveSnapshot);
    saveSnapshot = null;

    document.getElementById("confirmSavePopup").style.display = "none";
    loadState();
});

document.getElementById("confirmSaveNo").addEventListener("click", () => {
    saveSnapshot = null;
    document.getElementById("confirmSavePopup").style.display = "none";
});

document.getElementById("openSessionPopup").addEventListener("click", () => {
    buildSessionList();
    document.getElementById("sessionPopup").style.display = "flex";
});

document.getElementById("closeSessionPopup").addEventListener("click", () => {
    document.getElementById("sessionPopup").style.display = "none";
});


document.getElementById("tickOffsetInput").addEventListener("input", e => {
    tickOffset = Number(e.target.value) || 0;
    updateDisplay();
});

// -------------------------
// Alt1 chatbox setup
// -------------------------

window.setTimeout(() => {
    reader.readargs = {
        colors: [
            A1lib.mixColor(255, 255, 255),
            A1lib.mixColor(0, 255, 0),
            A1lib.mixColor(30, 255, 0),
            A1lib.mixColor(30, 255, 0)
        ],
        backwards: true,
    };

    $(".nis").append("<span>Searching for chatboxes</span>");
    $(".nis").append("<div>If this is showing long, chatbox reading might not work.</div>");
    reader.find();

    const findChat = setInterval(() => {
        if (reader.pos === null) reader.find();
        else {
            $(".nis span:contains('Searching for chatboxes')").remove();
            $(".nis div:contains('chatbox reading might not work')").remove();
            clearInterval(findChat);
            reader.pos.mainbox = reader.pos.boxes[0];
            showSelectedChat(reader.pos);

            chatInterval = setInterval(() => {
                readChatbox();
            }, 200);
        }
    }, 1000);
}, 0);

function showSelectedChat(chat) {
    try {
        alt1.overLayRect(
            appColor,
            chat.mainbox.rect.x,
            chat.mainbox.rect.y,
            chat.mainbox.rect.width,
            chat.mainbox.rect.height,
            2000,
            5
        );
    } catch {}
}

// -------------------------
// Chatbox parsing
// -------------------------

function readChatbox() {
    const opts = reader.read() || [];
    let chatStr = "";
    let chatArr;

    if (opts.length) {
        for (let line in opts) {
            if (!opts[line].text.match(timestampRegex) && line == "0") continue;
            if (opts[line].text.match(timestampRegex)) {
                if (line > 0) chatStr += "\n";
                chatStr += opts[line].text + " ";
                continue;
            }
            chatStr += opts[line].text;
        }
    }

    if (chatStr.trim()) chatArr = chatStr.trim().split("\n");

    if (chatArr) {
        for (let line of chatArr) {
            const chatLine = line.trim();
            if (chatLine && !isInHistory(chatLine)) {
                checkLine(chatLine);
            }
        }
        updateChatHistory(chatArr);
    }
}

function isInHistory(chatLine) {
    if (!sessionStorage.chatHistory) return false;
    return sessionStorage.chatHistory.split("\n").includes(chatLine);
}

function updateChatHistory(chatArr) {
    if (!sessionStorage.chatHistory) {
        sessionStorage.chatHistory = chatArr.join("\n");
        return;
    }
    let history = sessionStorage.chatHistory.split("\n");
    while (history.length > 100) history.shift();
    chatArr.forEach(line => history.push(line.trim()));
    sessionStorage.chatHistory = history.join("\n");
}

// -------------------------
// Timer logic
// -------------------------

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    startTime = performance.now() - pausedTime;

    timerInterval = setInterval(() => {
        updateTimerDisplay(performance.now() - startTime);
    }, 50);

    requestAnimationFrame(tickLoop);
}

function tickLoop() {
    if (!isRunning) return;

    const elapsed = performance.now() - startTime;
    const completedTicks = Math.floor(elapsed / 600);

    if (completedTicks !== lastRenderedTick) {
        lastRenderedTick = completedTicks;
        updateDisplay();
    }

    requestAnimationFrame(tickLoop);
}



function stopTimer() {
    if (!isRunning) return;

    isRunning = false;

    clearInterval(timerInterval);
    timerInterval = null;

    let rawElapsed = performance.now() - startTime;
    let wait = 0 // msUntilNextTick(rawElapsed);
    pausedTime = rawElapsed + wait;

    updateTimerDisplay(pausedTime);
    updateDisplay();

    if (displayInterval) {
        clearTimeout(displayInterval);
        displayInterval = null;
    }
}

function resetTimer() {
    if (timerInterval) clearInterval(timerInterval);

    isRunning = false;
    startTime = 0;
    pausedTime = 0;

    normalPP = 0;
    fastboiPP = 0;
    camoPP = 0;
    failedPP = 0;
    document.getElementById("tickOffsetInput").value = 0
    tickOffset = 0
    currentNPC = "default"

    updateTimerDisplay(0);
    updateDisplay();

    if (displayInterval) {
        clearInterval(displayInterval);
        displayInterval = null;
    }
}

// -------------------------
// Chat line interpretation
// -------------------------

function checkLine(line) {
    if (isRunning) {
        // TODO: Add triple/quad loot procs
        if (line.includes("Your camouflage outfit keeps you hidden")) camoPP++;
        if (line.includes("Your lightning-fast reactions")) {
            fastboiPP++;
            normalPP++;
        }
        if (line.includes("You pick the")) normalPP++;
        if (line.includes("You fail to pick")) failedPP++;

        let npcMatch = line.match(/You (?:pick|fail to pick) the (.+?)['’]s pocket/);
        
        if (npcMatch) {          
            currentNPC = npcMatch[1].toLowerCase().trim();
            console.log(currentNPC)
            updateNpcIcons(currentNPC);

        }
    } else {
        if (setting_autoStart && line.includes("You pick the")) {
            startTimer();
        }
    }
}


// -------------------------
// GUI update
// -------------------------

function updateDisplay() {
    // ---- Tick-locked time ----
    const elapsed = isRunning ? performance.now() - startTime : pausedTime;
    const rawTicks = Math.floor(elapsed / 600);
    const completedTicks = Math.max(0, rawTicks + tickOffset);    
    const ticksPerAction = setting_stickyFingers ? 2 : 3;
    const completedActionSlots = Math.floor(completedTicks / ticksPerAction);
    lastCompletedActionSlot = completedActionSlots;


    const elapsedHours = (completedTicks * 600) / 3600000;

    // ---- Counts ----
    const totalPP = normalPP + camoPP + fastboiPP;
    const safeNormal = normalPP > 0 ? normalPP : 1;

    // ---- PP/H (action-slot based, perfectly stable) ----
    const actionsPerHour = 3600000 / (ticksPerAction * 600); // 3000

    const normalPPPerHour  = completedActionSlots > 0
        ? (normalPP / completedActionSlots) * actionsPerHour
        : 0;

    const camoPPPerHour = completedActionSlots > 0
        ? (camoPP / completedActionSlots) * actionsPerHour
        : 0;

    const fastboiPPPerHour = completedActionSlots > 0
        ? (fastboiPP / completedActionSlots) * actionsPerHour
        : 0;

    const totalPPPerHour = completedActionSlots > 0
        ? (totalPP / completedActionSlots) * actionsPerHour
        : 0;

    const normalMaxPPPerHour = setting_stickyFingers ? 3000 : 2000;

    // ---- PROC BONUSES ----
    const camoPPBonus = (camoPP / safeNormal) * normalMaxPPPerHour;
    const fastBonus   = (fastboiPP / safeNormal) * normalMaxPPPerHour;
    const totalPPMax  = normalMaxPPPerHour + camoPPBonus + fastBonus;

    // ---- TABLE PERCENTS (PURE RATIOS) ----
    const normalPPPercent   = totalPP > 0 ? ((totalPP - failedPP) / totalPP) * 100 : 100;
    const camoPPPercent     = (camoPP / safeNormal) * 100;
    const fastboiPPPercent  = (fastboiPP / safeNormal) * 100;
    const totalPPPercent    = normalPPPercent + camoPPPercent + fastboiPPPercent;

    // ---- EFFICIENCY (ACTION-BASED, NOT TIME-BASED) ----
    let efficiencyPercent;
    if (completedActionSlots === 0) {
        efficiencyPercent = 100;
    } else {
        efficiencyPercent = (normalPP / completedActionSlots) * 100;
    }

    // ---- LOST ACTIONS ----
    const lostPickpockets = Math.max(0, totalPPMax - totalPPPerHour);

    // ---- NPC DROPS ----
    const npc = npcData[currentNPC] || npcData["default"];
    const drops = npc.drops;

    const results = drops.map(d => ({
        label: d.label,
        icon: d.icon,
        gained: totalPP * d.rate,
        hourly: totalPPPerHour * d.rate,
        lost: lostPickpockets * d.rate
    }));

    let html = `
    <table style="
        width:100%;
        border-collapse:collapse;
        margin-top:6px;
        font-size:13px;
    ">
        <thead>
            <tr style="border-bottom:1px solid #b18b29;">
                <th style="text-align:left;">Drop</th>
                <th style="text-align:left;"></th>
                <th style="text-align:right;">Gained</th>
                <th style="text-align:right;">Hourly rate</th>
                <th style="text-align:right;">Missed/H</th>
            </tr>
        </thead>
        <tbody>
    `;

    if (results.length === 0) {
        html += `
            <tr>
                <td colspan="4" style="opacity:0.75; padding-top:6px;">
                    No notable tracked drops for this NPC.
                </td>
            </tr>
        `;
    } else {
        results.forEach(r => {
            html += `
            <tr>
                <td><img src="${r.icon}" heigth="24"></td>
                <td style="text-align:left;">${r.label}</td>
                <td style="text-align:right;">${r.gained.toFixed(2)}</td>
                <td style="text-align:right;">${r.hourly.toFixed(2)}</td>
                <td style="text-align:right;">${r.lost.toFixed(2)}</td>
            </tr>
            `;
        });
    }

    html += `</tbody></table>`;

    document.getElementById("efficienyText").innerHTML = html;

    // ---- GUI UPDATES ----
    document.getElementById("normalCount").textContent = normalPP;
    document.getElementById("camoCount").textContent = camoPP;
    document.getElementById("fastCount").textContent = fastboiPP;
    document.getElementById("failedCount").textContent = failedPP;
    document.getElementById("totalCount").textContent  = totalPP;

    document.getElementById("pphNormalActual").textContent = normalPPPerHour.toFixed(0);
    document.getElementById("pphNormalMax").textContent    = normalMaxPPPerHour.toFixed(0);
    document.getElementById("pphNormalPer").textContent    = normalPPPercent.toFixed(2);

    document.getElementById("pphCamoActual").textContent   = camoPPPerHour.toFixed(0);
    document.getElementById("pphCamoMax").textContent      = camoPPBonus.toFixed(0);
    document.getElementById("pphCamoPer").textContent      = camoPPPercent.toFixed(2);

    document.getElementById("pphAgilityActual").textContent = fastboiPPPerHour.toFixed(0);
    document.getElementById("pphAgilityMax").textContent    = fastBonus.toFixed(0);
    document.getElementById("pphAgilityPer").textContent    = fastboiPPPercent.toFixed(2);

    document.getElementById("pphTotalActual").textContent = totalPPPerHour.toFixed(0);
    document.getElementById("pphTotalMax").textContent    = totalPPMax.toFixed(0);
    document.getElementById("pphTotalPer").textContent    = totalPPPercent.toFixed(2);

    document.getElementById("efficiencyPercent").textContent =
        efficiencyPercent.toFixed(2) + "%";
    document.getElementById("efficiencyBar").style.width =
        efficiencyPercent + "%";

    const missedActionSlots = completedActionSlots - normalPP;

    if(missedActionSlots == 0){
            document.getElementById("missedActionsText").textContent = " (Perfect)";
    } else {
        if(missedActionSlots > 0){
            document.getElementById("missedActionsText").textContent = ` (LOST ${missedActionSlots} PP)`;
        } else {
            document.getElementById("missedActionsText").textContent = ` (GAINED ${Math.abs(missedActionSlots)} PP?)`;

        }
    }


}


function updateNpcIcons(npcName) {
    const data = npcData[npcName] || npcData["default"];

    console.log(data)

    document.querySelectorAll(".npcIcon").forEach(el => {
        el.src = data.icon;
    });
}

// load sessions
function buildSessionList() {
    let raw = localStorage.getItem(SAVE_KEY);
    let saves;

    try {
        saves = JSON.parse(raw);
        if (!Array.isArray(saves)) saves = [];
    } catch {
        saves = [];
    }

    const list = document.getElementById("sessionList");
    list.innerHTML = "";

    if (saves.length === 0) {
        list.innerHTML = "<i>No saved sessions.</i>";
        return;
    }

    saves.forEach((s, index) => {
        const date = new Date(s.timestamp).toLocaleString();
        const totalPP = s.normalPP + s.fastboiPP + s.camoPP;

        let div = document.createElement("div");
        div.style.marginBottom = "10px";
        div.style.padding = "8px";
        div.style.borderBottom = "1px solid #555";

        div.innerHTML = `
            <b>Session ${index + 1}</b> <span style="opacity:0.7;">(${date})</span><br>
            Total PP: ${totalPP}<br>
            Time: ${(s.elapsed / 1000).toFixed(1)}s<br>

            <button class="loadBtn" data-index="${index}"
                style="margin-top:5px; margin-right:6px;
                background:#4CAF50; color:white; padding:4px 8px; border:0; border-radius:4px;">
                Load
            </button>

            <button class="deleteBtn" data-index="${index}"
                style="background:#b33131; color:white; padding:4px 8px; border:0; border-radius:4px;">
                Delete
            </button>
        `;

        list.appendChild(div);
    });

    // Add event listeners for all load buttons
    document.querySelectorAll(".loadBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = Number(btn.dataset.index);
            loadSessionFromIndex(index);
            document.getElementById("sessionPopup").style.display = "none";
        });
    });

    // Add event listeners for all delete buttons
    document.querySelectorAll(".deleteBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = Number(btn.dataset.index);
            deleteSession(index);
            buildSessionList(); // refresh list
        });
    });
}

function loadSessionFromIndex(i) {
    let saves = JSON.parse(localStorage.getItem(SAVE_KEY)) || [];
    if (!saves[i]) return;

    loadSessionIntoTracker(saves[i]);
}

function deleteSession(i) {
    let saves = JSON.parse(localStorage.getItem(SAVE_KEY)) || [];
    saves.splice(i, 1);
    localStorage.setItem(SAVE_KEY, JSON.stringify(saves));
}

// Timer
function updateTimerDisplay(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = Math.round(ms % 1000);

    const formatted =
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0') + "." +
        String(milliseconds).padStart(3, '0');

    document.getElementById("timer").textContent = formatted;
}

// -------------------------
// Helpers functions
// -------------------------

function msUntilNextTick(elapsed) {
    const tick = 600; // RuneScape tick = 0.6 seconds
    const remainder = elapsed % tick;
    return remainder === 0 ? 0 : (tick - remainder);
}

function buildSnapshot(completedActionSlots) {
    const ticksPerAction = setting_stickyFingers ? 2 : 3;
    const actionsPerHour = 3600000 / (ticksPerAction * 600);

    const normalPPPerHour =
        completedActionSlots > 0
            ? (normalPP / completedActionSlots) * actionsPerHour
            : 0;

    const efficiency =
        completedActionSlots > 0
            ? Math.min(100, (normalPP / completedActionSlots) * 100)
            : 100;

    return {
        timestamp: Date.now(),
        completedActionSlots,
        ticksPerAction,
        tickOffset,
        normalPP,
        camoPP,
        fastboiPP,
        failedPP,

        currentNPC,
        normalPPPerHour,
        efficiency
    };
}

function buildSavePreview(s) {
    const preview = document.getElementById("saveDataPreview");

    preview.innerHTML = `
        <div style="color:#ffcc00; margin-bottom:8px;">
            <i>
                Data will be saved on the <b>next completed pickpocket action</b>.
            </i>
        </div>

        <div><b>Normal PP:</b> ${s.normalPP}</div>
        <div><b>Fastboi PP:</b> ${s.fastboiPP}</div>
        <div><b>Camo PP:</b> ${s.camoPP}</div>
        <div><b>Failed PP:</b> ${s.failedPP}</div>

        <br>

        <div><b>Completed actions:</b> ${s.completedActionSlots}</div>
        <div><b>PP/H:</b> ${s.normalPPPerHour.toFixed(0)}</div>
        <div><b>Efficiency:</b> ${s.efficiency.toFixed(2)}%</div>
    `;
}

// -------------------------
// Settings
// -------------------------

document.getElementById("autoStartCheckbox").addEventListener("change", e => {
    setting_autoStart = e.target.checked;
    saveSettings();
});

document.getElementById("stickyFingersCheckbox").addEventListener("change", e => {
    setting_stickyFingers = e.target.checked;
    saveSettings();
    updateDisplay(); // recalc PP/H immediately
});

function loadSettings() {
    const raw = localStorage.getItem("ppTrackerSettings");
    if (raw) {
        try {
            const data = JSON.parse(raw);
            setting_autoStart = !!data.autoStart;
            setting_stickyFingers = !!data.stickyFingers;
        } catch (e) {}
    }

    // Reflect in UI
    document.getElementById("autoStartCheckbox").checked = setting_autoStart;
    document.getElementById("stickyFingersCheckbox").checked = setting_stickyFingers;
}

function saveSettings() {
    const data = {
        autoStart: setting_autoStart,
        stickyFingers: setting_stickyFingers
    };
    localStorage.setItem("ppTrackerSettings", JSON.stringify(data));
}

// -------------------------
// Save/load system (MULTI SAVE)
// -------------------------

function getCurrentSessionData(completedActionSlots) {
    return {
        timestamp: Date.now(),
        completedActionSlots,
        ticksPerAction,
        tickOffset,
        normalPP,
        camoPP,
        fastboiPP,
        failedPP,
        currentNPC
    };
}

function saveState(snapshot) {
    let raw = localStorage.getItem(SAVE_KEY);
    let saves;

    try {
        saves = JSON.parse(raw);
        if (!Array.isArray(saves)) saves = [];
    } catch {
        saves = [];
    }

    saves.push(snapshot);

    localStorage.setItem(SAVE_KEY, JSON.stringify(saves));
}

// Load all sessions + build UI
function loadState() {
    let raw = localStorage.getItem(SAVE_KEY);
    let saves;

    try {
        saves = JSON.parse(raw);
        if (!Array.isArray(saves)) saves = [];
    } catch {
        saves = [];
    }

    const container = document.getElementById("previousSessions");
    if (!container) return;

    container.innerHTML = "";

    saves.forEach((s, index) => {
        // intentionally empty now — legacy UI removed
    });
}


function loadSessionIntoTracker(s) {
    stopTimer();

    normalPP  = s.normalPP;
    camoPP    = s.camoPP;
    fastboiPP = s.fastboiPP;
    failedPP  = s.failedPP;

    currentNPC = s.currentNPC || "default";

    // ✅ RESTORE TICK CORRECTION
    tickOffset = s.tickOffset || 0;
    document.getElementById("tickOffsetInput").value = tickOffset;

    // ✅ RECONSTRUCT TIME FROM ACTION SLOTS
    const ticksPerAction = s.ticksPerAction ?? (setting_stickyFingers ? 2 : 3);
    const restoredTicks = s.completedActionSlots * ticksPerAction;

    pausedTime = restoredTicks * 600;
    startTime = performance.now() - pausedTime;

    updateTimerDisplay(pausedTime);
    updateDisplay();
}

function clearSave() {
    localStorage.removeItem(SAVE_KEY);
}

window.addEventListener("DOMContentLoaded", () => {
    loadSettings();
    loadState();
});
