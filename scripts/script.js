/* =========================================================
   PP TRACKER
   ========================================================= */

A1lib.identifyApp("appconfig.json");

const INVENTORY_ICON = {
  width: 9,
data: "HzuF/x87hf84QoT/OEKE/xgkN/8YJDf/HzuF/yQ9a/8kPWv/HzuF/yQ9a/8kPWv/JD1r/yQ9a/8YJDf/FSdN/x87hf8VJ03/BREi/yQ9a/8fO4X/JD1r/yQ9a/8VJ03/FSdN/yQ9a/8NFlH/FhQb/wIEDf8VJ03/JD1r/xUnTf8VJ03/FhQb/yQ9a/9Tfaj/JD1r/yQ9a/8FDxP/BREi/xgkN/8NFlH/FhQb/x5oiv9zvdj/GCQ3/x87hf8fO4X/FSdN/xgkN/8CBA3/GCQ3/zF1o/8VJXH/GCQ3/xUnTf8kPWv/JD1r/x87hf8kPWv/FSdN/x5oiv8NFlH/GCQ3/xUnTf8VJ03/FSdN/yQ9a/8kPWv/AgQN/yZgcv80i6n/GCQ3/xgkN/8VJ03/FSdN/xUnTf8VJ03/FSVx/yQ9a/80i6n/BiQl/xgkN/8VJ03/HzuF/zhChP87VKn/O1Sp/w0WUf8FESL/"}


let currentNPC = "menaphos market guard";
const npcData = {
    "menaphos market guard": {
        icon: "https://runescape.wiki/images/Menaphos_market_guard_icon.png?bcb77",
        drops:[
{
    key: "acadia_wood_spirit",
    label: "Acadia wood spirit",
    icon: "https://runescape.wiki/images/Acadia_wood_spirit.png?e50f3",
    rate: 50 / 1000,
    width: 3,
    data: "f3V1/31ycv96cHD/fnJy/31ycv96cHD/QEda/0BJXf9ASV3/"
},
{
    key: "coins",
    label: "Coins",
    icon: "https://runescape.wiki/images/Coins_250.png?ddfd5",
    rate: 758 / 1000,
    width: 3,
    data: "EHGP/xCr2f8Qos3/EHGP/xCu3f8QpNH/EHCO/xCx4P8Qp9T/"
},
{
    key: "extra_fine_sand",
    label: "Extra fine sand",
    icon: "https://runescape.wiki/images/Extra_fine_sand.png?65005",
    rate: 100 / 1000,
    width: 3,
    data: "WpGw/12VtP8XR2v/Roit/0uSuv9Om8T/R46z/02Wvv9Om8T/"
},
{
    key: "large_bladed_adamant_salvage",
    label: "Large bladed adamant salvage",
    icon: "https://runescape.wiki/images/Large_bladed_adamant_salvage.png?aee03",
    rate: 20 / 1000,
    width: 3,
    data: "RlRA/zxHN/88Rzf/OkY1/0ZUQP88Rzf/OkY1/32Zdf9LXEb/"
},
{
    key: "menaphite_gift_offering_medium",
    label: "Menaphite gift offering (medium)",
    icon: "https://runescape.wiki/images/Menaphite_gift_offering_%28medium%29.png?1ab8d",
    rate: 2 / 1000,
    width: 3,
    data: "ToWa/1GLof9UWV3/VFld/1SQp/8XMDf/VFld/06mxf9Ci6b/"
},
{
    key: "menaphite_gift_offering_small",
    label: "Menaphite gift offering (small)",
    icon: "https://runescape.wiki/images/Menaphite_gift_offering_%28small%29.png?0d4e8",
    rate: 4 / 1000,
    width: 3,
    data: "VFld/1RZXf8cS1z/VFld/1RZXf9UWV3/QLDW/0Cw1v9AsNb/"
},
{
    key: "potato_cactus",
    label: "Potato cactus",
    icon: "https://runescape.wiki/images/Potato_cactus.png?673c8",
    rate: 5 / 1000,
    width: 3,
    data: "MF5U/ypUS/8qVEv/EC0q/ydJQv8nTUT/FzUw/yRARP8kRDz/"
},
{
    key: "sealed_clue_scroll_elite",
    label: "Sealed clue scroll (elite)",
    icon: "https://runescape.wiki/images/Sealed_clue_scroll_%28elite%29.png?82229",
    rate: 495 / 100000,
    width: 3,
    data: "QFBl/1Fng/9Cztz/Pk1h/3aVvP9ykLX/UWeC/3WUu/9wjbL/"
},
{
    key: "sealed_clue_scroll_hard",
    label: "Sealed clue scroll (hard)",
    icon: "https://runescape.wiki/images/Sealed_clue_scroll_%28hard%29.png?64dd1",
    rate: 6 / 1000,
    width: 3,
    data: "QFBl/1Fng//MzdT/Pk1h/3aVvP9ykLX/UWeC/3WUu/9wjbL/"
},
{
    key: "sealed_clue_scroll_master",
    label: "Sealed clue scroll (master)",
    icon: "https://runescape.wiki/images/Sealed_clue_scroll_%28master%29.png?f1baf",
    rate: 5 / 100000,
    width: 3,
    data: "QFBl/1Fng//OqlP/Pk1h/3aVvP9ykLX/UWeC/3WUu/9wjbL/"
},
{
    key: "vital_spark",
    label: "Vital spark",
    icon: "https://runescape.wiki/images/Vital_spark.png?a594c",
    rate: 2 / 1000,
    width: 3,
    data: "UFAn/42NR//ExGr/mJhQ/93dcv/n523/1tZv/9/fcf+QkUT/"
},
{
    key: "waterskin_4",
    label: "Waterskin (4)",
    icon: "https://runescape.wiki/images/Waterskin_%284%29.png?77565",
    rate: 50 / 1000,
    width: 3,
    data: "Mj5C/yQtMP8QEBD/NUBE/ycwMv8QFxf/NUBE/yoyNf8XHCD/"
}

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

// Alt1 setup
const reader = new Chatbox.default();
const appColor = A1lib.mixColor(255, 199, 0);
const timestampRegex = /\[\d{2}:\d{2}:\d{2}\]/g;

// Save keys
const STORAGE_KEY = "ppTracker:state:v1";
const SESSIONS_KEY = "ppTracker:sessions:v1";

const TICK_MS = 600;

// ===============================
// Small utilities
// ===============================
function $(id) { return document.getElementById(id); }

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function deepMerge(target, src) {
  if (!src || typeof src !== "object") return target;
  for (const k of Object.keys(src)) {
    const sv = src[k];
    const tv = target[k];
    if (Array.isArray(sv)) target[k] = sv.slice();
    else if (sv && typeof sv === "object" && tv && typeof tv === "object" && !Array.isArray(tv)) {
      target[k] = deepMerge({ ...tv }, sv);
    } else target[k] = sv;
  }
  return target;
}

function safeParseInt(v, fallback = 0) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : fallback;
}

// ===============================
// State 
// ===============================
function defaultState() {
  return {
    // timer
    isRunning: false,
    startTime: 0, 
    pausedTime: 0,       
    lastRenderedTick: -1,
    tickOffset: 0,

    // settings
    settings: {
      autoStart: false,
      stickyFingers: true,
    },

    // counters
    counters: {
      normalPP: 0,
      fastboiPP: 0,
      camoPP: 0,
      failedPP: 0,
    },

    // streaks
    ppStreak: 0,
    streaks: [],

    // session context
    currentNPC: "menaphos market guard",

    buffs: {
      playerLevel: 99,
      targetLevel: 1,

      oblivious: false,

      auraEnabled: false,
      auraTier: 0,

      crystalMask: false,
      crystalMaskLightForm: false,
      weekend: false,
      soulDistractor: false,
      exoHands: false,
      ardyCloak: false,
      viturRing: false,
      magpie: false,
    },
  };
}

let state = defaultState();

let saveTimer = null;
function requestSave() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(saveStateToLocalStorage, 250);
}

function saveStateToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Save failed:", e);
  }
}

function loadStateFromLocalStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    state = deepMerge(defaultState(), parsed);

    state.isRunning = false;
    state.startTime = 0;
  } catch (e) {
    console.warn("Load failed:", e);
  }
}

// ===============================
// UI <-> State sync
// ===============================
function applyStateToUI() {
  if ($("autoStartCheckbox")) $("autoStartCheckbox").checked = !!state.settings.autoStart;
  if ($("stickyFingersCheckbox")) $("stickyFingersCheckbox").checked = !!state.settings.stickyFingers;

  if ($("tickOffsetInput")) $("tickOffsetInput").value = String(state.tickOffset || 0);

  if ($("playerThievingLevel")) $("playerThievingLevel").value = String(state.buffs.playerLevel ?? 99);
  if ($("targetThievingLevel")) $("targetThievingLevel").value = String(state.buffs.targetLevel ?? 1);

  if ($("buffOblivious")) $("buffOblivious").checked = !!state.buffs.oblivious;

  if ($("buffAuraEnabled")) $("buffAuraEnabled").checked = !!state.buffs.auraEnabled;
  if ($("buffAuraTier")) $("buffAuraTier").value = String(state.buffs.auraTier ?? 0);

  if ($("buffCrystalMask")) $("buffCrystalMask").checked = !!state.buffs.crystalMask;
  if ($("buffCrystalMaskLightForm")) $("buffCrystalMaskLightForm").checked = !!state.buffs.crystalMaskLightForm;
  if ($("buffWeekend")) $("buffWeekend").checked = !!state.buffs.weekend;
  if ($("buffSoulDistractor")) $("buffSoulDistractor").checked = !!state.buffs.soulDistractor;
  if ($("buffExoHands")) $("buffExoHands").checked = !!state.buffs.exoHands;
  if ($("buffArdyCloak")) $("buffArdyCloak").checked = !!state.buffs.ardyCloak;
  if ($("buffViturRing")) $("buffViturRing").checked = !!state.buffs.viturRing;
  if ($("buffMagpie")) $("buffMagpie").checked = !!state.buffs.magpie;

  updateNpcIcons(state.currentNPC);
}

function readUIIntoState() {
  // settings
  state.settings.autoStart = !!$("autoStartCheckbox")?.checked;
  state.settings.stickyFingers = !!$("stickyFingersCheckbox")?.checked;

  // tick offset
  state.tickOffset = safeParseInt($("tickOffsetInput")?.value, 0);

  // buffs/levels
  state.buffs.playerLevel = safeParseInt($("playerThievingLevel")?.value, 99);
  state.buffs.targetLevel = safeParseInt($("targetThievingLevel")?.value, 1);

  state.buffs.oblivious = !!$("buffOblivious")?.checked;

  state.buffs.auraEnabled = !!$("buffAuraEnabled")?.checked;
  state.buffs.auraTier = safeParseInt($("buffAuraTier")?.value, 0);

  state.buffs.crystalMask = !!$("buffCrystalMask")?.checked;
  state.buffs.crystalMaskLightForm = !!$("buffCrystalMaskLightForm")?.checked;
  state.buffs.weekend = !!$("buffWeekend")?.checked;
  state.buffs.soulDistractor = !!$("buffSoulDistractor")?.checked;
  state.buffs.exoHands = !!$("buffExoHands")?.checked;
  state.buffs.ardyCloak = !!$("buffArdyCloak")?.checked;
  state.buffs.viturRing = !!$("buffViturRing")?.checked;
  state.buffs.magpie = !!$("buffMagpie")?.checked;
}

// crystal mask exclusivity
function enforceCrystalMaskExclusive() {
  const cm = $("buffCrystalMask");
  const lf = $("buffCrystalMaskLightForm");
  if (!cm || !lf) return;

  cm.addEventListener("change", () => {
    if (cm.checked) lf.checked = false;
    readUIIntoState();
    requestSave();
    updateTotalBuffUI();
    updateSuccessChanceUI();
  });

  lf.addEventListener("change", () => {
    if (lf.checked) cm.checked = false;
    readUIIntoState();
    requestSave();
    updateTotalBuffUI();
    updateSuccessChanceUI();
  });
}

function wireUIAutosave() {
  const ids = [
    "autoStartCheckbox", "stickyFingersCheckbox",
    "tickOffsetInput",
    "playerThievingLevel", "targetThievingLevel",
    "buffOblivious",
    "buffCrystalMask", "buffCrystalMaskLightForm",
    "buffWeekend", "buffSoulDistractor", "buffExoHands",
    "buffArdyCloak", "buffViturRing", "buffMagpie",
    "buffAuraEnabled", "buffAuraTier",
  ];

  const handler = () => {
    readUIIntoState();
    requestSave();
    updateTotalBuffUI();
    updateSuccessChanceUI();
    updateDisplay();
  };

  ids.forEach((id) => {
    const el = $(id);
    if (!el) return;
    el.addEventListener("change", handler);
    el.addEventListener("input", handler);
  });

  enforceCrystalMaskExclusive();
}

// ===============================
// Derived getters
// ===============================
function getTicksPerAction() {
  return state.settings.stickyFingers ? 2 : 3;
}

function getTotalBuff() {
  const auraValue = state.buffs.auraEnabled ? (state.buffs.auraTier || 0) : 0;

  return (
    (state.buffs.crystalMask ? 15 : 0) +
    (state.buffs.crystalMaskLightForm ? 30 : 0) +
    (state.buffs.weekend ? 20 : 0) +
    (state.buffs.soulDistractor ? 2 : 0) +
    (state.buffs.exoHands ? 5 : 0) +
    (state.buffs.ardyCloak ? 10 : 0) +
    (state.buffs.viturRing ? 5 : 0) +
    (state.buffs.magpie ? 3 : 0) +
    auraValue
  );
}

// ===============================
// Buttons
// ===============================
let timerInterval = null;

$("startBtn")?.addEventListener("click", startTimer);
$("stopBtn")?.addEventListener("click", stopTimer);
$("resetBtn")?.addEventListener("click", resetTimer);

$("openSessionPopup")?.addEventListener("click", () => {
  buildSessionList();
  $("sessionPopup").style.display = "flex";
});
$("closeSessionPopup")?.addEventListener("click", () => {
  $("sessionPopup").style.display = "none";
});

$("saveBtn")?.addEventListener("click", () => {
  if (!state.isRunning) return;

  const ticksPerAction = getTicksPerAction();
  const elapsed = performance.now() - state.startTime;
  const rawTicks = Math.floor(elapsed / TICK_MS);
  const completedTicks = Math.max(0, rawTicks + (state.tickOffset || 0));
  const completedActionSlots = Math.floor(completedTicks / ticksPerAction);

  const snap = {
    timestamp: Date.now(),
    completedActionSlots,
    ticksPerAction,
    state: JSON.parse(JSON.stringify(state)),
  };

  saveSessionSnapshot(snap);
  buildSessionList();
});

function saveSessionSnapshot(snapshot) {
  const arr = JSON.parse(localStorage.getItem(SESSIONS_KEY) || "[]");
  arr.push(snapshot);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(arr));
}

function deleteSession(index) {
  const arr = JSON.parse(localStorage.getItem(SESSIONS_KEY) || "[]");
  arr.splice(index, 1);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(arr));
}

function loadSession(index) {
  const arr = JSON.parse(localStorage.getItem(SESSIONS_KEY) || "[]");
  const snap = arr[index];
  if (!snap) return;

  stopTimer();

  state = deepMerge(defaultState(), snap.state || {});
  state.isRunning = false;
  state.startTime = 0;

  const ticksPerAction = snap.ticksPerAction ?? getTicksPerAction();
  const restoredTicks = (snap.completedActionSlots || 0) * ticksPerAction;
  state.pausedTime = restoredTicks * TICK_MS;

  applyStateToUI();
  requestSave();

  updateTimerDisplay(state.pausedTime);
  updateDisplay();
  updateTotalBuffUI();
  updateSuccessChanceUI();
  renderHistogram(state.streaks);
}

function buildSessionList() {
  const list = $("sessionList");
  if (!list) return;

  const arr = JSON.parse(localStorage.getItem(SESSIONS_KEY) || "[]");
  list.innerHTML = "";

  if (!arr.length) {
    list.innerHTML = "<i>No saved sessions.</i>";
    return;
  }

  arr.forEach((s, i) => {
    const date = new Date(s.timestamp).toLocaleString();
    const c = s.state?.counters || {};
    const totalPP = (c.normalPP || 0) + (c.fastboiPP || 0) + (c.camoPP || 0);

    const div = document.createElement("div");
    div.style.marginBottom = "10px";
    div.style.padding = "8px";
    div.style.borderBottom = "1px solid #555";

    div.innerHTML = `
      <b>Session ${i + 1}</b> <span style="opacity:0.7;">(${date})</span><br>
      Total PP: ${totalPP}<br>
      Action slots: ${s.completedActionSlots ?? 0}<br>
      <button class="loadBtn" data-index="${i}"
        style="margin-top:5px; margin-right:6px; background:#4CAF50; color:white; padding:4px 8px; border:0; border-radius:4px;">
        Load
      </button>
      <button class="deleteBtn" data-index="${i}"
        style="background:#b33131; color:white; padding:4px 8px; border:0; border-radius:4px;">
        Delete
      </button>
    `;
    list.appendChild(div);
  });

  list.querySelectorAll(".loadBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      loadSession(Number(btn.dataset.index));
      $("sessionPopup").style.display = "none";
    });
  });

  list.querySelectorAll(".deleteBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      deleteSession(Number(btn.dataset.index));
      buildSessionList();
    });
  });
}

// ===============================
// Timer logic
// ===============================
function startTimer() {
  if (state.isRunning) return;
  state.isRunning = true;

  state.startTime = performance.now() - (state.pausedTime || 0);

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    updateTimerDisplay(performance.now() - state.startTime);
  }, 50);

  requestSave();
  requestAnimationFrame(tickLoop);
}

function stopTimer() {
  if (!state.isRunning) return;

  state.isRunning = false;

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;

  state.pausedTime = performance.now() - state.startTime;

  updateTimerDisplay(state.pausedTime);
  updateDisplay();
  requestSave();
}

function resetTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;

  state = deepMerge(defaultState(), {
    settings: state.settings, // keep settings on reset
    buffs: state.buffs,       // keep buffs/levels on reset
  });

  applyStateToUI();
  requestSave();

  updateTimerDisplay(0);
  updateDisplay();
  updateTotalBuffUI();
  updateSuccessChanceUI();
  renderHistogram(state.streaks);
}

function tickLoop() {
  if (!state.isRunning) return;

  const elapsed = performance.now() - state.startTime;
  const completedTicks = Math.floor(elapsed / TICK_MS);

  if (completedTicks !== state.lastRenderedTick) {
    state.lastRenderedTick = completedTicks;
    updateDisplay();
  }
  requestAnimationFrame(tickLoop);
}

function updateTimerDisplay(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.round(ms % 1000);

  const formatted =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + "." +
    String(milliseconds).padStart(3, "0");

  if ($("timer")) $("timer").textContent = formatted;
}

// ===============================
// Alt1 chatbox setup + parsing
// ===============================
function showSelectedChat(chat) {
  try {
    alt1.overLayRect(appColor, chat.mainbox.rect.x, chat.mainbox.rect.y,
      chat.mainbox.rect.width, chat.mainbox.rect.height, 2000, 5);
  } catch {}
}

window.setTimeout(() => {
  reader.readargs = {
    colors: [
      A1lib.mixColor(255, 255, 255),
      A1lib.mixColor(0, 255, 0),
      A1lib.mixColor(30, 255, 0),
      A1lib.mixColor(30, 255, 0),
    ],
    backwards: true,
  };

  reader.find();

  const findChat = setInterval(() => {
    if (reader.pos === null) reader.find();
    else {
      clearInterval(findChat);
      reader.pos.mainbox = reader.pos.boxes[0];
      showSelectedChat(reader.pos);

      setInterval(readChatbox, 200);
    }
  }, 1000);
}, 0);

function readChatbox() {
  const opts = reader.read() || [];
  let chatStr = "";

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

  const chatArr = chatStr.trim() ? chatStr.trim().split("\n") : null;
  if (!chatArr) return;

  for (const line of chatArr) {
    const chatLine = line.trim();
    if (chatLine && !isInHistory(chatLine)) {
      checkLine(chatLine);
    }
  }
  updateChatHistory(chatArr);
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

// ===============================
// Success chance math
// ===============================
function calcSuccessChance(attempt, yourLevel, targetLevel, totalBuff, oblivious) {
  const base = 75;
  const levelBonus = Math.max(0, yourLevel - targetLevel);
  const highReqBonus = targetLevel >= 100 ? 15 : 0;

  const freshWindow = 10 + (oblivious ? 5 : 0);
  const freshBonus = attempt <= freshWindow ? 10 : 0;
  const decay = attempt > freshWindow ? (attempt - freshWindow) : 0;

  const raw = base + levelBonus + highReqBonus + totalBuff + freshBonus - decay;
  return clamp(raw, 0, 100);
}

function getBreakdown(attempt, yourLevel, targetLevel, totalBuff, oblivious) {
  const base = 75;
  const levelBonus = Math.max(0, yourLevel - targetLevel);
  const highReqBonus = targetLevel >= 100 ? 15 : 0;

  const freshWindow = 10 + (oblivious ? 5 : 0);
  const freshBonus = attempt <= freshWindow ? 10 : 0;
  const decay = attempt > freshWindow ? (attempt - freshWindow) : 0;

  const raw = base + levelBonus + highReqBonus + totalBuff + freshBonus - decay;
  const final = clamp(raw, 0, 100);

  return { attempt, base, levelBonus, highReqBonus, totalBuff, freshWindow, freshBonus, decay, raw, final };
}

// Mean chance across rolls 1..N (descriptive only)
function calcMeanChance(attemptN, yourLevel, targetLevel, totalBuff, oblivious) {
  if (attemptN <= 0) return 0;
  let sum = 0;
  for (let a = 1; a <= attemptN; a++) sum += calcSuccessChance(a, yourLevel, targetLevel, totalBuff, oblivious);
  return sum / attemptN;
}

// Survival chance to succeed ALL rolls 1..N (multiplicative)
function calcSurvivalChance(attemptN, yourLevel, targetLevel, totalBuff, oblivious) {
  if (attemptN <= 0) return 0;
  let prob = 1;
  for (let a = 1; a <= attemptN; a++) {
    prob *= (calcSuccessChance(a, yourLevel, targetLevel, totalBuff, oblivious) / 100);
  }
  return prob * 100;
}

function updateTotalBuffUI() {
  const total = getTotalBuff();
  if ($("totalBuffValue")) $("totalBuffValue").textContent = String(total);
}

function updateSuccessChanceUI() {
  const yourLevel = state.buffs.playerLevel;
  const targetLevel = state.buffs.targetLevel;
  const totalBuff = getTotalBuff();
  const oblivious = !!state.buffs.oblivious;

  const attempt = (state.ppStreak || 0) + 1;

  const b = getBreakdown(attempt, yourLevel, targetLevel, totalBuff, oblivious);

  // mean chance so far:
  // const topValue = calcMeanChance(attempt, yourLevel, targetLevel, totalBuff, oblivious);

  // survival chance to succeed ALL so far:
  const topValue = calcSurvivalChance(attempt, yourLevel, targetLevel, totalBuff, oblivious);

  const top = $("ppChanceFinal");
  const box = $("ppChanceBreakdown");
  if (!top || !box) return;

  top.textContent = `${topValue.toFixed(2)}%`;

  box.innerHTML = `
    <div>Attempt: ${b.attempt}</div>
    <div>Base: ${b.base}%</div>
    <div>Level bonus: +${b.levelBonus}%</div>
    <div>High requirement bonus (target ≥ 100): +${b.highReqBonus}%</div>
    <div>Buffs total: +${b.totalBuff}%</div>
    <div>Fresh bonus: +${b.freshBonus}% (window: ${b.freshWindow})</div>
    <div>Decay: -${b.decay}%</div>
    <hr style="border-color:#443c2a; margin:6px 0;">
    <div><b>Raw:</b> ${b.raw.toFixed(2)}%</div>
    <div><b>Final:</b> ${b.final.toFixed(2)}%</div>
  `;
}

// ===============================
// Chat line interpretation
// ===============================
function checkLine(line) {
  if (!state.isRunning) {
    if (state.settings.autoStart && line.includes("You pick the")) startTimer();
    return;
  }

  // CAMO
  if (line.includes("Your camouflage outfit keeps you hidden")) {
    state.counters.camoPP++;
    requestSave();
  }

  // FAST
  if (line.includes("Your lightning-fast reactions")) {
    state.counters.fastboiPP++;
    state.counters.normalPP++;
    requestSave();
  }

  // SUCCESS
  if (line.includes("You pick the")) {
    state.ppStreak++;
    state.counters.normalPP++;
    requestSave();
  }

  // FAIL
  if (line.includes("You fail to")) {
    if (state.ppStreak > 0) state.streaks.push(state.ppStreak);
    state.ppStreak = 0;
    state.counters.failedPP++;
    renderHistogram(state.streaks);
    requestSave();
  }

  // OPTIONAL: "avoid being hit" ends streak
  if (line.toLowerCase().includes("you avoid being hit")) {
    if (state.ppStreak > 0) state.streaks.push(state.ppStreak);
    state.ppStreak = 0;
    renderHistogram(state.streaks);
    requestSave();
  }

  // oblivious warning marker
  if (line.includes("not for much longer")) {
    console.log("PP attempts before Oblivious warning:", state.ppStreak);
  }

  updateTotalBuffUI();
  updateSuccessChanceUI();
  updateDisplay();
}

// ===============================
// Display
// ===============================
function updateNpcIcons(npcName) {
  // requires your npcData constant
  if (typeof npcData === "undefined") return;
  const data = npcData[npcName] || npcData["default"];
  document.querySelectorAll(".npcIcon").forEach(el => { el.src = data.icon; });
}

function updateDisplay() {
  const ticksPerAction = getTicksPerAction();

  // tick-locked time
  const elapsed = state.isRunning ? (performance.now() - state.startTime) : (state.pausedTime || 0);
  const rawTicks = Math.floor(elapsed / TICK_MS);
  const completedTicks = Math.max(0, rawTicks + (state.tickOffset || 0));
  const completedActionSlots = Math.floor(completedTicks / ticksPerAction);

  const normalPP = state.counters.normalPP;
  const camoPP = state.counters.camoPP;
  const fastPP = state.counters.fastboiPP;
  const failedPP = state.counters.failedPP;

  const totalPP = normalPP + camoPP + fastPP;

  const actionsPerHour = 3600000 / (ticksPerAction * TICK_MS);
  const normalPPPerHour = completedActionSlots > 0 ? (normalPP / completedActionSlots) * actionsPerHour : 0;
  const camoPPPerHour = completedActionSlots > 0 ? (camoPP / completedActionSlots) * actionsPerHour : 0;
  const fastPPPerHour = completedActionSlots > 0 ? (fastPP / completedActionSlots) * actionsPerHour : 0;
  const totalPPPerHour = completedActionSlots > 0 ? (totalPP / completedActionSlots) * actionsPerHour : 0;

  const normalMaxPPPerHour = state.settings.stickyFingers ? 3000 : 2000;
  const safeNormal = normalPP > 0 ? normalPP : 1;

  const camoBonus = (camoPP / safeNormal) * normalMaxPPPerHour;
  const fastBonus = (fastPP / safeNormal) * normalMaxPPPerHour;
  const totalPPMax = normalMaxPPPerHour + camoBonus + fastBonus;

  const normalPPPercent = totalPP > 0 ? ((totalPP - failedPP) / totalPP) * 100 : 100;
  const camoPPPercent = (camoPP / safeNormal) * 100;
  const fastPPPercent = (fastPP / safeNormal) * 100;
  const totalPPPercent = normalPPPercent + camoPPPercent + fastPPPercent;

  const efficiencyPercent = completedActionSlots === 0 ? 100 : (normalPP / completedActionSlots) * 100;

  // Counters
  if ($("normalCount")) $("normalCount").textContent = String(normalPP);
  if ($("camoCount")) $("camoCount").textContent = String(camoPP);
  if ($("fastCount")) $("fastCount").textContent = String(fastPP);
  if ($("failedCount")) $("failedCount").textContent = String(failedPP);
  if ($("totalCount")) $("totalCount").textContent = String(totalPP);

  // pph
  if ($("pphNormalActual")) $("pphNormalActual").textContent = normalPPPerHour.toFixed(0);
  if ($("pphNormalMax")) $("pphNormalMax").textContent = normalMaxPPPerHour.toFixed(0);
  if ($("pphNormalPer")) $("pphNormalPer").textContent = normalPPPercent.toFixed(2);

  if ($("pphCamoActual")) $("pphCamoActual").textContent = camoPPPerHour.toFixed(0);
  if ($("pphCamoMax")) $("pphCamoMax").textContent = camoBonus.toFixed(0);
  if ($("pphCamoPer")) $("pphCamoPer").textContent = camoPPPercent.toFixed(2);

  if ($("pphAgilityActual")) $("pphAgilityActual").textContent = fastPPPerHour.toFixed(0);
  if ($("pphAgilityMax")) $("pphAgilityMax").textContent = fastBonus.toFixed(0);
  if ($("pphAgilityPer")) $("pphAgilityPer").textContent = fastPPPercent.toFixed(2);

  if ($("pphTotalActual")) $("pphTotalActual").textContent = totalPPPerHour.toFixed(0);
  if ($("pphTotalMax")) $("pphTotalMax").textContent = totalPPMax.toFixed(0);
  if ($("pphTotalPer")) $("pphTotalPer").textContent = totalPPPercent.toFixed(2);

  if ($("efficiencyPercent")) $("efficiencyPercent").textContent = `${efficiencyPercent.toFixed(2)}%`;
  if ($("efficiencyBar")) $("efficiencyBar").style.width = `${efficiencyPercent}%`;

  // streak stats
  const streaks = state.streaks || [];
  const min = streaks.length ? Math.min(...streaks) : 0;
  const max = streaks.length ? Math.max(...streaks) : 0;
  const avg = streaks.length ? (streaks.reduce((a, b) => a + b, 0) / streaks.length) : 0;

  if ($("streakCurrent")) $("streakCurrent").textContent = String(state.ppStreak || 0);
  if ($("streakMin")) $("streakMin").textContent = String(min);
  if ($("streakAvg")) $("streakAvg").textContent = avg.toFixed(1);
  if ($("streakMax")) $("streakMax").textContent = String(max);
  if ($("streaks")) $("streaks").textContent = streaks.join(",");
}

// ===============================
// Histogram
// ===============================
function buildHistogram(streaks) {
  const hist = {};
  for (const s of streaks) hist[s] = (hist[s] || 0) + 1;
  return hist;
}

function renderHistogram(streaks) {
  const container = $("streakHistogram");
  if (!container) return;

  const hist = buildHistogram(streaks);
  const sorted = Object.keys(hist).map(n => parseInt(n, 10)).sort((a, b) => a - b);

  let html = "<b>Streak histogram</b><br>";
  for (const val of sorted) {
    const count = hist[val];
    const bar = "█".repeat(count);
    html += `${val.toString().padStart(3, " ")}: ${bar} (${count})<br>`;
  }
  container.innerHTML = html;
}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromLocalStorage();
  applyStateToUI();
  wireUIAutosave();

  updateTotalBuffUI();
  updateSuccessChanceUI();
  renderHistogram(state.streaks);

  updateTimerDisplay(state.pausedTime || 0);
  updateDisplay();
});