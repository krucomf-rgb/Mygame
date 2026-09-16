/* =========================================================
   Typing Speed Challenge ภาษาไทย
   ========================================================= */

/* ---------------- WORD BANK (by syllable count: 1 = easy, 2 = medium, 3+ = hard) ---------------- */
const WORDS_EASY = [
  "บ้าน","น้ำ","ไฟ","ดิน","ลม","ฟ้า","ดาว","แสง","เสียง","นก",
  "ปลา","แมว","หมา","ม้า","งู","หมู","วัว","ไก่","เป็ด","ครู",
  "พ่อ","แม่","พี่","น้อง","ปู่","ย่า","ตา","ยาย","ลูก","สี",
  "แดง","ดำ","ขาว","ฝน","หมอก","เกม","รถ","เรือ","ข้าว","เกลือ",
  "ผัก","เนื้อ","ไข่","นม","วัน","ปี","เดือน","จาน","ช้อน","แก้ว",
  "โต๊ะ","เตียง","ผ้า","มือ","เท้า","หัว","หู","ปาก","ฟัน","ผม",
  "แขน","ขา","ท้อง","หลัง","คอ","ไหล่","เข่า","นิ้ว","เล็บ","เลือด",
  "หนัง","เหงื่อ","ยิ้ม","รัก","กลัว","โกรธ","หิว","อิ่ม","ง่วง","ตื่น",
  "นอน","เดิน","วิ่ง","กิน","ดื่ม","นั่ง","ยืน","เล่น","เรียน","อ่าน",
  "เขียน","ฟัง","พูด","คิด","จำ","ลืม","รู้","ฝัน","หวาน","เผ็ด"
];

const WORDS_MEDIUM = [
  "ถนน","ขนม","จมูก","ฟุตบอล","ปากกา","ดินสอ","กระดาน","ยางลบ","รองเท้า","กางเกง",
  "เสื้อผ้า","กระเป๋า","รถไฟ","รถเมล์","ตู้เย็น","พัดลม","หลอดไฟ","น้ำแข็ง","น้ำตาล","ดอกไม้",
  "ใบไม้","ต้นไม้","นักเรียน","ห้องเรียน","ครอบครัว","เพื่อนบ้าน","พี่น้อง","ปู่ย่า","ตายาย","คุณครู",
  "กีฬา","ว่ายน้ำ","กระโดด","เต้นรำ","ร้องเพลง","วาดภาพ","ลมแรง","แดดจัด","ฟ้าร้อง","สายรุ้ง",
  "กลางคืน","กลางวัน","เช้ามืด","เที่ยงวัน","ดวงจันทร์","ดวงดาว","ท้องฟ้า","สายฝน","หยดน้ำ","ก้อนหิน",
  "ใบหน้า","ลายมือ","รอยยิ้ม","น้ำใจ","น้ำตา","ใจดี","ขยัน","อดทน","ซื่อสัตย์","กล้าหาญ",
  "สุภาพ","ตั้งใจ","สนุก","ดีใจ","เสียใจ","ตกใจ","ห่วงใย","อบอุ่น","ปลอดภัย","มั่นคง",
  "ยั่งยืน","สดใส","ราบรื่น","ก้าวหน้า","มุ่งมั่น","ตื่นเต้น","สับสน","ลังเล","เข้าใจ","สงสัย",
  "พอใจ","ภูมิใจ","สำเร็จ","ล้มเหลว","ตั้งมั่น","หัวใจ","อากาศ","แสงแดด","ก้อนเมฆ","ลูกโป่ง",
  "ลูกบอล","ลูกแก้ว","กระดุม","กระจก","กระถาง","กระติก","มะนาว","มะม่วง","แตงโม","ลำไย"
];

const WORDS_HARD = [
  "คอมพิวเตอร์","อินเทอร์เน็ต","แอปพลิเคชัน","โทรศัพท์","วิทยาศาสตร์","คณิตศาสตร์","ประวัติศาสตร์","ภูมิศาสตร์","การทดลอง","สมมติฐาน",
  "การสังเกต","ห้องปฏิบัติการ","กล้องจุลทรรศน์","พลังงาน","แรงโน้มถ่วง","แสงอาทิตย์","พลังงานลม","พลังงานน้ำ","พลังงานนิวเคลียร์","ธรรมชาติ",
  "สิ่งแวดล้อม","ระบบนิเวศ","อุทยานแห่งชาติ","ปัญญาประดิษฐ์","เทคโนโลยี","นวัตกรรม","ระบบอัตโนมัติ","วงจรไฟฟ้า","จักรวาล","ดาวเคราะห์",
  "นักบินอวกาศ","สถานีอวกาศ","กาแล็กซี","ทางช้างเผือก","ระบบประสาท","ระบบย่อยอาหาร","ระบบหายใจ","เกษตรกรรม","การเพาะปลูก","ชลประทาน",
  "การสังเคราะห์แสง","มิตรภาพ","ความสามัคคี","ความคิดสร้างสรรค์","จินตนาการ","ความรับผิดชอบ","พิพิธภัณฑ์","สวนพฤกษศาสตร์","ศูนย์วิทยาศาสตร์","การผจญภัย",
  "นักสำรวจ","การแข่งขัน","ความท้าทาย","ประกาศนียบัตร","ทุนการศึกษา","การบรรยาย","ดนตรีคลาสสิก","เครื่องดนตรี","วงออร์เคสตรา","นักแต่งเพลง",
  "วรรณกรรม","กวีนิพนธ์","บรรณาธิการ","สำนักพิมพ์","การออกกำลังกาย","โภชนาการ","การพักผ่อน","การนอนหลับ","สมาธิ","การหายใจ",
  "เศรษฐกิจ","การลงทุน","ผู้ประกอบการ","การค้าออนไลน์","สกุลเงินดิจิทัล","การธนาคาร","พันธุกรรม","จุลินทรีย์","แบคทีเรีย","ภูมิคุ้มกัน",
  "สารประกอบ","โมเลกุล","อิเล็กตรอน","พันธะเคมี","ตารางธาตุ","แรงเสียดทาน","โมเมนตัม","ความหนาแน่น","ภาวะโลกร้อน","มลพิษทางอากาศ",
  "ห่วงโซ่อาหาร","วัฏจักรน้ำ","ชั้นบรรยากาศ","อัลกอริทึม","ฐานข้อมูล","การเข้ารหัส","ภาษาโปรแกรม","นักวิทยาศาสตร์","นักดาราศาสตร์","นักชีววิทยา"
];

// Full pool (kept for reference / potential future use)
const WORD_BANK_ALL = [...WORDS_EASY, ...WORDS_MEDIUM, ...WORDS_HARD];

/* ---------------- CONSTANTS ---------------- */
const STORAGE_KEY = "typingSpeedChallenge_leaderboard_th";
const START_TIME = 30;      // seconds
const TIME_BONUS = 2;       // seconds per correct word
const LOW_TIME_THRESHOLD = 8;
const MAX_LEADERBOARD = 10;

/* ---------------- STATE ---------------- */
let currentPlayerName = "";
let score = 0;
let combo = 0;
let timeLeft = START_TIME;
let timerId = null;
let currentWord = "";
let gameActive = false;

/* ---------------- DOM REFS ---------------- */
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");

const playerNameInput = document.getElementById("player-name");
const nameError = document.getElementById("name-error");
const startBtn = document.getElementById("start-btn");

const leaderboardList = document.getElementById("leaderboard-list");
const leaderboardEmpty = document.getElementById("leaderboard-empty");

const hudPlayerName = document.getElementById("hud-player-name");
const hudScore = document.getElementById("hud-score");
const hudTime = document.getElementById("hud-time");
const hudTimerStat = document.querySelector(".hud-timer");

const timerFill = document.getElementById("timer-fill");
const endGameBtn = document.getElementById("end-game-btn");

const comboBadge = document.getElementById("combo-badge");
const comboNum = document.getElementById("combo-num");

const targetWordEl = document.getElementById("target-word");
const typingInput = document.getElementById("typing-input");
const typoHint = document.getElementById("typo-hint");

const resultOverlay = document.getElementById("result-overlay");
const resultName = document.getElementById("result-name");
const resultScore = document.getElementById("result-score");
const resultRankBanner = document.getElementById("result-rank-banner");
const resultRankNum = document.getElementById("result-rank-num");
const homeBtn = document.getElementById("home-btn");

/* ---------------- SOUND (WebAudio, no external files) ---------------- */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  return audioCtx;
}

function playTone(freq, duration, type = "sine", volume = 0.18) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = volume;
  osc.connect(gain);
  gain.connect(ctx.destination);
  const now = ctx.currentTime;
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  osc.start(now);
  osc.stop(now + duration);
}

function playCorrectSound() {
  playTone(880, 0.12, "triangle", 0.16);
  setTimeout(() => playTone(1320, 0.12, "triangle", 0.12), 60);
}

function playWrongSound() {
  playTone(160, 0.15, "sawtooth", 0.12);
}

function playEndSound() {
  playTone(660, 0.15, "sine", 0.15);
  setTimeout(() => playTone(440, 0.2, "sine", 0.15), 140);
  setTimeout(() => playTone(330, 0.3, "sine", 0.15), 300);
}

/* ---------------- LEADERBOARD ---------------- */
function loadLeaderboard() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (e) {
    console.error("Failed to load leaderboard", e);
    return [];
  }
}

function saveLeaderboard(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Failed to save leaderboard", e);
  }
}

// Adds a new score, re-sorts, trims to top 10, returns the rank (1-based) or null if not placed
function addScoreToLeaderboard(name, newScore) {
  const list = loadLeaderboard();
  list.push({ name, score: newScore, ts: Date.now() });
  list.sort((a, b) => b.score - a.score || a.ts - b.ts);
  const trimmed = list.slice(0, MAX_LEADERBOARD);
  saveLeaderboard(trimmed);

  // find the rank (1-based) of the entry we just added, if it survived the trim
  const rank = trimmed.findIndex(e => e.name === name && e.score === newScore);
  return rank === -1 ? null : rank + 1;
}

function renderLeaderboard() {
  const list = loadLeaderboard();
  leaderboardList.innerHTML = "";

  if (list.length === 0) {
    leaderboardEmpty.style.display = "block";
    return;
  }
  leaderboardEmpty.style.display = "none";

  list.forEach((entry, idx) => {
    const rank = idx + 1;
    const li = document.createElement("li");
    let rankClass = "rank-rest";
    if (rank === 1) rankClass = "rank-1";
    else if (rank === 2) rankClass = "rank-2";
    else if (rank === 3) rankClass = "rank-3";

    li.className = `lb-row ${rankClass}`;
    li.innerHTML = `
      <span class="lb-rank">${rank}</span>
      <span class="lb-name">${escapeHtml(entry.name)}</span>
      <span class="lb-score">${entry.score}</span>
    `;
    leaderboardList.appendChild(li);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------- WORD HELPERS ---------------- */
// Difficulty ramps up as more words are shown in the round:
// words 1-12  -> easy pool
// words 13-30 -> medium pool
// words 31+   -> hard pool
const EASY_STAGE_COUNT = 12;
const MEDIUM_STAGE_COUNT = 30;

let wordsShownCount = 0;
// Tracks every word already shown this round so nothing repeats until the
// player finishes (a brand new game/player resets this).
let usedWordsThisRound = new Set();

function poolForCurrentStage() {
  if (wordsShownCount < EASY_STAGE_COUNT) return WORDS_EASY;
  if (wordsShownCount < MEDIUM_STAGE_COUNT) return WORDS_MEDIUM;
  return WORDS_HARD;
}

function pickRandomWord() {
  const pool = poolForCurrentStage();
  let available = pool.filter(w => !usedWordsThisRound.has(w));

  // Safety net: if this tier's pool somehow runs out mid-round, allow repeats
  // from that tier rather than crashing the game.
  if (available.length === 0) {
    available = pool;
  }

  const word = available[Math.floor(Math.random() * available.length)];
  usedWordsThisRound.add(word);
  return word;
}

function showNextWord() {
  currentWord = pickRandomWord();
  wordsShownCount += 1;
  targetWordEl.textContent = currentWord;
  targetWordEl.classList.remove("pop", "correct-flash");
  // force reflow to restart animation
  void targetWordEl.offsetWidth;
  targetWordEl.classList.add("pop");
}

/* ---------------- GAME FLOW ---------------- */
function goToScreen(screenEl) {
  [homeScreen, gameScreen].forEach(s => s.classList.remove("active"));
  screenEl.classList.add("active");
}

function validateName() {
  const name = playerNameInput.value.trim();
  if (!name) {
    nameError.textContent = "กรุณากรอกชื่อก่อนเริ่มเกม";
    playerNameInput.classList.add("input-error");
    playerNameInput.focus();
    setTimeout(() => playerNameInput.classList.remove("input-error"), 350);
    return null;
  }
  nameError.textContent = "";
  return name;
}

function startGame() {
  const name = validateName();
  if (!name) return;

  currentPlayerName = name;
  score = 0;
  combo = 0;
  timeLeft = START_TIME;
  gameActive = true;
  wordsShownCount = 0;
  usedWordsThisRound = new Set();

  hudPlayerName.textContent = currentPlayerName;
  hudScore.textContent = "0";
  hudTime.textContent = String(timeLeft);
  hudTimerStat.classList.remove("low");
  timerFill.style.width = "100%";
  timerFill.classList.remove("low");
  comboBadge.classList.remove("show");
  comboNum.textContent = "0";
  typoHint.textContent = "\u00A0";
  typingInput.value = "";
  typingInput.classList.remove("wrong");

  goToScreen(gameScreen);
  showNextWord();

  clearInterval(timerId);
  timerId = setInterval(tickTimer, 1000);

  // focus after screen switch so mobile keyboards behave
  setTimeout(() => typingInput.focus(), 50);
}

function tickTimer() {
  timeLeft -= 1;
  if (timeLeft <= 0) {
    timeLeft = 0;
    updateTimerUI();
    endGame();
    return;
  }
  updateTimerUI();
}

function updateTimerUI() {
  hudTime.textContent = String(timeLeft);
  const pct = Math.max(0, Math.min(100, (timeLeft / START_TIME) * 100));
  timerFill.style.width = pct + "%";

  const isLow = timeLeft <= LOW_TIME_THRESHOLD;
  hudTimerStat.classList.toggle("low", isLow);
  timerFill.classList.toggle("low", isLow);
}

function addTime(seconds) {
  timeLeft = timeLeft + seconds;
  updateTimerUI();
}

function handleCorrectWord() {
  score += 1;
  combo += 1;
  addTime(TIME_BONUS);

  hudScore.textContent = String(score);
  comboNum.textContent = String(combo);
  comboBadge.classList.add("show");

  targetWordEl.classList.remove("correct-flash");
  void targetWordEl.offsetWidth;
  targetWordEl.classList.add("correct-flash");

  playCorrectSound();

  typingInput.value = "";
  typoHint.textContent = "\u00A0";
  showNextWord();
}

function handleWrongSubmit() {
  combo = 0;
  comboNum.textContent = "0";
  comboBadge.classList.remove("show");
  typingInput.classList.add("wrong");
  typoHint.textContent = "ลองพิมพ์ให้ตรงกับคำที่แสดงอีกครั้ง";
  playWrongSound();
  setTimeout(() => typingInput.classList.remove("wrong"), 280);
}

function endGame() {
  if (!gameActive) return;
  gameActive = false;
  clearInterval(timerId);
  playEndSound();

  const rank = addScoreToLeaderboard(currentPlayerName, score);

  resultName.textContent = currentPlayerName;
  resultScore.textContent = String(score);

  if (rank) {
    resultRankBanner.hidden = false;
    resultRankNum.textContent = String(rank);
  } else {
    resultRankBanner.hidden = true;
  }

  renderLeaderboard();
  resultOverlay.classList.add("show");
}

function closeResultOverlay() {
  resultOverlay.classList.remove("show");
}

/* ---------------- EVENT LISTENERS ---------------- */
startBtn.addEventListener("click", startGame);

playerNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") startGame();
});
playerNameInput.addEventListener("input", () => {
  if (playerNameInput.value.trim()) nameError.textContent = "";
});

function checkTypedWord() {
  if (!gameActive) return;
  const value = typingInput.value.trim();
  if (!value) return; // prevent empty submissions

  if (value === currentWord) {
    handleCorrectWord();
  } else {
    handleWrongSubmit();
  }
}

typingInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    checkTypedWord();
  }
});

endGameBtn.addEventListener("click", () => {
  if (!gameActive) return;
  endGame();
});

homeBtn.addEventListener("click", () => {
  closeResultOverlay();
  renderLeaderboard();
  goToScreen(homeScreen);
  // clear the name field so the next player starts fresh
  playerNameInput.value = "";
  nameError.textContent = "";
  playerNameInput.focus();
});

/* ---------------- INIT ---------------- */
renderLeaderboard();
