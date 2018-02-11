let breakLength = 5;
let sessionLength = 25;

let startTime;
let currentTime;

const brkD = document.getElementById('break-down');
const brkU = document.getElementById('break-up');
const sesD = document.getElementById('session-down');
const sesU = document.getElementById('session-up');

const sS = document.getElementById('start-stop');
const rst = document.getElementById('reset');

const breakDisp = document.getElementById('break-input');
const sessionDisp = document.getElementById('time-input');

brkU.addEventListener("click", () => {
  breakLength += 5;
  displayNum(breakDisp, breakLength);
});
brkD.addEventListener("click", () => {
  if (breakLength > 5) {
    breakLength -= 5;
  }
  displayNum(breakDisp, breakLength);
});
sesU.addEventListener("click", () => {
  sessionLength += 5;
  displayNum(sessionDisp, sessionLength);
});
sesD.addEventListener("click", () => {
  if (sessionLength > 5) {
    sessionLength -= 5;
  }
  displayNum(sessionDisp, sessionLength);
});

sS.addEventListener("click", () => {
  startTime = Date.now();
  setInterval(timerGo, 1000);
});
// rst.addEventListener("click", () => {
//   reset();
// });

function displayNum(select, val) {
  select.textContent = val;
}

function startStop() {
  // if (timerState === false) {
  //   // Start timer
  //   startTime = Date.now();
  //   setInterval(timerGo, 1000);
  // } else if (timerState === true) {
  //   // Pause timer
  // }
}

function reset() {
  console.log('reset');
}

function timerGo() {
  currentTime = Date.now();
  console.log(Math.floor((currentTime - startTime)/1000));
}
