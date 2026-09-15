const DEFAULT_GAS_URL = "https://script.google.com/macros/s/AKfycbzZjKeZLlq6VBQpUiFLAcHf_92mU2e5OkqSRtYk26uvKLVZmagRKYggdJa5DTBrr8iZ/exec";
const STORAGE_KEY = "LIFE_OS_V57_CLEAN";

const DEFAULT_HIERARCHY = [
  {
    id: "major_daily",
    name: "毎日の習慣",
    groups: [
      {
        id: "target", name: "🎯 今日の目標", single: true,
        tasks: [{ id: "t_target_1", title: "8,000歩達成", memo: "" }]
      },
      {
        id: "morning", name: "🌅 朝",
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
        id: "gym", name: "🏋️ ジム",
        tasks: [
          { id: "t_g_1", title: "ジムへ行く準備", memo: "タオル・イヤホン・パワーグリップ" },
          { id: "t_g_2", title: "ジムへ行って運動する", memo: "" },
          { id: "t_g_3", title: "体組成計で計測・写真を撮る", memo: "" },
          { id: "t_g_4", title: "結果をスプレッドシートに入れる", memo: "" }
        ]
      },
      {
        id: "after_gym", name: "🏠 ジム後",
        tasks: [
          { id: "t_ag_1", title: "BCAA", memo: "" },
          { id: "t_ag_2", title: "お風呂", memo: "" },
          { id: "t_ag_3", title: "プロテイン", memo: "" },
          { id: "t_ag_4", title: "カレンダーにシールはる", memo: "" }
        ]
      },
      {
        id: "lunch", name: "🍚 昼",
        tasks: [
          { id: "t_l_1", title: "デトックススープ", memo: "" },
          { id: "t_l_2", title: "納豆＋卵入り沼", memo: "" },
          { id: "t_l_3", title: "昼のサプリ", memo: "" }
        ]
      },
      {
        id: "cleaning", name: "🧹 掃除・空き時間",
        tasks: [
          { id: "t_c_1", title: "掃除", memo: "" },
          { id: "t_c_2", title: "捨て活・不用品整理", memo: "" },
          { id: "t_c_3", title: "あたらしい音楽を聞いた", memo: "" },
          { id: "t_c_4", title: "映像をみた", memo: "" },
          { id: "t_c_5", title: "しらべものをした", memo: "" }
        ]
      },
      {
        id: "night", name: "🌙 夜",
        tasks: [
          { id: "t_n_1", title: "夜ご飯", memo: "" },
          { id: "t_n_2", title: "サプリ", memo: "" },
          { id: "t_n_3", title: "洗濯〜乾燥を回す", memo: "" }
        ]
      },
      {
        id: "bath", name: "🛁 夜のお風呂",
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
        id: "after_bath", name: "✨ お風呂上がり",
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
        id: "laundry", name: "🧺 洗濯終了後",
        tasks: [
          { id: "t_ld_1", title: "洗濯物を取り出す", memo: "" },
          { id: "t_ld_2", title: "畳む", memo: "" },
          { id: "t_ld_3", title: "フィルターのホコリを取る", memo: "" }
        ]
      },
      {
        id: "before_sleep", name: "🛌 寝る前",
        tasks: [
          { id: "t_bs_1", title: "薬をのむ", memo: "" },
          { id: "t_bs_2", title: "爪にオイル塗る", memo: "" }
        ]
      }
    ]
  }
];

const DEFAULT_OCCASIONAL = [
  { id: "occ_1", title: "美容室予約", completed: false, lastDoneDate: null, memo: "" },
  { id: "occ_2", title: "まつげパーマ予約", completed: false, lastDoneDate: null, memo: "" },
  { id: "occ_3", title: "歯医者予約", completed: false, lastDoneDate: null, memo: "" },
  { id: "occ_nail", title: "セルフネイル", completed: false, lastDoneDate: null, memo: "", allowMemo: true },
  { id: "occ_4", title: "タブレット充電", completed: false, lastDoneDate: null, memo: "" },
  { id: "occ_5", title: "イヤホン充電", completed: false, lastDoneDate: null, memo: "" },
  { id: "occ_6", title: "スピーカー充電", completed: false, lastDoneDate: null, memo: "" },
  { id: "occ_7", title: "美顔器充電", completed: false, lastDoneDate: null, memo: "" },
  { id: "occ_8", title: "大きめの掃除", completed: false, lastDoneDate: null, memo: "", allowMemo: true },
  { id: "occ_9", title: "捨て活", completed: false, lastDoneDate: null, memo: "", allowMemo: true }
];

const DEFAULT_ROUTINES = [
  { id: "rt_nail", title: "セルフネイル付け替え", intervalDays: 21, lastDone: null, memo: "", allowMemo: true },
  { id: "rt_hair", title: "美容室", intervalDays: 30, lastDone: null, memo: "", allowMemo: true },
  { id: "rt_dental", title: "歯医者でクリーニング", intervalDays: 60, lastDone: null, memo: "", allowMemo: true },
  { id: "rt_lash", title: "まつ毛パーマ", intervalDays: 30, lastDone: null, memo: "", allowMemo: true },
  { id: "rt_earphone", title: "イヤホン充電", intervalDays: 3, lastDone: null },
  { id: "rt_speaker", title: "スピーカー充電", intervalDays: 7, lastDone: null },
  { id: "rt_filter", title: "換気扇フィルター掃除", intervalDays: 30, lastDone: null, memo: "", allowMemo: true },
  { id: "rt_blood", title: "千歳烏山で血液検査", intervalDays: 90, lastDone: null, memo: "", allowMemo: true },
  { id: "rt_thyroid", title: "伊東病院で甲状腺検査", intervalDays: 180, lastDone: null, memo: "", allowMemo: true },
  { id: "rt_checkup", title: "港区健康診断", intervalDays: 365, lastDone: null, memo: "", allowMemo: true }
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

function normalizeDateStr(raw) {
  if (!raw) return "";
  const s = String(raw).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const d = new Date(s);
  if (!isNaN(d.getTime())) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  return s.split("T")[0];
}

function normalizeTimeStr(raw) {
  if (!raw) return "";
  const s = String(raw).trim();
  if (/^\d{2}:\d{2}$/.test(s)) return s;
  const d = new Date(s);
  if (!isNaN(d.getTime())) {
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }
  return s.slice(0, 5);
}

function getAllTasksFlat() {
  const list = [];
  if (!state.majors) return list;
  state.majors.forEach(m => (m.groups || []).forEach(g => (g.tasks || []).forEach(t => {
    list.push({ majorName: m.name, groupName: g.name, ...t });
  })));
  return list;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch(e) {}
}

function loadState() {
  const today = getTodayString();
  let loaded = false;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const p = JSON.parse(saved);
      if (p && Array.isArray(p.majors) && p.majors.length > 0) {
        state = p;
        loaded = true;
      }
    }
  } catch(e) {}

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

  // 🌟 壊れた古い日付キー（Sat Dec 30 1899...）の完全除去クリーニング
  if (state.history) {
    const cleanHistory = {};
    Object.keys(state.history).forEach(k => {
      const validKey = normalizeDateStr(k);
      if (validKey && /^\d{4}-\d{2}-\d{2}$/.test(validKey)) {
        cleanHistory[validKey] = state.history[k];
      }
    });
    state.history = cleanHistory;
  }

  if (!state.viewDateStr) state.viewDateStr = today;
  if (!state.todayLog) state.todayLog = {};
  if (!state.history) state.history = {};
  if (!state.openHistoryDates) state.openHistoryDates = {};

  if (state.todayDateStr !== today) {
    state.todayDateStr = today;
    state.todayLog = {};
    state.todayDiary = "";
    state.viewDateStr = today;
    saveState();
  }
}

function getFormattedDateHero(targetDateStr) {
  const [y, m, d] = targetDateStr.split('-').map(Number);
  const targetDate = new Date(y, m - 1, d);
  const diffDays = Math.round((targetDate - new Date(getTodayString())) / 86400000);
  const label = diffDays === 0 ? "今日" : (diffDays === -1 ? "きのう" : (diffDays === 1 ? "あした" : ""));
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
  const day = targetDate.getDay();

  return `
    <div class="date-hero" style="display:flex; flex-direction:column; gap:4px;">
      <div style="display:flex; align-items:center; justify-content:space-between; width:100%; gap:4px;">
        <button class="action-btn undo" style="font-size:1.1rem; padding:6px 10px;" onclick="changeViewDate(-1)">◀</button>
        <div style="cursor:pointer; display:flex; flex-direction:column; align-items:center; padding:4px 8px; border-radius:12px; background:#fdf2f4; flex:1;" onclick="openDatePickerModal('navDate', null, '${targetDateStr}')">
          ${label ? `<div style="font-size:0.92rem; font-weight:900; color:var(--primary);">${label}</div>` : ''}
          <div style="display:flex; align-items:baseline; gap:5px;">
            <span style="font-size:1rem; font-weight:800; color:var(--text-sub);">${y}年</span>
            <span style="font-size:1.45rem; font-weight:900;">${m}月${d}日</span>
            <span class="day-badge ${day === 0 ? 'sun' : (day === 6 ? 'sat' : '')}">${dayNames[day]}</span>
          </div>
        </div>
        <button class="action-btn undo" style="font-size:1.1rem; padding:6px 10px;" onclick="changeViewDate(1)">▶</button>
      </div>
      ${diffDays !== 0 ? `<div style="text-align:center; margin-top:2px;"><button class="action-btn" style="padding:4px 10px; font-size:0.85rem;" onclick="jumpToTodayDate()">今日に戻る ↩</button></div>` : ''}
    </div>
  `;
}

window.changeViewDate = function(offset) {
  const [y, m, d] = state.viewDateStr.split('-').map(Number);
  const curr = new Date(y, m - 1, d);
  curr.setDate(curr.getDate() + offset);
  state.viewDateStr = normalizeDateStr(curr);
  render();
};

window.jumpToTodayDate = function() {
  state.viewDateStr = getTodayString();
  render();
};

window.switchTab = function(tab) {
  state.currentTab = tab;
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-tab") === tab);
  });
  render();
  window.scrollTo({ top: 0, behavior: 'auto' });
};

window.triggerPraise = function(isMulti = false) {
  if (navigator.vibrate) navigator.vibrate(isMulti ? [40, 50, 40] : 40);
  const el = document.getElementById("celebration-overlay");
  if (el) {
    el.classList.add("active");
    setTimeout(() => el.classList.remove("active"), 1200);
  }
};
function getCompletedTaskList(dateStr) {
  const list = [];
  const isToday = !dateStr || dateStr === getTodayString();
  if (isToday) {
    getAllTasksFlat().forEach(t => {
      if (state.todayLog && state.todayLog[t.id]) {
        list.push({ cat: t.groupName, title: t.title, time: normalizeTimeStr(state.todayLog[t.id]) });
      }
    });
  } else {
    const hist = state.history && state.history[dateStr];
    if (hist && hist.tasks) return hist.tasks;
  }
  return list;
}

window.openDoneModal = function() {
  const overlay = document.getElementById("done-modal-overlay");
  const listEl = document.getElementById("done-modal-list");
  const titleEl = document.getElementById("done-modal-title");
  if (!overlay || !listEl) return;

  const list = getCompletedTaskList(state.viewDateStr);
  if (titleEl) titleEl.textContent = `📋 ${state.viewDateStr} (${list.length}個)`;
  if (!list.length) {
    listEl.innerHTML = `<div style="text-align:center; color:var(--text-sub); padding:28px;">完了したタスクはありません✨</div>`;
  } else {
    listEl.innerHTML = list.map(item => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px dashed #eee;">
        <div><span style="font-size:0.85rem; color:var(--text-sub); margin-right:6px;">${item.cat}</span><b>${item.title}</b></div>
        <span style="font-weight:800; color:var(--primary); background:var(--primary-light); padding:2px 8px; border-radius:6px;">${item.time}</span>
      </div>
    `).join("");
  }
  overlay.classList.add("active");
};

window.closeDoneModal = function() {
  const overlay = document.getElementById("done-modal-overlay");
  if (overlay) overlay.classList.remove("active");
};

let datePickerTarget = null;
window.openDatePickerModal = function(type, id, val) {
  datePickerTarget = { type, id };
  const overlay = document.getElementById("datepicker-modal-overlay");
  const input = document.getElementById("datepicker-modal-input");
  if (!overlay || !input) return;
  input.value = val || getTodayString();
  overlay.classList.add("active");
};

window.closeDatePickerModal = function() {
  const overlay = document.getElementById("datepicker-modal-overlay");
  if (overlay) overlay.classList.remove("active");
  datePickerTarget = null;
};

window.applyDatePickerSelection = function() {
  if (!datePickerTarget) return;
  const val = document.getElementById("datepicker-modal-input")?.value;
  if (!val) return;
  const { type, id } = datePickerTarget;
  if (type === 'navDate') state.viewDateStr = val;
  else if (type === 'occDone') {
    const item = state.occasional.find(o => o.id === id);
    if (item) item.lastDoneDate = val;
  } else if (type === 'routineDone') {
    const item = state.routines.find(r => r.id === id);
    if (item) item.lastDone = val;
  }
  saveState(); render(); closeDatePickerModal();
};

window.toggleTask = function(id) {
  if (state.viewDateStr !== getTodayString()) return alert("過去・未来の日付は閲覧専用です。");
  if (state.todayLog[id]) {
    if (!confirm("チェックを外しますか？")) return;
    delete state.todayLog[id];
  } else {
    state.todayLog[id] = getCurrentTimeStr();
    window.triggerPraise(false);
  }
  saveState(); render(); window.silentSyncToSpreadsheet();
};

window.batchComplete = function(groupId) {
  if (state.viewDateStr !== getTodayString()) return;
  let targetGroup = null;
  state.majors.forEach(m => (m.groups || []).forEach(g => { if (g.id === groupId) targetGroup = g; }));
  if (!targetGroup) return;
  const now = getCurrentTimeStr();
  targetGroup.tasks.forEach(t => { if (!state.todayLog[t.id]) state.todayLog[t.id] = now; });
  window.triggerPraise(true); saveState(); render(); window.silentSyncToSpreadsheet();
};

window.doneRoutine = function(id) {
  const item = state.routines.find(r => r.id === id);
  if (!item || !confirm(`「${item.title}」を完了にしますか？`)) return;
  item.lastDone = getTodayString();
  if (item.allowMemo) {
    const m = prompt(`「${item.title}」のメモ:`, item.memo || "");
    if (m !== null) item.memo = m.trim();
  }
  window.triggerPraise(false); saveState(); render();
};

window.silentSyncToSpreadsheet = async function() {
  if (!DEFAULT_GAS_URL) return;
  const rows = [];
  const today = getTodayString();
  getAllTasksFlat().forEach(t => {
    if (state.todayLog[t.id]) {
      rows.push({ date: today, type: "今日のタスク", title: `[${t.majorName} > ${t.groupName}] ${t.title}`, detail: state.todayLog[t.id] });
    }
  });
  try {
    await fetch(DEFAULT_GAS_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ rows }) });
  } catch(e) {}
};

window.loadFromSpreadsheet = async function() {
  if (!confirm("スプレッドシートから復元しますか？")) return;
  try {
    const res = await fetch(DEFAULT_GAS_URL);
    const json = await res.json();
    if (!json || !json.rows) return alert("読み込み失敗");
    
    const todayStr = getTodayString();
    const taskMap = {};
    getAllTasksFlat().forEach(t => {
      taskMap[`[${t.majorName} > ${t.groupName}] ${t.title}`] = t.id;
      taskMap[t.title] = t.id;
    });

    state.todayLog = {};
    state.history = {};

    json.rows.forEach(r => {
      const d = normalizeDateStr(r.date);
      if (!d || !/^\d{4}-\d{2}-\d{2}$/.test(d)) return;

      if (r.type === "今日のタスク") {
        const tId = taskMap[r.title];
        const tTime = normalizeTimeStr(r.detail);
        if (d === todayStr && tId) state.todayLog[tId] = tTime;
        if (!state.history[d]) state.history[d] = { done: 0, tasks: [] };
        if (!state.history[d].tasks.some(x => x.title === r.title)) {
          state.history[d].tasks.push({ cat: "", title: r.title, time: tTime });
        }
      }
    });

    Object.keys(state.history).forEach(dk => {
      state.history[dk].done = state.history[dk].tasks.length;
    });

    saveState(); render(); alert("復元完了しました！");
  } catch(e) {
    alert("通信エラーが発生しました");
  }
};
function render() {
  const c = document.getElementById("main-container");
  if (!c) return;
  const tab = state.currentTab;

  const countBadge = document.getElementById("floating-done-count");
  if (countBadge) countBadge.textContent = getCompletedTaskList(state.viewDateStr).length;

  if (tab === "today") {
    const targetDateStr = state.viewDateStr || getTodayString();
    const isToday = targetDateStr === getTodayString();
    const doneList = getCompletedTaskList(targetDateStr);

    let h = `
      <div class="status-card">
        ${getFormattedDateHero(targetDateStr)}
        <div class="status-counter-row">
          <div class="progress-count-simple">
            <span>${doneList.length}</span>
            <span class="progress-count-sub">個 達成 ${isToday ? '中 ✨' : 'でした'}</span>
          </div>
        </div>
      </div>
    `;

    (state.majors || []).forEach(major => {
      (major.groups || []).filter(g => g.id !== "cleaning").forEach(group => {
        h += `
          <div class="category-group">
            <div class="category-header">
              <span>${group.name}</span>
              ${isToday ? `<button class="batch-btn" onclick="batchComplete('${group.id}')">まとめて完了</button>` : ''}
            </div>
            <div class="task-grid-container">
        `;
        group.tasks.forEach(t => {
          const isDone = isToday ? !!state.todayLog[t.id] : doneList.some(x => x.title === t.title);
          const tTime = isToday ? (state.todayLog[t.id] || '') : (doneList.find(x => x.title === t.title)?.time || '');
          h += `
            <div class="task-item ${isDone ? 'checked' : ''}" onclick="toggleTask('${t.id}')">
              <div class="task-checkbox">${isDone ? '✔' : ''}</div>
              <div class="task-title" style="min-width:0;">
                ${t.title}
                ${t.memo ? `<div class="task-memo-badge">💬 ${t.memo}</div>` : ''}
              </div>
              <div class="task-time">${tTime}</div>
            </div>
          `;
        });
        h += `</div></div>`;
      });
    });
    c.innerHTML = h;

  } else if (tab === "occasional") {
    let h = '<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">💡 たまにやるタスク</h2>';
    state.occasional.forEach(item => {
      h += `
        <div class="item-card">
          <div class="item-card-row">
            <div class="item-info">
              <div style="font-weight:800; font-size:1.15rem;">${item.title}</div>
              <div style="font-size:0.9rem; color:var(--text-sub); margin-top:4px;">前回: ${item.lastDoneDate || '未実施'}</div>
            </div>
            <div class="item-actions">
              <button class="action-btn undo" onclick="openDatePickerModal('occDone', '${item.id}', '${item.lastDoneDate || ''}')">📅 日付</button>
            </div>
          </div>
        </div>
      `;
    });
    c.innerHTML = h;

  } else if (tab === "routine") {
    let h = '<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">🔄 定期メンテナンス</h2>';
    state.routines.forEach(item => {
      h += `
        <div class="item-card">
          <div class="item-card-row">
            <div class="item-info">
              <div style="font-weight:800; font-size:1.15rem;">${item.title}</div>
              <div style="font-size:0.9rem; color:var(--text-sub); margin-top:4px;">前回: ${item.lastDone || '未実施'} (${item.intervalDays}日ごと)</div>
            </div>
            <div class="item-actions">
              <button class="action-btn" onclick="doneRoutine('${item.id}')">やった！</button>
            </div>
          </div>
        </div>
      `;
    });
    c.innerHTML = h;

  } else if (tab === "history") {
    let h = '<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">📊 履歴</h2>';
    const keys = Object.keys(state.history || {}).sort().reverse();
    if (!keys.length) {
      h += '<div style="text-align:center; color:var(--text-sub); padding:24px;">履歴はありません</div>';
    } else {
      keys.forEach(k => {
        const rec = state.history[k];
        h += `
          <div class="item-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:900; font-size:1.15rem;">${k}</span>
              <span style="font-weight:900; color:var(--primary);">${rec.done || 0} 個完了</span>
            </div>
          </div>
        `;
      });
    }
    c.innerHTML = h;

  } else if (tab === "settings") {
    c.innerHTML = `
      <h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">⚙️ 設定</h2>
      <div class="status-card">
        <button class="submit-btn" onclick="loadFromSpreadsheet()">スプレッドシートからデータを読み込む 📥</button>
      </div>
    `;
  }
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const t = btn.getAttribute("data-tab");
    if (t) window.switchTab(t);
  });
});

loadState();
render();