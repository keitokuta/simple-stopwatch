// script.js

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

// 時間をhh:mm:ss形式に変換
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n) => n.toString().padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// 画面表示を更新
function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = formatTime(elapsedTime);
}

// スタート
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 100);
}

// ストップ
function stopTimer() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(timerInterval);
}

// リセット
function resetTimer() {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

// ボタン要素を取得
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// イベントリスナーを設定
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// 初期表示
updateDisplay();
