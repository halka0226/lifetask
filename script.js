// --- 初期データ定義 ---
const DEFAULT_DAILY = [
  { id: "target", name: "🎯 今日の目標", single: true, tasks: ["8,000歩達成"] },
  { id: "morning", name: "🌅 朝", tasks: ["起きる", "薬を飲む", "朝のサプリ", "顔を洗う", "保湿", "髪を乾かす"] },
  { 
    id: "gym", 
    name: "🏋️ ジム", 
    tasks: [
      "ジムへ行く準備（タオル・イヤホン・パワーグリップ）", 
      "ジムへ行って運動する", 
      "体組成計で計測・写真を撮る", 
      "結果をスプレッドシートに入れる"
    ] 
  },
  { 
    id: "after_gym", 
    name: "🏠 ジム後", 
    tasks: ["BCAA", "お風呂", "プロテイン", "カレンダーにシールはる"] 
  },
  { 
    id: "lunch", 
    name: "🍚 昼", 
    tasks: ["デトックススープ", "納豆＋卵入り沼", "昼のサプリ"] 
  },
  { 
    id: "cleaning", 
    name: "🧹 掃除・空き時間", 
    tasks: [
      "掃除", 
      "捨て活・不用品整理", 
      "あたらしい音楽を聞いた", 
      "映像をみた", 
      "しらべものをした"
    ] 
  },
  { id: "night", name: "🌙 夜", tasks: ["夜ご飯", "サプリ", "洗濯〜乾燥を回す"] },
  { 
    id: "bath", 
    name: "🛁 夜のお風呂", 
    tasks: [
      "湯船をためる", "歯間フロス・ソニッケアー準備", "ホワイトニング準備", "鼻うがい準備", 
      "クレンジングシャンプー", "普通のシャンプーで二度洗い", "ケラチンスプレーとトリートメント", 
      "鼻うがい", "歯間フロス", "湯船につかる", "歯磨き", "ホームホワイトニング", 
      "ストレッチ", "体を洗う", "顔を洗う", "ブテナロックで足・脇・耳裏を洗う"
    ] 
  },
  { 
    id: "after_bath", 
    name: "✨ お風呂上がり", 
    tasks: [
      "お風呂掃除",
      "体に化粧水スプレーとクリーム保湿", "顔を保湿", "まつげ美容液", "ワキにリフレア", 
      "顔パック", "ビオチンケラチンスプレー", "髪を乾かす", "ヘアオイル", "美顔器"
    ] 
  },
  { 
    id: "laundry", 
    name: "🧺 洗濯終了後", 
    tasks: ["洗濯物を取り出す", "畳む", "フィルターのホコリを取る"] 
  },
  {
    id: "before_sleep",
    name: "🛌 寝る前",
    tasks: ["薬をのむ", "爪にオイル塗る"]
  }
];

// 「たまに」の全項目
const DEFAULT_OCCASIONAL = [
  { id: "occ_1", title: "美容室予約", completed: false, completedAt: null, lastDoneDate: null },
  { id: "occ_2", title: "まつげパーマ予約", completed: false, completedAt: null, lastDoneDate: null },
  { id: "occ_3", title: "歯医者予約", completed: false, completedAt: null, lastDoneDate: null },
  { id: "occ_nail", title: "セルフネイル", completed: false, completedAt: null, lastDoneDate: null, memo: "", allowMemo: true },
  { id: "occ_4", title: "タブレット充電", completed: false, completedAt: null, lastDoneDate: null },
  { id: "occ_5", title: "イヤホン充電", completed: false, completedAt: null, lastDoneDate: null },
  { id: "occ_6", title: "スピーカー充電", completed: false, completedAt: null, lastDoneDate: null },
  { id: "occ_7", title: "美顔器充電", completed: false, completedAt: null, lastDoneDate: null },
  { id: "occ_8", title: "大きめの掃除", completed: false, completedAt: null, lastDoneDate: null, memo: "", allowMemo: true },
  { id: "occ_9", title: "捨て活", completed: false, completedAt: null, lastDoneDate: null, memo: "", allowMemo: true }
];

// 定期メンテナンス項目
const DEFAULT_ROUTINES = [
  { id: "rt_nail", title: "セルフネイル付け替え", intervalDays: 14, lastDone: null, memo: "", allowMemo: true, deadline: null },
  { id: "rt_hair", title: "美容室", intervalDays: 60, lastDone: null, memo: "", allowMemo: true, deadline: null },
  { id: "rt_dental", title: "歯医者でクリーニング", intervalDays: 90, lastDone: null, memo: "", allowMemo: true, deadline: null },
  { id: "rt_lash", title: "まつ毛パーマ", intervalDays: 30, lastDone: null, memo: "", allowMemo: true, deadline: null },
  { id: "rt_earphone", title: "イヤホン充電", intervalDays: 3, lastDone: null, deadline: null },
  { id: "rt_speaker", title: "スピーカー充電", intervalDays: 7, lastDone: null, deadline: null },
  { id: "rt_filter", title: "換気扇フィルター掃除", intervalDays: 30, lastDone: null, memo: "", allowMemo: true, deadline: null },
  { id: "rt_blood", title: "千歳烏山で血液検査", intervalDays: 90, lastDone: null, memo: "", allowMemo: true, deadline: null },
  { id: "rt_thyroid", title: "伊東病院で甲状腺検査", intervalDays: 180, lastDone: null, memo: "", allowMemo: true, deadline: null },
  { id: "rt_checkup", title: "港区健康診断", intervalDays: 365, lastDone: null, memo: "", allowMemo: true, deadline: null }
];

const STORAGE_KEY = "LIFE_OS_DATA_V31_CONFIRM";
let state = {
  currentTab: "today",
  categories: [],
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

function getFormattedDateHero() {
  const d = new Date();
  const y = d.getFullYear(), m = d.getMonth() + 1, date = d.getDate(), day = d.getDay();
  const holiday = getHolidayName(y, m, date, day);
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
  const dayClass = day === 0 ? "sun" : (day === 6 ? "sat" : "");

  return `
    <div class="date-hero">
      <div class="date-main">
        <span class="date-year">${y}</span>
        <span class="date-day-large">${m}月${date}日</span>
        <span class="day-badge ${dayClass}">${dayNames[day]}曜日</span>
      </div>
      ${holiday ? `<div class="holiday-pill">🇯🇵 ${holiday}</div>` : ""}
    </div>
  `;
}

function recordDayHistory(dateStr) {
  if (!dateStr) return;
  const completedTasks = [];
  state.categories.forEach(c => {
    c.tasks.forEach(t => {
      if (state.todayLog[t.id]) {
        completedTasks.push({ cat: c.name, title: t.title, time: state.todayLog[t.id] });
      }
    });
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
    const gas = localStorage.getItem("GAS_WEBAPP_URL");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (gas) localStorage.setItem("GAS_WEBAPP_URL", gas);
  } catch(e) {}
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) state = JSON.parse(saved);
  } catch(e) {}
  const today = getTodayString();
  if (!state.categories || !state.categories.length) {
    let count = 1;
    state.categories = DEFAULT_DAILY.map(c => ({
      id: c.id,
      name: c.name,
      single: !!c.single,
      tasks: c.tasks.map(t => ({ id: "t_" + (count++), title: t }))
    }));
    state.occasional = DEFAULT_OCCASIONAL;
    state.routines = DEFAULT_ROUTINES;
    state.todayLog = {};
    state.todayDateStr = today;
    state.todayDiary = "";
    state.history = {};
    state.openHistoryDates = {};
  } else {
    DEFAULT_OCCASIONAL.forEach(defItem => {
      if (!state.occasional.some(o => o.id === defItem.id || o.title === defItem.title)) {
        state.occasional.push(defItem);
      }
    });
    DEFAULT_ROUTINES.forEach(defItem => {
      if (!state.routines.some(r => r.id === defItem.id || r.title === defItem.title)) {
        state.routines.push(defItem);
      }
    });
  }

  if (!state.openHistoryDates) state.openHistoryDates = {};
  if (state.todayDateStr !== today) {
    recordDayHistory(state.todayDateStr);
    state.todayDateStr = today;
    state.todayLog = {};
    state.todayDiary = "";
    saveState();
  }
}

let praiseTimer = null;
window.triggerPraise = function() {
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
function getCompletedTaskList() {
  const list = [];
  state.categories.forEach(cat => {
    cat.tasks.forEach(t => {
      if (state.todayLog[t.id]) {
        list.push({ cat: cat.name, title: t.title, time: state.todayLog[t.id] });
      }
    });
  });
  list.sort((a, b) => a.time.localeCompare(b.time));
  return list;
}

function updateFloatingBadge() {
  const countEl = document.getElementById("floating-done-count");
  if (countEl) {
    const list = getCompletedTaskList();
    countEl.textContent = list.length;
  }
}

window.openDoneModal = function() {
  const overlay = document.getElementById("done-modal-overlay");
  const listEl = document.getElementById("done-modal-list");
  const titleEl = document.getElementById("done-modal-title");
  if (!overlay || !listEl) return;

  const list = getCompletedTaskList();
  if (titleEl) titleEl.textContent = `📋 今日できたこと (${list.length}個)`;

  if (list.length === 0) {
    listEl.innerHTML = `<div style="text-align:center; color:var(--text-sub); font-size:1.05rem; padding:28px 0;">まだ完了したタスクはありません✨<br>マイペースに進めていきましょう！</div>`;
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

window.toggleHistoryDate = function(dateStr) {
  if (!state.openHistoryDates) state.openHistoryDates = {};
  state.openHistoryDates[dateStr] = !state.openHistoryDates[dateStr];
  render();
};

// チェックを外す時だけ確認ダイアログ
window.toggleTask = function(id) {
  if (state.todayLog[id]) {
    const ok = confirm("チェックをはずしますか？");
    if (!ok) return;
    delete state.todayLog[id];
  } else {
    state.todayLog[id] = getCurrentTimeStr();
    window.triggerPraise();
  }
  saveState(); 
  render();
  window.silentSyncToSpreadsheet();
};

window.batchComplete = function(catId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;
  const now = getCurrentTimeStr();
  let added = false;
  cat.tasks.forEach(t => { if (!state.todayLog[t.id]) { state.todayLog[t.id] = now; added = true; } });
  if (added) window.triggerPraise();
  saveState(); 
  render();
  window.silentSyncToSpreadsheet();
};

window.onDiaryInput = val => { state.todayDiary = val; saveState(); };

window.toggleOccasional = function(id) {
  const item = state.occasional.find(o => o.id === id);
  if (!item) return;

  if (item.completed) {
    const ok = confirm("完了を取り消しますか？");
    if (!ok) return;
    item.completed = false;
    item.completedAt = null;
  } else {
    item.completed = true;
    const today = getTodayString();
    item.completedAt = `${today} ${getCurrentTimeStr()}`;
    item.lastDoneDate = today;
    if (item.allowMemo) {
      const m = prompt(`「${item.title}」のメモ（空欄OK）:`, item.memo || "");
      if (m !== null) item.memo = m.trim();
    }
    window.triggerPraise();
  }
  saveState(); 
  render();
};

window.editOccasionalMemo = function(id) {
  const item = state.occasional.find(o => o.id === id);
  if (!item) return;
  const m = prompt(`「${item.title}」のメモ:`, item.memo || "");
  if (m !== null) { item.memo = m.trim(); saveState(); render(); }
};

window.setOccasionalLastDone = function(id) {
  const item = state.occasional.find(o => o.id === id);
  if (!item) return;
  const val = prompt(`「${item.title}」を過去に実施した日付 (YYYY-MM-DD):`, item.lastDoneDate || getTodayString());
  if (val && /^\d{4}-\d{2}-\d{2}$/.test(val)) {
    item.lastDoneDate = val; saveState(); render();
  } else if (val !== null) {
    alert("「2026-09-10」の形式で入力してください");
  }
};

window.doneRoutine = function(id) {
  const item = state.routines.find(r => r.id === id);
  if (!item) return;
  item.lastDone = getTodayString();
  if (item.allowMemo) {
    const m = prompt(`「${item.title}」のメモ（例: デザイン、検査結果など）:`, item.memo || "");
    if (m !== null) item.memo = m.trim();
  }
  window.triggerPraise(); saveState(); render();
};

window.editRoutineMemo = function(id) {
  const item = state.routines.find(r => r.id === id);
  if (!item) return;
  const m = prompt(`「${item.title}」のメモ:`, item.memo || "");
  if (m !== null) { item.memo = m.trim(); saveState(); render(); }
};

window.editRoutineInterval = function(id) {
  const item = state.routines.find(r => r.id === id);
  if (!item) return;
  const val = prompt(`「${item.title}」の周期日数:`, item.intervalDays);
  if (val && !isNaN(val) && Number(val) > 0) { item.intervalDays = parseInt(val, 10); saveState(); render(); }
};

window.setRoutineLastDone = function(id) {
  const item = state.routines.find(r => r.id === id);
  if (!item) return;
  const val = prompt(`「${item.title}」を前回実施した日付 (YYYY-MM-DD):`, item.lastDone || getTodayString());
  if (val && /^\d{4}-\d{2}-\d{2}$/.test(val)) {
    item.lastDone = val; saveState(); render();
  } else if (val !== null) {
    alert("「2026-09-10」の形式で入力してください");
  }
};

window.setRoutineDeadline = function(id) {
  const item = state.routines.find(r => r.id === id);
  if (!item) return;
  const val = prompt(`「${item.title}」の締め切り日を入力 (YYYY-MM-DD / 空欄で解除):`, item.deadline || "");
  if (val === null) return;
  const trimmed = val.trim();
  if (trimmed === "") {
    item.deadline = null;
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    item.deadline = trimmed;
  } else {
    alert("「2026-11-30」の形式で入力してください");
    return;
  }
  saveState();
  render();
};

window.addNewDailyTask = function() {
  const t = document.getElementById("add-title")?.value.trim();
  const c = document.getElementById("add-cat")?.value;
  if (!t) return alert("入力してください");
  const cat = state.categories.find(x => x.id === c);
  if (cat) { cat.tasks.push({ id: "t_" + Date.now(), title: t }); saveState(); alert("追加しました！"); window.switchTab("today"); }
};

window.deleteDailyTask = function(cId, tId) {
  if (!confirm("削除しますか？")) return;
  const cat = state.categories.find(c => c.id === cId);
  if (cat) { cat.tasks = cat.tasks.filter(t => t.id !== tId); delete state.todayLog[tId]; saveState(); render(); }
};

window.resetAll = function() {
  if (confirm("全データを初期化しますか？")) {
    try { localStorage.removeItem(STORAGE_KEY); } catch(e){}
    loadState(); render();
  }
};

window.saveGasUrl = function() {
  const val = document.getElementById("gas-url-input")?.value.trim();
  localStorage.setItem("GAS_WEBAPP_URL", val || "");
  alert("URLを保存しました！");
  window.silentSyncToSpreadsheet();
};

window.silentSyncToSpreadsheet = async function() {
  const url = localStorage.getItem("GAS_WEBAPP_URL");
  if (!url) return;
  const rows = [];
  const today = getTodayString();
  state.categories.forEach(cat => cat.tasks.forEach(t => {
    if (state.todayLog[t.id]) rows.push({ date: today, type: "今日のタスク", title: `[${cat.name}] ${t.title}`, detail: state.todayLog[t.id] });
  }));
  let done = 0;
  state.categories.forEach(c => c.tasks.forEach(t => { if (state.todayLog[t.id]) done++; }));
  rows.push({ date: today, type: "日次サマリー", title: "本日の達成状況", detail: `${done}個完了` });
  if (state.todayDiary?.trim()) rows.push({ date: today, type: "今日の日記・メモ", title: "ひとこと記録", detail: state.todayDiary.trim() });

  try {
    await fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ rows }) });
  } catch(e) {}
};

window.syncToSpreadsheet = async function() {
  await window.silentSyncToSpreadsheet();
  alert("スプレッドシートに送信しました！🎉");
};

function getStatsSummary(days) {
  let done = 0;
  const now = new Date(getTodayString());
  let todayDone = 0;
  state.categories.forEach(c => c.tasks.forEach(t => { if (state.todayLog[t.id]) todayDone++; }));
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

  // --- ☀️ 今日（2列グリッド配置） ---
  if (tab === "today") {
    let done = 0;
    state.categories.forEach(cat => cat.tasks.forEach(t => {
      if (state.todayLog[t.id]) done++;
    }));

    let h = `
      <div class="status-card">
        ${getFormattedDateHero()}
        <div class="status-counter-row">
          <div class="progress-count-simple">
            <span>${done}</span>
            <span class="progress-count-sub">個 達成中 ✨</span>
          </div>
        </div>
      </div>
    `;

    state.categories.filter(cat => cat.id !== "cleaning").forEach(cat => {
      const isSingle = cat.single || cat.tasks.length <= 1;
      h += `
        <div class="category-group">
          <div class="category-header">
            <span>${cat.name}</span>
            ${!isSingle ? `<button class="batch-btn" onclick="batchComplete('${cat.id}')">まとめて完了</button>` : ''}
          </div>
          <div class="task-grid-container">
      `;
      cat.tasks.forEach(t => {
        const isDone = !!state.todayLog[t.id];
        h += `
          <div class="task-item ${isDone ? 'checked' : ''}" onclick="toggleTask('${t.id}')">
            <div class="task-checkbox">${isDone ? '✔' : ''}</div>
            <div class="task-title">${t.title}</div>
            <div class="task-time">${state.todayLog[t.id] || ''}</div>
          </div>
        `;
      });
      h += `</div></div>`;
    });

    h += `<div class="status-card" style="margin-top:14px;">
      <div style="font-size:1.15rem; font-weight:800; margin-bottom:8px;">📝 今日のメモ・日記</div>
      <textarea class="form-control" rows="3" placeholder="体調、気づき、ひと言などを自由に記録..." oninput="onDiaryInput(this.value)" style="resize:none; line-height:1.4;">${state.todayDiary || ""}</textarea>
    </div>`;
    c.innerHTML = h;

  // --- 🧹 掃除・空き時間（2列グリッド） ---
  } else if (tab === "freetime") {
    const cleanCat = state.categories.find(c => c.id === "cleaning");
    let h = `<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">🧹 掃除・空き時間タスク</h2>`;
    if (cleanCat) {
      h += `
        <div class="category-group">
          <div class="category-header">
            <span>${cleanCat.name}</span>
            <button class="batch-btn" onclick="batchComplete('${cleanCat.id}')">まとめて完了</button>
          </div>
          <div class="task-grid-container">
      `;
      cleanCat.tasks.forEach(t => {
        const isDone = !!state.todayLog[t.id];
        h += `
          <div class="task-item ${isDone ? 'checked' : ''}" onclick="toggleTask('${t.id}')">
            <div class="task-checkbox">${isDone ? '✔' : ''}</div>
            <div class="task-title">${t.title}</div>
            <div class="task-time">${state.todayLog[t.id] || ''}</div>
          </div>
        `;
      });
      h += `</div></div>`;
    }
    h += `<div class="status-card" style="margin-top:14px;">
      <div style="font-size:1.05rem; color:var(--text-sub); line-height:1.5;">
        💡 空き時間のインプット（新しい音楽・映像・リサーチ）や掃除・不用品整理を気軽にこなしてチェックしましょう！
      </div>
    </div>`;
    c.innerHTML = h;

  // --- 💡 たまに ---
  } else if (tab === "occasional") {
    let h = '<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">💡 たまにやるタスク</h2>';
    const now = new Date(getTodayString());
    state.occasional.forEach(item => {
      let info = "未実施";
      if (item.lastDoneDate) {
        const diff = Math.floor((now - new Date(item.lastDoneDate)) / 86400000);
        info = `${item.lastDoneDate} (${diff}日前)`;
      }
      h += `<div class="item-card"><div class="item-card-row">
        <div class="item-info"><div style="font-weight:800; font-size:1.15rem; ${item.completed ? 'text-decoration:line-through; opacity:0.6;' : ''}">${item.title}</div>
        <div style="font-size:0.92rem; color:var(--text-sub); margin-top:4px;">前回：${info}</div>
        ${item.completedAt ? `<div style="font-size:0.88rem; color:var(--primary); margin-top:2px;">今回完了: ${item.completedAt}</div>` : ''}</div>
        <div class="item-actions">
          <button class="action-btn undo" style="padding:6px 10px; font-size:0.88rem;" onclick="setOccasionalLastDone('${item.id}')">📅 日付</button>
          ${item.allowMemo ? `<button class="action-btn undo" style="padding:6px 10px; font-size:0.88rem;" onclick="editOccasionalMemo('${item.id}')">📝</button>` : ''}
          <button class="${item.completed ? 'action-btn undo' : 'action-btn'}" onclick="toggleOccasional('${item.id}')">${item.completed ? '戻す' : '完了'}</button>
        </div>
      </div>${item.memo ? `<div style="font-size:0.95rem; background:#f8f9fa; padding:8px 10px; border-radius:10px; color:var(--text); word-break:break-all;">📝 ${item.memo}</div>` : ''}</div>`;
    });
    c.innerHTML = h;

  // --- 🔄 定期 ---
  } else if (tab === "routine") {
    let h = '<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">🔄 定期メンテナンス</h2>';
    const now = new Date(getTodayString());
    state.routines.forEach(item => {
      let daysAgo = "未実施", left = item.intervalDays;
      if (item.lastDone) {
        const diff = Math.floor((now - new Date(item.lastDone)) / 86400000);
        daysAgo = `${diff}日前`; left = item.intervalDays - diff;
      }
      const intervalStatus = left <= 0 ? '<span style="color:#e02424; font-weight:800;">今すぐ！</span>' : `あと ${left}日`;

      let deadlineInfo = "";
      if (item.deadline) {
        const dlDiff = Math.ceil((new Date(item.deadline) - now) / 86400000);
        if (dlDiff < 0) {
          deadlineInfo = `<span style="color:#e02424; font-weight:800; background:#ffebeb; padding:3px 8px; border-radius:6px;">🚨 期限超過 (${Math.abs(dlDiff)}日遅れ / ${item.deadline})</span>`;
        } else if (dlDiff === 0) {
          deadlineInfo = `<span style="color:#e02424; font-weight:800; background:#fff3cd; padding:3px 8px; border-radius:6px;">⚠️ 今日が締め切り！ (${item.deadline})</span>`;
        } else {
          deadlineInfo = `<span style="color:#d97706; font-weight:800; background:#fffbeb; padding:3px 8px; border-radius:6px;">⏰ 期限: ${item.deadline} (あと${dlDiff}日)</span>`;
        }
      }

      h += `
        <div class="item-card">
          <div class="item-card-row">
            <div class="item-info">
              <div style="font-weight:800; font-size:1.18rem;">${item.title}</div>
              <div style="font-size:0.92rem; color:var(--text-sub); margin-top:4px;">${item.intervalDays}日ごと (前回: ${daysAgo}) ・ ${intervalStatus}</div>
              ${deadlineInfo ? `<div style="font-size:0.92rem; margin-top:6px;">${deadlineInfo}</div>` : ''}
            </div>
            <div class="item-actions" style="flex-direction:column; gap:6px;">
              <button class="action-btn" style="width:100%; padding:8px;" onclick="doneRoutine('${item.id}')">やった！</button>
              <div style="display:flex; gap:4px;">
                <button class="action-btn undo" style="padding:4px 7px; font-size:0.8rem;" onclick="setRoutineLastDone('${item.id}')">📅 日付</button>
                <button class="action-btn undo" style="padding:4px 7px; font-size:0.8rem;" onclick="setRoutineDeadline('${item.id}')">⏰ 期限</button>
                ${item.allowMemo ? `<button class="action-btn undo" style="padding:4px 7px; font-size:0.8rem;" onclick="editRoutineMemo('${item.id}')">メモ</button>` : ''}
                <button class="action-btn undo" style="padding:4px 7px; font-size:0.8rem;" onclick="editRoutineInterval('${item.id}')">周期</button>
              </div>
            </div>
          </div>
          ${item.memo ? `<div style="font-size:0.95rem; background:#f8f9fa; padding:8px 10px; border-radius:10px; color:var(--text); word-break:break-all;">📝 ${item.memo}</div>` : ''}
        </div>
      `;
    });
    c.innerHTML = h;

  // --- 📋 全部 ---
  } else if (tab === "all") {
    let h = '<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">📋 毎日のタスク</h2>';
    state.categories.forEach(cat => {
      h += `<div class="category-group"><div class="category-header"><span>${cat.name}</span></div><div class="task-grid-container">`;
      cat.tasks.forEach(t => {
        h += `<div class="task-item" style="cursor:default;"><div class="task-title">${t.title}</div><button class="action-btn undo" style="color:#ff4757;" onclick="deleteDailyTask('${cat.id}', '${t.id}')">削除</button></div>`;
      });
      h += `</div></div>`;
    });
    c.innerHTML = h;

  // --- ➕ 追加 ---
  } else if (tab === "add") {
    c.innerHTML = `<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">➕ タスク追加</h2>
      <div class="status-card">
        <div class="form-group"><label class="form-label">タスク名</label><input type="text" id="add-title" class="form-control" placeholder="例: 充電する"></div>
        <div class="form-group"><label class="form-label">カテゴリ</label><select id="add-cat" class="form-control">${state.categories.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('')}</select></div>
        <button class="submit-btn" onclick="addNewDailyTask()">追加する</button>
      </div>`;

  // --- 📊 履歴 ---
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
    const todayTasks = getCompletedTaskList();
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

        h += `
            </div>
          </div>
        `;
      });
    }
    c.innerHTML = h;

  // --- ⚙️ 設定 ---
  } else if (tab === "settings") {
    c.innerHTML = `<h2 style="font-size:1.4rem; font-weight:900; margin-bottom:14px;">⚙️ 設定</h2>
      <div class="status-card">
        <h3 style="font-size:1.15rem; margin-bottom:10px;">📊 Googleスプレッドシート連携</h3>
        <p style="font-size:0.95rem; color:var(--text-sub); margin-bottom:12px; line-height:1.4;">
          タスク完了時・日付変更時にバックグラウンドで自動同期されます（手動送信も可能です）。
        </p>
        <input type="text" id="gas-url-input" class="form-control" placeholder="https://script.google.com/macros/s/.../exec" value="${localStorage.getItem("GAS_WEBAPP_URL") || ""}" style="margin-bottom:10px;">
        <button class="submit-btn" style="margin-bottom:10px;" onclick="saveGasUrl()">URLを保存</button>
        <button class="submit-btn" style="background:var(--primary);" onclick="syncToSpreadsheet()">今すぐ手動で送信 📤</button>
      </div>
      <div class="status-card" style="margin-top:16px;"><button class="action-btn undo" style="width:100%; color:#ff4757; padding:12px; font-size:1rem;" onclick="resetAll()">全データを初期化</button></div>`;
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

loadState();
render();
setupNavEvents();
window.silentSyncToSpreadsheet();