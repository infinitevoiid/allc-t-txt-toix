// Change QR box color dynamically
/*function setQRBoxColor(color) {
  document.documentElement.style.setProperty('--box-color', color);
}

// Countdown timer starting from 59:59
let countdownSeconds = 59 * 60 + 59; // 59 mins 59 secs
const timerElement = document.getElementById('countdown');

function updateCountdown() {
  const mins = Math.floor(countdownSeconds / 60);
  const secs = countdownSeconds % 60;

  timerElement.textContent = `Expires in ${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;

  if (countdownSeconds > 0) {
    countdownSeconds--;
  } else {
    clearInterval(timerInterval); // stop at 00:00
  }
}

// update every 1 second
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call
*/


function setQRBoxColor(color) {
  document.documentElement.style.setProperty('--box-color', color);
}

// Countdown timer starting from 59:59
let countdownSeconds = 59 * 60 + 59; // 59 mins 59 secs
const timerElement = document.getElementById('countdown');

// ⭐ Progress bar setup
const totalTime = countdownSeconds; 
const progressFill = document.querySelector(".progress-fill");

function updateCountdown() {
  const mins = Math.floor(countdownSeconds / 60);
  const secs = countdownSeconds % 60;

  // Text update
  timerElement.textContent = `Expires in ${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;

  // ⭐ Progress bar fill update
  const percent = ((totalTime - countdownSeconds) / totalTime) * 100;
  progressFill.style.width = percent + "%";

  if (countdownSeconds > 0) {
    countdownSeconds--;
  } else {
    clearInterval(timerInterval); // stop at 00:00
  }
}

// update every 1 second
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call