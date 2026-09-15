const DEFAULT_GAS_URL = "https://script.google.com/macros/s/AKfycbzZjKeZLlq6VBQpUiFLAcHf_92mU2e5OkqSRtYk26uvKLVZmagRKYggdJa5DTBrr8iZ/exec";
const STORAGE_KEY = "LIFE_OS_DATA_V55_DATE_FIXED";

const DEFAULT_HIERARCHY = [
  {
    id: "major_daily",
    name: "毎日の習慣",
    groups: [
      {
        id: "target",
        name: "🎯 今日の目標",
        single: true,
        tasks: [{ id: "t_target_1", title: "8,000歩達成", memo: "" }]
      },
      {
        id: "morning",
        name: "🌅 朝",
        tasks: [
          { id: "t_m_1", title: "起きる", memo: "" },
          { id: "t_m_2", title: "薬を飲む", memo: "" },
          { id: "t_m_3", title: "朝のサプリ", memo: "" },
          { id: "t_m_4", title: "顔を洗う", memo: "" },
          { id: "t_m_5", title: "保湿", memo: "" },
          { id: "t_m_6", title: "髪を乾かす", memo: "" }
        ]
      },
      {
        id: "gym",
        name: "🏋️ ジム",
        tasks: [
          { id: "t_g_1", title: "ジムへ行く準備", memo: "タオル・イヤホン・パワーグリップ" },
          { id: "t_g_2", title: "ジムへ行って運動する", memo: "" },
          { id: "t_g_3", title: "体組成計で計測・写真を撮る", memo: "" },
          { id: "t_g_4", title: "結果をスプレッドシートに入れる", memo: "" }
        ]
      },
      {
        id: "after_gym",
        name: "🏠 ジム後",
        tasks: [
          { id: "t_ag_1", title: "BCAA", memo: "" },
          { id: "t_ag_2", title: "お風呂", memo: "" },
          { id: "t_ag_3", title: "プロテイン", memo: "" },
          { id: "t_ag_4", title: "カレンダーにシールはる", memo: "" }
        ]
      },
      {
        id: "lunch",
        name: "🍚 昼",
        tasks: [
          { id: "t_l_1", title: "デトックススープ", memo: "" },
          { id: "t_l_2", title: "納豆＋卵入り沼", memo: "" },
          { id: "t_l_3", title: "昼のサプリ", memo: "" }
        ]
      },
      {
        id: "cleaning",
        name: "🧹 掃除・空き時間",
        tasks: [
          { id: "t_c_1", title: "掃除", memo: "" },
          { id: "t_c_2", title: "捨て活・不用品整理", memo: "" },
          { id: "t_c_3", title: "あたらしい音楽を聞いた", memo: "" },
          { id: "t_c_4", title: "映像をみた", memo: "" },
          { id: "t_c_5", title: "しらべものをした", memo: "" }
        ]
      },
      {
        id: "night",
        name: "🌙 夜",
        tasks: [
          { id: "t_n_1", title: "夜ご飯", memo: "" },
          { id: "t_n_2", title: "サプリ", memo: "" },
          { id: "t_n_3", title: "洗濯〜乾燥を回す", memo: "" }
        ]
      },
      {
        id: "bath",
        name: "🛁 夜のお風呂",
        tasks: [
          { id: "t_b_1", title: "湯船をためる", memo: "" },
          { id: "t_b_2", title: "歯間フロス・ソニッケアー準備", memo: "" },
          { id: "t_b_3", title: "ホワイトニング準備", memo: "" },
          { id: "t_b_4", title: "鼻うがい準備", memo: "" },
          { id: "t_b_5", title: "クレンジングシャンプー", memo: "" },
          { id: "t_b_6", title: "普通のシャンプーで二度洗い", memo: "" },
          { id: "t_b_7", title: "ケラチンスプレーとトリートメント", memo: "" },
          { id: "t_b_8", title: "鼻うがい", memo: "" },
          { id: "t_b_9", title: "歯間フロス", memo: "" },
          { id: "t_b_10", title: "湯船につかる", memo: "" },
          { id: "t_b_11", title: "歯磨き", memo: "" },
          { id: "t_b_12", title: "ホームホワイトニング", memo: "" },
          { id: "t_b_13", title: "ストレッチ", memo: "" },
          { id: "t_b_14", title: "体を洗う", memo: "" },
          { id: "t_b_15", title: "顔を洗う", memo: "" },
          { id: "t_b_16", title: "ブテナロックで足・脇・耳裏を洗う", memo: "" }
        ]
      },
      {
        id: "after_bath",
        name: "✨ お風呂上がり",
        tasks: [
          { id: "t_ab_1", title: "お風呂掃除", memo: "" },
          { id: "t_ab_2", title: "体に化粧水スプレーとクリーム保湿", memo: "" },
          { id: "t_ab_3", title: "顔を保湿", memo: "" },
          { id: "t_ab_4", title: "まつげ美容液", memo: "" },
          { id: "t_ab_5", title: "ワキにリフレア", memo: "" },
          { id: "t_ab_6", title: "顔パック", memo: "" },
          { id: "t_ab_7", title: "ビオチンケラチンスプレー", memo: "" },
          { id: "t_ab_8", title: "髪を乾かす", memo: "" },
          { id: "t_ab_9", title: "ヘアオイル", memo: "" },
          { id: "t_ab_10", title: "美顔器", memo: "" }
        ]
      },
      {
        id: "laundry",
        name: "🧺 洗濯終了後",
        tasks: [
          { id: "t_ld_1", title: "洗濯物を取り出す", memo: "" },
          { id: "t_ld_2", title: "畳む", memo: "" },
          { id: "t_ld_3", title: "フィルターのホコリを取る", memo: "" }
        ]
      },
      {
        id: "before_sleep",
        name: "🛌 寝る前",
        tasks: [
          { id: "t_bs_1", title: "薬をのむ", memo: "" },
          { id: "t_bs_2", title: "爪にオイル塗る", memo: "" }
        ]
      }
    ]
  }
];

const DEFAULT_OCCASIONAL = [
  { id: "occ_1", title: "美容室予約", completed: false, completedAt: null, lastDoneDate: null, prevDoneDate: null, prevMemo: "" },
  { id: "occ_2", title: "まつげパーマ予約", completed: false, completedAt: null, lastDoneDate: null, prevDoneDate: null, prevMemo: "" },
  { id: "occ_3", title: "歯医者予約", completed: false, completedAt: null, lastDoneDate: null, prevDoneDate: null, prevMemo: "" },
  { id: "occ_nail", title: "セルフネイル", completed: false, completedAt: null, lastDoneDate: null, memo: "", allowMemo: true, prevDoneDate: null, prevMemo: "" },
  { id: "occ_4", title: "タブレット充電", completed: false, completedAt: null, lastDoneDate: null, prevDoneDate: null, prevMemo: "" },
  { id: "occ_5", title: "イヤホン充電", completed: false, completedAt: null, lastDoneDate: null, prevDoneDate: null, prevMemo: "" },
  { id: "occ_6", title: "スピーカー充電", completed: false, completedAt: null, lastDoneDate: null, prevDoneDate: null, prevMemo: "" },
  { id: "occ_7", title: "美顔器充電", completed: false, completedAt: null, lastDoneDate: null, prevDoneDate: null, prevMemo: "" },
  { id: "occ_8", title: "大きめの掃除", completed: false, completedAt: null, lastDoneDate: null, memo: "", allowMemo: true, prevDoneDate: null, prevMemo: "" },
  { id: "occ_9", title: "捨て活", completed: false, completedAt: null, lastDoneDate: null, memo: "", allowMemo: true, prevDoneDate: null, prevMemo: "" }
];

const DEFAULT_ROUTINES = [
  { id: "rt_nail", title: "セルフネイル付け替え", intervalDays: 21, lastDone: null, memo: "", allowMemo: true, deadline: null, prevDone: null, prevMemo: "" },
  { id: "rt_hair", title: "美容室", intervalDays: 30, lastDone: null, memo: "", allowMemo: true, deadline: null, prevDone: null, prevMemo: "" },
  { id: "rt_dental", title: "歯医者でクリーニング", intervalDays: 60, lastDone: null, memo: "", allowMemo: true, deadline: null, prevDone: null, prevMemo: "" },
  { id: "rt_lash", title: "まつ毛パーマ", intervalDays: 30, lastDone: null, memo: "", allowMemo: true, deadline: null, prevDone: null, prevMemo: "" },
  { id: "rt_earphone", title: "イヤホン充電", intervalDays: 3, lastDone: null, deadline: null, prevDone: null, prevMemo: "" },
  { id: "rt_speaker", title: "スピーカー充電", intervalDays: 7, lastDone: null, deadline: null, prevDone: null, prevMemo: "" },
  { id: "rt_filter", title: "換気扇フィルター掃除", intervalDays: 30, lastDone: null, memo: "", allowMemo: true, deadline: null, prevDone: null, prevMemo: "" },
  { id: "rt_blood", title: "千歳烏山で血液検査", intervalDays: 90, lastDone: null, memo: "", allowMemo: true, deadline: null, prevDone: null, prevMemo: "" },
  { id: "rt_thyroid", title: "伊東病院で甲状腺検査", intervalDays: 180, lastDone: null, memo: "", allowMemo: true, deadline: null, prevDone: null, prevMemo: "" },
  { id: "rt_checkup", title: "港区健康診断", intervalDays: 365, lastDone: null, memo: "", allowMemo: true, deadline: null, prevDone: null, prevMemo: "" }
];
let state = {
  currentTab: "today",
  viewDateStr: "",
  majors: [],
  todayLog: {},
  todayDateStr: "",
  todayDiary: "",
  occasional: [],
  routines: [],
  history: {},
  openHistoryDates: {}
};

const getTodayString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const getCurrentTimeStr = () => {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};

function getHolidayName(y, m, d, day) {
  const fixed = { 
    "1-1":"元日", "2-11":"建国記念の日", "2-23":"天皇誕生日", "4-29":"昭和の日", 
    "5-3":"憲法記念日", "5-4":"みどりの日", "5-5":"こどもの日", "8-11":"山の日", 
    "11-3":"文化の日", "11-23":"勤労感謝の日" 
  };
  if (fixed[`${m}-${d}`]) return fixed[`${m}-${d}`];
  const nth = Math.floor((d - 1) / 7) + 1;
  if (day === 1) {
    if (m === 1 && nth === 2) return "成人の日";
    if (m === 7 && nth === 3) return "海の日";
    if (m === 9 && nth === 3) return "敬老の日";
    if (m === 10 && nth === 2) return "スポーツの日";
  }
  if (m === 3 && d === Math.floor(20.8431 + 0.242194 * (y - 1980) - Math.floor((y - 1980) / 4))) return "春分の日";
  if (m === 9 && d === Math.floor(23.2488 + 0.242194 * (y - 1980) - Math.floor((y - 1980) / 4))) return "秋分の日";
  if (day === 1 && d > 1 && getHolidayName(y, m, d - 1, 0)) return "振替休日";
  return "";
}

function getFormattedDateHero(targetDateStr) {
  const [y, m, d] = targetDateStr.split('-').map(Number);
  const targetDate = new Date(y, m - 1, d);
  const today = new Date(getTodayString());
  const diffDays = Math.round((targetDate - today) / 86400000);

  let label = "";
  if (diffDays === 0) label = "今日";
  else if (diffDays === -1) label = "きのう";
  else if (diffDays === 1) label = "あした";

  const day = targetDate.getDay();
  const holiday = getHolidayName(y, m, d, day);
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
  const dayClass = day === 0 ? "sun" : (day === 6 ? "sat" : "");
  const isToday = diffDays === 0;

  return `
    <div class="date-hero" style="display:flex; flex-direction:column; gap:4px;">
      <div style="display:flex; align-items:center; justify-content:space-between; width:100%; gap:4px;">
        <button class="action-btn undo" style="font-size:1.1rem; padding:6px 10px; font-weight:900;" onclick="changeViewDate(-1)">◀</button>
        <div style="cursor:pointer; display:flex; flex-direction:column; align-items:center; padding:4px 8px; border-radius:12px; background:#fdf2f4; flex:1; min-width:0;" onclick="openDatePickerModal('navDate', null, '${targetDateStr}')">
          ${label ? `<div style="font-size:0.92rem; font-weight:900; color:var(--primary); line-height:1.2;">${label}</div>` : ''}
          <div style="display:flex; align-items:baseline; justify-content:center; gap:5px; white-space:nowrap; overflow:hidden;">
            <span style="font-size:1rem; font-weight:800; color:var(--text-sub);">${y}年</span>
            <span style="font-size:1.45rem; font-weight:900; letter-spacing:-0.02em;">${m}月${d}日</span>
            <span class="day-badge ${dayClass}" style="font-size:0.9rem; padding:2px 6px;">${dayNames[day]}</span>
          </div>
        </div>
        <button class="action-btn undo" style="font-size:1.1rem; padding:6px 10px; font-weight:900;" onclick="changeViewDate(1)">▶</button>
      </div>
      <div style="display:flex; align-items:center; justify-content:${holiday && !isToday ? 'space-between' : 'center'}; width:100%; margin-top:2px;">
        ${holiday ? `<div class="holiday-pill" style="font-size:0.85rem; padding:2px 10px;">🇯🇵 ${holiday}</div>` : `<div></div>`}
        ${!isToday ? `<button class="action-btn" style="padding:4px 10px; font-size:0.85rem;" onclick="jumpToTodayDate()">今日に戻る ↩</button>` : `<div></div>`}
      </div>
    </div>
  `;
}

window.changeViewDate = function(offsetDays) {
  const [y, m, d] = state.viewDateStr.split('-').map(Number);
  const curr = new Date(y, m - 1, d);
  curr.setDate(curr.getDate() + offsetDays);
  state.viewDateStr = `${curr.getFullYear()}-${String(curr.getMonth() + 1).padStart(2, '0')}-${String(curr.getDate()).padStart(2, '0')}`;
  render();
};

window.jumpToTodayDate = function() {
  state.viewDateStr = getTodayString();
  render();
};
function getAllTasksFlat() {
  const list = [];
  if (!state.majors || !Array.isArray(state.majors)) return list;
  state.majors.forEach(major => {
    (major.groups || []).forEach(group => {
      (group.tasks || []).forEach(task => {
        list.push({ majorName: major.name, groupName: group.name, ...task });
      });
    });
  });
  return list;
}

function recordDayHistory(dateStr) {
  if (!dateStr) return;
  const completedTasks = [];
  getAllTasksFlat().forEach(t => {
    if (state.todayLog && state.todayLog[t.id]) {
      completedTasks.push({ cat: `${t.majorName} > ${t.groupName}`, title: t.title, time: state.todayLog[t.id] });
    }
  });
  completedTasks.sort((a, b) => a.time.localeCompare(b.time));

  if (!state.history) state.history = {};
  state.history[dateStr] = {
    done: completedTasks.length,
    diary: state.todayDiary || "",
    tasks: completedTasks
  };
}

function saveState() {
  recordDayHistory(state.todayDateStr);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch(e) {}
}

function loadState() {
  let loaded = false;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.majors) && parsed.majors.length > 0) {
        state = parsed;
        loaded = true;
      }
    }
  } catch(e) {}

  const today = getTodayString();
  if (!loaded) {
    state.majors = JSON.parse(JSON.stringify(DEFAULT_HIERARCHY));
    state.occasional = JSON.parse(JSON.stringify(DEFAULT_OCCASIONAL));
    state.routines = JSON.parse(JSON.stringify(DEFAULT_ROUTINES));
    state.todayLog = {};
    state.todayDateStr = today;
    state.todayDiary = "";
    state.history = {};
    state.openHistoryDates = {};
  }

  if (!state.viewDateStr) state.viewDateStr = today;
  if (!state.todayLog) state.todayLog = {};
  if (!state.history) state.history = {};
  if (!state.openHistoryDates) state.openHistoryDates = {};

  if (state.todayDateStr !== today) {
    recordDayHistory(state.todayDateStr);
    state.todayDateStr = today;
    state.todayLog = {};
    state.todayDiary = "";
    state.viewDateStr = today;
    saveState();
  }
}

let praiseTimer = null;
window.triggerPraise = function(isMultiple = false) {
  if (navigator.vibrate) {
    navigator.vibrate(isMultiple ? [40, 50, 40] : 40);
  }

  const el = document.getElementById("celebration-overlay");
  if (el) el.classList.add("active");
  const colors = ['#ff758c', '#ffd166', '#48dbfb', '#1dd1a1', '#ff9ff3'];
  for (let i = 0; i < 16; i++) {
    const p = document.createElement("div");
    p.className = "confetti-particle";
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.left = (Math.random() * 80 + 10) + "%";
    p.style.top = (Math.random() * 20 + 15) + "%";
    document.body.appendChild(p);
    setTimeout(() => p?.parentNode?.removeChild(p), 1200);
  }
  if (praiseTimer) clearTimeout(praiseTimer);
  praiseTimer = setTimeout(() => el?.classList.remove("active"), 1300);
};

window.switchTab = function(tab) {
  state.currentTab = tab;
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-tab") === tab);
  });
  render();
  window.scrollTo({ top: 0, behavior: 'auto' });
};
function getCompletedTaskList(targetDateStr) {
  const list = [];
  const isToday = !targetDateStr || targetDateStr === getTodayString();
  
  if (isToday) {
    getAllTasksFlat().forEach(t => {
      if (state.todayLog && state.todayLog[t.id]) {
        list.push({ cat: `${t.groupName}`, title: t.title, time: state.todayLog[t.id] });
      }
    });
  } else {
    const hist = state.history && state.history[targetDateStr];
    if (hist && hist.tasks) return [...hist.tasks];
  }
  list.sort((a, b) => a.time.localeCompare(b.time));
  return list;
}

function updateFloatingBadge() {
  const countEl = document.getElementById("floating-done-count");
  if (countEl) countEl.textContent = getCompletedTaskList(state.viewDateStr).length;
}

window.openDoneModal = function() {
  const overlay = document.getElementById("done-modal-overlay");
  const listEl = document.getElementById("done-modal-list");
  const titleEl = document.getElementById("done-modal-title");
  if (!overlay || !listEl) return;

  const list = getCompletedTaskList(state.viewDateStr);
  if (titleEl) titleEl.textContent = `📋 ${state.viewDateStr} (${list.length}個)`;

  if (list.length === 0) {
    listEl.innerHTML = `<div style="text-align:center; color:var(--text-sub); font-size:1.05rem; padding:28px 0;">完了したタスクはありません✨</div>`;
  } else {
    let h = "";
    list.forEach(item => {
      h += `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px dashed #eee; font-size:1.08rem;">
          <div style="min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
            <span style="font-size:0.88rem; color:var(--text-sub); margin-right:8px;">${item.cat}</span>
            <span style="font-weight:700;">${item.title}</span>
          </div>
          <span style="font-size:0.88rem; font-weight:800; color:var(--primary); background:var(--primary-light); padding:3px 9px; border-radius:8px; margin-left:10px; flex-shrink:0;">${item.time}</span>
        </div>
      `;
    });
    listEl.innerHTML = h;
  }
  overlay.classList.add("active");
};

window.closeDoneModal = function(e) {
  const overlay = document.getElementById("done-modal-overlay");
  if (overlay) overlay.classList.remove("active");
};

let datePickerTarget = null;
window.openDatePickerModal = function(type, id, currentVal) {
  datePickerTarget = { type, id };
  const overlay = document.getElementById("datepicker-modal-overlay");
  const input = document.getElementById("datepicker-modal-input");
  const title = document.getElementById("datepicker-modal-title");
  const clearBtn = document.getElementById("datepicker-clear-btn");
  if (!overlay || !input) return;

  input.value = currentVal || getTodayString();
  if (type === 'navDate') {
    title.textContent = "📅 表示する日付を選択";
    clearBtn.style.display = "none";
  } else {
    title.textContent = type === 'routineDeadline' ? "⏰ 締め切り日を指定" : "📅 実施日を指定";
    clearBtn.textContent = type === 'routineDeadline' ? "期限を解除する" : "実施日を解除する";
    clearBtn.style.display = "block";
  }
  overlay.classList.add("active");
};

window.closeDatePickerModal = function() {
  const overlay = document.getElementById("datepicker-modal-overlay");
  if (overlay) overlay.classList.remove("active");
  datePickerTarget = null;
};

window.applyDatePickerSelection = function() {
  if (!datePickerTarget) return;
  const input = document.getElementById("datepicker-modal-input");
  const val = input ? input.value : "";
  if (!val) return;

  const { type, id } = datePickerTarget;
  if (type === 'navDate') state.viewDateStr = val;
  else if (type === 'occDone') {
    const item = state.occasional.find(o => o.id === id);
    if (item) item.lastDoneDate = val;
  } else if (type === 'routineDone') {
    const item = state.routines.find(r => r.id === id);
    if (item) item.lastDone = val;
  } else if (type === 'routineDeadline') {
    const item = state.routines.find(r => r.id === id);
    if (item) item.deadline = val;
  }
  saveState(); render(); closeDatePickerModal();
};

window.clearDatePickerSelection = function() {
  if (!datePickerTarget) return;
  const { type, id } = datePickerTarget;
  if (type === 'routineDeadline') {
    const item = state.routines.find(r => r.id === id);
    if (item) item.deadline = null;
  } else if (type === 'routineDone') {
    const item = state.routines.find(r => r.id === id);
    if (item) item.lastDone = null;
  } else if (type === 'occDone') {
    const item = state.occasional.find(o => o.id === id);
    if (item) item.lastDoneDate = null;
  }
  saveState(); render(); closeDatePickerModal();
};

let intervalEditTargetId = null;
window.openIntervalModal = function(id) {
  intervalEditTargetId = id;
  const item = state.routines.find(r => r.id === id);
  if (!item) return;
  const overlay = document.getElementById("interval-modal-overlay");
  const input = document.getElementById("interval-modal-input");
  const title = document.getElementById("interval-modal-title");
  if (!overlay || !input) return;

  title.textContent = `🔄「${item.title}」の周期設定`;
  input.value = item.intervalDays || 14;
  overlay.classList.add("active");
};

window.closeIntervalModal = function() {
  const overlay = document.getElementById("interval-modal-overlay");
  if (overlay) overlay.classList.remove("active");
  intervalEditTargetId = null;
};

window.setIntervalFromSlot = function(days) {
  if (!intervalEditTargetId) return;
  const item = state.routines.find(r => r.id === intervalEditTargetId);
  if (item) { item.intervalDays = parseInt(days, 10); saveState(); render(); }
  closeIntervalModal();
};

window.applyIntervalCustom = function() {
  if (!intervalEditTargetId) return;
  const input = document.getElementById("interval-modal-input");
  const val = input ? input.value.trim() : "";
  if (val && !isNaN(val) && Number(val) > 0) {
    const item = state.routines.find(r => r.id === intervalEditTargetId);
    if (item) { item.intervalDays = parseInt(val, 10); saveState(); render(); }
    closeIntervalModal();
  } else {
    alert("1以上の正しい日数を入力してください");
  }
};
window.toggleHistoryDate = function(dateStr) {
  if (!state.openHistoryDates) state.openHistoryDates = {};
  state.openHistoryDates[dateStr] = !state.openHistoryDates[dateStr];
  render();
};

window.toggleTask = function(id) {
  if (state.viewDateStr !== getTodayString()) {
    return alert("過去・未来のタスクは閲覧専用です。「今日」に戻ってチェックしてください。");
  }
  if (state.todayLog && state.todayLog[id]) {
    if (!confirm("チェックをはずしますか？")) return;
    delete state.todayLog[id];
  } else {
    if (!state.todayLog) state.todayLog = {};
    state.todayLog[id] = getCurrentTimeStr();
    window.triggerPraise(false);
  }
  saveState(); render(); window.silentSyncToSpreadsheet();
};

window.batchComplete = function(groupId) {
  if (state.viewDateStr !== getTodayString()) return alert("過去・未来のタスクは閲覧専用です。");
  let foundGroup = null;
  (state.majors || []).forEach(m => {
    const g = (m.groups || []).find(x => x.id === groupId);
    if (g) foundGroup = g;
  });
  if (!foundGroup) return;

  const now = getCurrentTimeStr();
  let added = false;
  if (!state.todayLog) state.todayLog = {};
  foundGroup.tasks.forEach(t => {
    if (!state.todayLog[t.id]) { state.todayLog[t.id] = now; added = true; }
  });
  if (added) window.triggerPraise(true);
  saveState(); render(); window.silentSyncToSpreadsheet();
};

window.onDiaryInput = val => {
  if (state.viewDateStr !== getTodayString()) {
    if (!state.history[state.viewDateStr]) state.history[state.viewDateStr] = { done: 0, diary: "", tasks: [] };
    state.history[state.viewDateStr].diary = val;
  } else {
    state.todayDiary = val;
  }
  saveState();
};

window.renameTask = function(taskId) {
  let targetTask = null;
  (state.majors || []).forEach(m => (m.groups || []).forEach(g => {
    const t = (g.tasks || []).find(x => x.id === taskId);
    if (t) targetTask = t;
  }));
  if (!targetTask) return;
  const val = prompt("タスク名を変更:", targetTask.title);
  if (val !== null && val.trim()) { targetTask.title = val.trim(); saveState(); render(); }
};

window.editTaskMemo = function(taskId) {
  let targetTask = null;
  (state.majors || []).forEach(m => (m.groups || []).forEach(g => {
    const t = (g.tasks || []).find(x => x.id === taskId);
    if (t) targetTask = t;
  }));
  if (!targetTask) return;
  const val = prompt(`「${targetTask.title}」のメモ:`, targetTask.memo || "");
  if (val !== null) { targetTask.memo = val.trim(); saveState(); render(); }
};

window.moveTaskOrder = function(groupId, taskId, direction) {
  let targetGroup = null;
  (state.majors || []).forEach(m => {
    const g = (m.groups || []).find(x => x.id === groupId);
    if (g) targetGroup = g;
  });
  if (!targetGroup) return;
  const idx = targetGroup.tasks.findIndex(t => t.id === taskId);
  if (idx === -1) return;
  const newIdx = idx + direction;
  if (newIdx < 0 || newIdx >= targetGroup.tasks.length) return;
  const tmp = targetGroup.tasks[idx];
  targetGroup.tasks[idx] = targetGroup.tasks[newIdx];
  targetGroup.tasks[newIdx] = tmp;
  saveState(); render();
};

window.deleteHierarchicalTask = function(groupId, taskId) {
  if (!confirm("このタスクを削除しますか？")) return;
  (state.majors || []).forEach(m => (m.groups || []).forEach(g => {
    if (g.id === groupId) {
      g.tasks = g.tasks.filter(t => t.id !== taskId);
      if (state.todayLog) delete state.todayLog[taskId];
    }
  }));
  saveState(); render();
};

window.addTaskToGroup = function(groupId) {
  const title = prompt("新しいタスク名:");
  if (!title || !title.trim()) return;
  const memo = prompt("メモ（省略可）:") || "";
  (state.majors || []).forEach(m => (m.groups || []).forEach(g => {
    if (g.id === groupId) g.tasks.push({ id: "t_" + Date.now(), title: title.trim(), memo: memo.trim() });
  }));
  saveState(); render();
};

window.renameGroup = function(groupId) {
  let targetGroup = null;
  (state.majors || []).forEach(m => {
    const g = (m.groups || []).find(x => x.id === groupId);
    if (g) targetGroup = g;
  });
  if (!targetGroup) return;
  const val = prompt("カテゴリ名を変更:", targetGroup.name);
  if (val !== null && val.trim()) { targetGroup.name = val.trim(); saveState(); render(); }
};

let longPressTimer = null, longPressFired = false;
window.startOccasionalPress = function(id) {
  longPressFired = false;
  longPressTimer = setTimeout(() => { longPressFired = true; executeToggleOccasional(id); }, 600);
};
window.cancelOccasionalPress = function() {
  if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
};

function executeToggleOccasional(id) {
  const item = state.occasional.find(o => o.id === id);
  if (!item) return;
  if (item.completed) {
    item.completed = false; item.completedAt = null;
    item.lastDoneDate = item.prevDoneDate !== undefined ? item.prevDoneDate : item.lastDoneDate;
    item.memo = item.prevMemo !== undefined ? item.prevMemo : item.memo;
    if (navigator.vibrate) navigator.vibrate(50);
  } else {
    item.prevDoneDate = item.lastDoneDate;
    item.prevMemo = item.memo || "";
    item.completed = true;
    const today = getTodayString();
    item.completedAt = `${today} ${getCurrentTimeStr()}`;
    item.lastDoneDate = today;
    if (item.allowMemo) {
      const m = prompt(`「${item.title}」のメモ:`, item.memo || "");
      if (m !== null) item.memo = m.trim();
    }
    window.triggerPraise(false);
  }
  saveState(); render();
}

window.editOccasionalMemo = function(id) {
  const item = state.occasional.find(o => o.id === id);
  if (!item) return;
  const m = prompt(`「${item.title}」のメモ:`, item.memo || "");
  if (m !== null) { item.memo = m.trim(); saveState(); render(); }
};

window.doneRoutine = function(id) {
  const item = state.routines.find(r => r.id === id);
  if (!item) return;
  if (!confirm(`「${item.title}」を実施完了にしますか？`)) return;
  item.prevDone = item.lastDone; item.prevMemo = item.memo || "";
  item.lastDone = getTodayString();
  if (item.allowMemo) {
    const m = prompt(`「${item.title}」のメモ:`, item.memo || "");
    if (m !== null) item.memo = m.trim();
  }
  window.triggerPraise(false); saveState(); render();
};

window.editRoutineMemo = function(id) {
  const item = state.routines.find(r => r.id === id);
  if (!item) return;
  const m = prompt(`「${item.title}」のメモ:`, item.memo || "");
  if (m !== null) { item.memo = m.trim(); saveState(); render(); }
};

window.addCleaningTask = function() {
  const input = document.getElementById("clean-add-input");
  const val = input ? input.value.trim() : "";
  if (!val) return alert("タスク名を入力してください");
  (state.majors || []).forEach(m => {
    const cleanGroup = (m.groups || []).find(g => g.id === "cleaning");
    if (cleanGroup) {
      cleanGroup.tasks.push({ id: "t_clean_" + Date.now(), title: val, memo: "" });
      saveState(); if (input) input.value = ""; render();
    }
  });
};

window.deleteCleaningTask = function(tId) {
  if (!confirm("この項目を削除しますか？")) return;
  (state.majors || []).forEach(m => {
    const cleanGroup = (m.groups || []).find(g => g.id === "cleaning");
    if (cleanGroup) {
      cleanGroup.tasks = cleanGroup.tasks.filter(t => t.id !== tId);
      if (state.todayLog) delete state.todayLog[tId];
      saveState(); render();
    }
  });
};

window.addNewDailyTask = function() {
  const t = document.getElementById("add-title")?.value.trim();
  const memo = document.getElementById("add-memo")?.value.trim() || "";
  const groupId = document.getElementById("add-group")?.value;
  if (!t) return alert("タスク名を入力してください");
  (state.majors || []).forEach(m => (m.groups || []).forEach(g => {
    if (g.id === groupId) g.tasks.push({ id: "t_" + Date.now(), title: t, memo: memo });
  }));
  saveState(); alert("追加しました！"); window.switchTab("today");
};
window.silentSyncToSpreadsheet = async function() {
  const url = DEFAULT_GAS_URL;
  if (!url) return;
  const rows = [];
  const today = getTodayString();
  getAllTasksFlat().forEach(t => {
    if (state.todayLog && state.todayLog[t.id]) {
      rows.push({ date: today, type: "今日のタスク", title: `[${t.majorName} > ${t.groupName}] ${t.title}`, detail: state.todayLog[t.id] });
    }
  });
  let done = 0;
  getAllTasksFlat().forEach(t => { if (state.todayLog && state.todayLog[t.id]) done++; });
  rows.push({ date: today, type: "日次サマリー", title: "本日の達成状況", detail: `${done}個完了` });
  if (state.todayDiary?.trim()) {
    rows.push({ date: today, type: "今日の日記・メモ", title: "ひとこと記録", detail: state.todayDiary.trim() });
  }
  try {
    await fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ rows }) });
  } catch(e) {}
};

// 🌟 どんな日付形式でも「YYYY-MM-DD」に変換して綺麗に復元
window.loadFromSpreadsheet = async function() {
  const url = DEFAULT_GAS_URL;
  if (!url) return alert("URLが設定されていません。");
  if (!confirm("スプレッドシートからデータを読み込みますか？")) return;
  try {
    const res = await fetch(url);
    const json = await res.json();
    if (json.status !== "success" || !json.rows) return alert("読み込みに失敗しました。");
    
    const todayStr = getTodayString();
    let loadedCount = 0;
    const taskMap = {};
    getAllTasksFlat().forEach(t => {
      taskMap[`[${t.majorName} > ${t.groupName}] ${t.title}`] = t.id;
      taskMap[t.title] = t.id;
    });
    
    if (!state.todayLog) state.todayLog = {};
    state.history = {};

    const normalizeDateStr = (rawDate) => {
      if (!rawDate) return "";
      const d = new Date(rawDate);
      if (isNaN(d.getTime())) {
        return String(rawDate).split("T")[0];
      }
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    };

    json.rows.forEach(r => {
      const d = normalizeDateStr(r.date);
      if (!d) return;

      if (r.type === "今日のタスク") {
        const taskId = taskMap[r.title];
        if (d === todayStr && taskId) { state.todayLog[taskId] = r.detail; loadedCount++; }
        if (!state.history[d]) state.history[d] = { done: 0, diary: "", tasks: [] };
        if (!state.history[d].tasks.some(x => x.title === r.title)) {
          state.history[d].tasks.push({ cat: "", title: r.title, time: r.detail });
        }
      } else if (r.type === "今日の日記・メモ") {
        if (d === todayStr) state.todayDiary = r.detail;
        if (!state.history[d]) state.history[d] = { done: 0, diary: "", tasks: [] };
        state.history[d].diary = r.detail;
      }
    });

    Object.keys(state.history).forEach(dk => { state.history[dk].done = state.history[dk].tasks.length; });
    saveState(); render(); alert(`スプレッドシートから読み込みました！（本日分: ${loadedCount}件復元）`);
  } catch(e) {
    alert("通信エラーが発生しました。");
  }
};

function getStatsSummary(days) {
  let done = 0;
  const now = new Date(getTodayString());
  let todayDone = 0;
  getAllTasksFlat().forEach(t => { if (state.todayLog && state.todayLog[t.id]) todayDone++; });
  const combinedHistory = { ...(state.history || {}), [getTodayString()]: { done: todayDone } };
  for (let i = 0; i < days; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const rec = combinedHistory[dateStr];
    if (rec && rec.done) done += rec.done;
  }
  return { done };
}
function render() {
  const c = document.getElementById("main-container");
  if (!c) return;
  const tab = state.currentTab;

  updateFloatingBadge();

  if (tab === "today") {
    const targetDateStr = state.viewDateStr || getTodayString();
    const isToday = targetDateStr === getTodayString();
    const histRecord = (!isToday && state.history) ? state.history[targetDateStr] : null;
    const pastTasksMap = {};
    if (histRecord && histRecord.tasks) {
      histRecord.tasks.forEach(t => { pastTasksMap[t.title] = t.time; });
    }

    let done = 0;
    if (isToday) getAllTasksFlat().forEach(t => { if (state.todayLog && state.todayLog[t.id]) done++; });
    else done = histRecord ? (histRecord.done || 0) : 0;

    let h = `
      <div class="status-card">
        ${getFormattedDateHero(targetDateStr)}
        <div class="status-counter-row">
          <div class="progress-count-simple">
            <span>${done}</span>
            <span class="progress-count-sub">個 達成 ${isToday ? '中 ✨' : 'でした'}</span>
          </div>
        </div>
      </div>
    `;

    (state.majors || []).forEach(major => {
      const groups = (major.groups || []).filter(g => g.id !== "cleaning");
      if (!groups.length) return;
      groups.forEach(group => {
        const isSingle = group.single || group.tasks.length <= 1;
        h += `
          <div class="category-group">
            <div class="category-header">
              <span>${group.name}</span>
              ${(isToday && !isSingle) ? `<button class="batch-btn" onclick="batchComplete('${group.id}')">まとめて完了</button>` : ''}
            </div>
            <div class="task-grid-container">
        `;
        group.tasks.forEach(t => {
          const isDone = isToday ? !!(state.todayLog && state.todayLog[t.id]) : !!pastTasksMap[t.title];
          const doneTime = isToday ? ((state.todayLog && state.todayLog[t.id]) || '') : (pastTasksMap[t.title] || '');
          h += `
            <div class="task-item ${isDone ? 'checked' : ''}" onclick="toggleTask('${t.id}')">
              <div class="task-checkbox">${isDone ? '✔' : ''}</div>
              <div class="task-title">
                ${t.title}
                ${t.memo ? `<div class="task-memo-badge">💬 ${t.memo}</div>` : ''}
              </div>
              <div class="task-time">${doneTime}</div>
            </div>
          `;
        });
        h += `</div></div>`;
      });
    });

    const diaryContent = isToday ? (state.todayDiary || "") : (histRecord ? (histRecord.diary || "") : "");
    h += `<div class="status-card" style="margin-top:14px;">
      <div style="font-size:1.15rem; font-weight:800; margin-bottom:8px;">📝 ${isToday ? '今日' : targetDateStr}のメモ・日記</div>
      <textarea class="form-control" rows="3" placeholder="体調、気づき、ひと言などを自由に記録..." oninput="onDiaryInput(this.value)" style="resize:none; line-height:1.4;" ${!isToday ? 'readonly' : ''}>${diaryContent}</textarea>
    </div>`;
    c.innerHTML = h;

  } else if (tab === "freetime") {
    let cleanGroup = null;
    (state.majors || []).forEach(m => {
      const g = (m.groups || []).find(x => x.id === "cleaning");
      if (g) cleanGroup = g;
    });

    let h = `<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">🧹 掃除・空き時間タスク</h2>`;
    h += `
      <div class="status-card" style="margin-bottom:14px; padding:14px;">
        <div style="font-size:1rem; font-weight:800; margin-bottom:6px;">➕ 新しい項目をすぐ追加</div>
        <div style="display:flex; gap:8px;">
          <input type="text" id="clean-add-input" class="form-control" placeholder="例: クローゼットの整理..." style="padding:10px; font-size:1.05rem;">
          <button class="submit-btn" style="width:auto; padding:10px 18px; white-space:nowrap;" onclick="addCleaningTask()">追加</button>
        </div>
      </div>
    `;

    if (cleanGroup) {
      h += `
        <div class="category-group">
          <div class="category-header">
            <span>${cleanGroup.name}</span>
            <button class="batch-btn" onclick="batchComplete('${cleanGroup.id}')">まとめて完了</button>
          </div>
          <div class="task-grid-container">
      `;
      cleanGroup.tasks.forEach(t => {
        const isDone = !!(state.todayLog && state.todayLog[t.id]);
        h += `
          <div class="task-item ${isDone ? 'checked' : ''}" onclick="toggleTask('${t.id}')">
            <div class="task-checkbox">${isDone ? '✔' : ''}</div>
            <div class="task-title">
              ${t.title}
              <div style="margin-top:4px;">
                <button class="action-btn undo" style="padding:2px 8px; font-size:0.75rem; color:#ff4757;" onclick="event.stopPropagation(); deleteCleaningTask('${t.id}')">削除</button>
              </div>
            </div>
            <div class="task-time">${(state.todayLog && state.todayLog[t.id]) || ''}</div>
          </div>
        `;
      });
      h += `</div></div>`;
    }
    c.innerHTML = h;

  } else if (tab === "occasional") {
    let h = '<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">💡 たまにやるタスク</h2>';
    const now = new Date(getTodayString());
    (state.occasional || []).forEach(item => {
      let info = "未実施";
      if (item.lastDoneDate) {
        const diff = Math.floor((now - new Date(item.lastDoneDate)) / 86400000);
        info = `${item.lastDoneDate} (${diff}日前)`;
      }

      const pressHandlers = `
        onpointerdown="startOccasionalPress('${item.id}')"
        onpointerup="cancelOccasionalPress()"
        onpointerleave="cancelOccasionalPress()"
        onpointercancel="cancelOccasionalPress()"
        onclick="if(!longPressFired){ alert('長押し（0.6秒）で完了・解除できます✨'); }"
      `;

      h += `
        <div class="item-card">
          <div class="item-card-row">
            <div class="item-info">
              <div style="font-weight:800; font-size:1.15rem; ${item.completed ? 'text-decoration:line-through; opacity:0.6;' : ''}">${item.title}</div>
              <div style="font-size:0.92rem; color:var(--text-sub); margin-top:4px;">前回：${info}</div>
              ${item.completedAt ? `<div style="font-size:0.88rem; color:var(--primary); margin-top:2px;">今回完了: ${item.completedAt}</div>` : ''}
            </div>
            <div class="item-actions">
              <button class="action-btn undo" style="padding:6px 10px; font-size:0.88rem;" onclick="openDatePickerModal('occDone', '${item.id}', '${item.lastDoneDate || ''}')">📅 日付</button>
              ${item.allowMemo ? `<button class="action-btn undo" style="padding:6px 10px; font-size:0.88rem;" onclick="editOccasionalMemo('${item.id}')">📝</button>` : ''}
              <button class="${item.completed ? 'action-btn undo press-target' : 'action-btn press-target'}" ${pressHandlers}>
                ${item.completed ? '戻す(長押し)' : '完了(長押し)'}
              </button>
            </div>
          </div>
          ${item.memo ? `<div style="font-size:0.95rem; background:#f8f9fa; padding:8px 10px; border-radius:10px; color:var(--text); word-break:break-all;">📝 ${item.memo}</div>` : ''}
        </div>
      `;
    });
    c.innerHTML = h;

  } else if (tab === "routine") {
    let h = '<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">🔄 定期メンテナンス</h2>';
    const now = new Date(getTodayString());
    (state.routines || []).forEach(item => {
      let daysAgoText = "未実施";
      let intervalBadge = "";

      if (item.lastDone) {
        const lastDoneDate = new Date(item.lastDone);
        const diff = Math.floor((now - lastDoneDate) / 86400000);
        daysAgoText = `${item.lastDone} (${diff}日前)`;
        const left = item.intervalDays - diff;
        const nextDateObj = new Date(lastDoneDate);
        nextDateObj.setDate(nextDateObj.getDate() + item.intervalDays);
        const nextDateDisplay = `${nextDateObj.getMonth() + 1}月${nextDateObj.getDate()}日`;

        if (left > 0) {
          intervalBadge = `<span style="color:#0984e3; font-weight:800; background:#e8f4fd; padding:4px 9px; border-radius:8px; display:inline-block; line-height:1.4;">🟢 次回予定: ${nextDateDisplay} (あと${left}日 / ${item.intervalDays}日ごと)</span>`;
        } else if (left === 0) {
          intervalBadge = `<span style="color:#d63031; font-weight:800; background:#ffebeb; padding:4px 9px; border-radius:8px; display:inline-block; line-height:1.4;">⚠️ 次回予定: 今日が予定日！ (${nextDateDisplay} / ${item.intervalDays}日ごと)</span>`;
        } else {
          intervalBadge = `<span style="color:#d63031; font-weight:800; background:#ffebeb; padding:4px 9px; border-radius:8px; display:inline-block; line-height:1.4;">🚨 予定日超過: ${nextDateDisplay} (${Math.abs(left)}日遅れ・今すぐ！)</span>`;
        }
      } else {
        intervalBadge = `<span style="color:var(--text-sub); font-weight:700; background:#f1f2f6; padding:4px 9px; border-radius:8px; display:inline-block;">目安: ${item.intervalDays}日ごと (未実施)</span>`;
      }

      let deadlineInfo = "";
      if (item.deadline) {
        const dlDiff = Math.ceil((new Date(item.deadline) - now) / 86400000);
        if (dlDiff < 0) {
          deadlineInfo = `<span style="color:#e02424; font-weight:800; background:#ffebeb; padding:4px 9px; border-radius:8px;">🚨 期限超過 (${Math.abs(dlDiff)}日遅れ / ${item.deadline})</span>`;
        } else if (dlDiff === 0) {
          deadlineInfo = `<span style="color:#e02424; font-weight:800; background:#fff3cd; padding:4px 9px; border-radius:8px;">⚠️ 今日が締め切り！ (${item.deadline})</span>`;
        } else {
          deadlineInfo = `<span style="color:#d97706; font-weight:800; background:#fffbeb; padding:4px 9px; border-radius:8px;">⏰ 期限日: ${item.deadline} (あと${dlDiff}日)</span>`;
        }
      }

      h += `
        <div class="item-card">
          <div class="item-card-row">
            <div class="item-info">
              <div style="font-weight:800; font-size:1.18rem;">${item.title}</div>
              <div style="font-size:0.9rem; color:var(--text-sub); margin: 4px 0;">前回: ${daysAgoText}</div>
              <div style="font-size:0.9rem; margin-top:4px; display:flex; flex-direction:column; gap:4px; align-items:flex-start;">
                ${intervalBadge}
                ${deadlineInfo ? `<div>${deadlineInfo}</div>` : ''}
              </div>
            </div>
            <div class="item-actions" style="flex-direction:column; gap:6px;">
              <button class="action-btn" style="width:100%; padding:8px;" onclick="doneRoutine('${item.id}')">やった！</button>
              <div style="display:flex; gap:4px;">
                <button class="action-btn undo" style="padding:4px 7px; font-size:0.8rem;" onclick="openDatePickerModal('routineDone', '${item.id}', '${item.lastDone || ''}')">📅 日付</button>
                <button class="action-btn undo" style="padding:4px 7px; font-size:0.8rem;" onclick="openDatePickerModal('routineDeadline', '${item.id}', '${item.deadline || ''}')">⏰ 期限</button>
                ${item.allowMemo ? `<button class="action-btn undo" style="padding:4px 7px; font-size:0.8rem;" onclick="editRoutineMemo('${item.id}')">メモ</button>` : ''}
                <button class="action-btn undo" style="padding:4px 7px; font-size:0.8rem;" onclick="openIntervalModal('${item.id}')">周期</button>
              </div>
            </div>
          </div>
          ${item.memo ? `<div style="font-size:0.95rem; background:#f8f9fa; padding:8px 10px; border-radius:10px; color:var(--text); word-break:break-all;">📝 ${item.memo}</div>` : ''}
        </div>
      `;
    });
    c.innerHTML = h;
  } else if (tab === "all") {
    let h = '<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">📋 タスクの管理・並べ替え</h2>';
    h += `<div style="font-size:0.95rem; color:var(--text-sub); margin-bottom:14px;">▲/▼で順番入れ替え、✏️で名前変更、📝でメモ編集ができます。</div>`;

    (state.majors || []).forEach(major => {
      (major.groups || []).forEach(group => {
        h += `
          <div class="category-group">
            <div class="category-header">
              <span>${group.name}</span>
              <div style="display:flex; gap:6px;">
                <button class="action-btn undo" style="padding:4px 8px; font-size:0.85rem;" onclick="renameGroup('${group.id}')">✏️</button>
                <button class="batch-btn" onclick="addTaskToGroup('${group.id}')">＋追加</button>
              </div>
            </div>
            <div style="display:flex; flex-direction:column;">
        `;

        group.tasks.forEach((t, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === group.tasks.length - 1;
          h += `
            <div class="edit-task-row">
              <div style="flex:1; min-width:0;">
                <div style="font-weight:800; font-size:1.08rem; word-break:break-all;">${t.title}</div>
                ${t.memo ? `<div style="font-size:0.85rem; color:var(--text-sub); margin-top:2px;">💬 ${t.memo}</div>` : ''}
              </div>
              <div class="edit-task-actions">
                <button class="order-btn" ${isFirst ? 'disabled style="opacity:0.3;"' : ''} onclick="moveTaskOrder('${group.id}', '${t.id}', -1)">▲</button>
                <button class="order-btn" ${isLast ? 'disabled style="opacity:0.3;"' : ''} onclick="moveTaskOrder('${group.id}', '${t.id}', 1)">▼</button>
                <button class="action-btn undo" style="padding:6px 8px; font-size:0.85rem;" onclick="renameTask('${t.id}')">✏️</button>
                <button class="action-btn undo" style="padding:6px 8px; font-size:0.85rem;" onclick="editTaskMemo('${t.id}')">📝</button>
                <button class="action-btn undo" style="padding:6px 8px; font-size:0.85rem; color:#ff4757;" onclick="deleteHierarchicalTask('${group.id}', '${t.id}')">🗑️</button>
              </div>
            </div>
          `;
        });
        h += `</div></div>`;
      });
    });
    c.innerHTML = h;

  } else if (tab === "add") {
    let groupOptions = "";
    (state.majors || []).forEach(m => (m.groups || []).forEach(g => {
      groupOptions += `<option value="${g.id}">${g.name}</option>`;
    }));

    c.innerHTML = `
      <h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">➕ タスク追加</h2>
      <div class="status-card">
        <div class="form-group">
          <label class="form-label">タスク名</label>
          <input type="text" id="add-title" class="form-control" placeholder="例: 髪のトリートメント">
        </div>
        <div class="form-group">
          <label class="form-label">メモ（省略可）</label>
          <input type="text" id="add-memo" class="form-control" placeholder="例: 週に2回やる、など">
        </div>
        <div class="form-group">
          <label class="form-label">追加先カテゴリ</label>
          <select id="add-group" class="form-control">${groupOptions}</select>
        </div>
        <button class="submit-btn" onclick="addNewDailyTask()">追加する</button>
      </div>
    `;

  } else if (tab === "history") {
    const wStats = getStatsSummary(7);
    const mStats = getStatsSummary(30);

    let h = `
      <h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">📊 達成サマリー & 履歴</h2>
      <div class="status-card" style="margin-bottom:16px; border-left: 5px solid var(--primary);">
        <div style="font-size:1.15rem; font-weight:900; margin-bottom:12px;">📈 達成合計</div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px dashed #eee;">
          <span style="font-size:1.05rem; font-weight:800;">🗓 直近1週間（7日間）</span>
          <span style="font-size:1.35rem; font-weight:900; color:var(--primary);">${wStats.done} <span style="font-size:0.92rem; color:var(--text-sub); font-weight:700;">個達成</span></span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0;">
          <span style="font-size:1.05rem; font-weight:800;">📅 直近1ヶ月（30日間）</span>
          <span style="font-size:1.35rem; font-weight:900; color:var(--primary);">${mStats.done} <span style="font-size:0.92rem; color:var(--text-sub); font-weight:700;">個達成</span></span>
        </div>
      </div>
      <div style="font-size:1.05rem; font-weight:800; color:var(--text-sub); margin-bottom:10px;">
        日別の記録（タップで詳細表示）
      </div>
    `;

    const todayStr = getTodayString();
    const todayTasks = getCompletedTaskList(todayStr);
    const allHistory = { ...(state.history || {}) };
    allHistory[todayStr] = {
      done: todayTasks.length,
      diary: state.todayDiary || "",
      tasks: todayTasks
    };

    const keys = Object.keys(allHistory).sort().reverse();
    if (!keys.length) {
      h += '<div style="text-align:center; color:var(--text-sub); font-size:1.05rem; padding:24px;">履歴はまだありません</div>';
    } else {
      keys.forEach(k => {
        const rec = allHistory[k];
        const isOpen = !!(state.openHistoryDates && state.openHistoryDates[k]);
        const taskList = rec.tasks || [];
        const isToday = k === todayStr;

        h += `
          <div class="item-card history-date-card" onclick="toggleHistoryDate('${k}')">
            <div class="history-header-row">
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-weight:900; font-size:1.15rem;">${k}</span>
                ${isToday ? `<span style="font-size:0.85rem; font-weight:800; color:var(--primary); background:var(--primary-light); padding:2px 8px; border-radius:6px;">今日</span>` : ''}
              </div>
              <div style="display:flex; align-items:center;">
                <span style="font-size:1.15rem; font-weight:900; color:var(--primary);">${rec.done || 0} 個完了</span>
                <span class="history-arrow ${isOpen ? 'open' : ''}">▶</span>
              </div>
            </div>
            ${rec.diary ? `<div style="font-size:0.95rem; color:var(--text-sub); background:#f8f9fa; padding:8px 10px; border-radius:8px; width:100%;">📝 ${rec.diary}</div>` : ''}
            <div class="history-detail-box ${isOpen ? 'open' : ''}" onclick="event.stopPropagation()">
              <div style="font-size:0.95rem; font-weight:800; color:var(--text-sub); margin-bottom:8px;">📋 できたこと (${taskList.length}件)</div>
        `;

        if (!taskList.length) {
          h += `<div style="font-size:0.95rem; color:var(--text-sub); padding:8px 0;">完了したタスクの記録はありません</div>`;
        } else {
          taskList.forEach(t => {
            h += `
              <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px dashed #f1f2f6; font-size:1.02rem;">
                <div style="min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                  <span style="font-size:0.85rem; color:var(--text-sub); margin-right:6px;">${t.cat}</span>
                  <span style="font-weight:700;">${t.title}</span>
                </div>
                <span style="font-size:0.85rem; font-weight:800; color:var(--primary); background:var(--primary-light); padding:2px 8px; border-radius:6px; margin-left:10px; flex-shrink:0;">${t.time}</span>
              </div>
            `;
          });
        }
        h += `</div></div>`;
      });
    }
    c.innerHTML = h;

  } else if (tab === "settings") {
    c.innerHTML = `
      <h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">⚙️ 設定</h2>
      <div class="status-card">
        <h3 style="font-size:1.15rem; margin-bottom:10px;">📊 Googleスプレッドシート連携</h3>
        <p style="font-size:0.95rem; color:var(--text-sub); margin-bottom:16px; line-height:1.5;">
          タスク完了時や日付変更時に、設定されたスプレッドシートへ自動で上書き同期されます。
        </p>
        <button class="submit-btn" style="background:#1e90ff; padding:14px;" onclick="loadFromSpreadsheet()">スプレッドシートからデータを読み込む 📥</button>
      </div>
    `;
  }
}

function setupNavEvents() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      if (tab) window.switchTab(tab);
    });
  });
}

document.addEventListener("gesturestart", e => e.preventDefault(), { passive: false });
document.addEventListener("gesturechange", e => e.preventDefault(), { passive: false });
document.addEventListener("gestureend", e => e.preventDefault(), { passive: false });

let lastTouchEnd = 0;
document.addEventListener("touchend", e => {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) e.preventDefault();
  lastTouchEnd = now;
}, { passive: false });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

loadState();
render();
setupNavEvents();
window.silentSyncToSpreadsheet();