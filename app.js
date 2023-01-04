var minutesNode = document.querySelector(".stopwatch_minutes_value");
var secondsNode = document.querySelector(".stopwatch_seconds_value");
var stopwatchStartButton = document.querySelector("#stopwatch_start");
var stopwatchPauseButton = document.querySelector("#stopwatch_pause");
var stopwatchResetButton = document.querySelector("#stopwatch_reset");

stopwatchStartButton.addEventListener("click", StartStopwatch);
stopwatchPauseButton.addEventListener("click", PauseStopwatch);
stopwatchResetButton.addEventListener("click", ResetStopwatch);

var minutesValue = 0;
var secondsValue = 0;
var interval;

function CountDown() {
  secondsValue++;

  if (secondsValue <= 59) {
    secondsNode.innerText = secondsValue.toString().padStart(2, "0");
  }
  if (secondsValue > 59) {
    minutesValue++;
    secondsValue = 0;
    minutesNode.innerText = minutesValue.toString().padStart(2, "0");
    secondsNode.innerText = secondsValue.toString().padStart(2, "0");
  }
}

function StartStopwatch() {
  interval = setInterval(CountDown, 1000);
  StartButtonActive();
}

function PauseStopwatch() {
  clearInterval(interval);
  PauseButtonActive();
}

function ResetStopwatch() {
  if (interval > 0) {
    clearInterval(interval);
  }
  minutesValue = 0;
  secondsValue = 0;
  minutesNode.textContent = minutesValue.toString().padStart(2, "0");
  secondsNode.textContent = secondsValue.toString().padStart(2, "0");
  ResetButtonAcitve();
}

function StartButtonActive() {
  stopwatchStartButton.disabled = true;
  stopwatchPauseButton.disabled = false;
  stopwatchStartButton.style.cursor = "default";
  stopwatchPauseButton.style.cursor = "pointer";
}

function PauseButtonActive() {
  stopwatchStartButton.disabled = false;
  stopwatchPauseButton.disabled = true;
  stopwatchPauseButton.style.cursor = "default";
  stopwatchStartButton.style.cursor = "pointer";
}

function ResetButtonAcitve() {
  stopwatchStartButton.disabled = false;
  stopwatchPauseButton.disabled = false;
  stopwatchPauseButton.style.cursor = "pointer";
  stopwatchStartButton.style.cursor = "pointer";
}
