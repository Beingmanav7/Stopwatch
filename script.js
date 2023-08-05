let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.querySelector('.display');
const startStopBtn = document.querySelector('.startStop');
const resetBtn = document.querySelector('.reset');

function startStop() {
  if (running) {
    clearInterval(timer);
    running = false;
    startStopBtn.textContent = 'Start';
  } else {
    timer = setInterval(updateTime, 1000);
    running = true;
    startStopBtn.textContent = 'Stop';
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.textContent = '00:00:00';
  startStopBtn.textContent = 'Start';
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  display.textContent = formattedTime;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);



