const startButtonEl = document.querySelector(`[data-start]`);
const stopButtonEl = document.querySelector(`[data-stop]`);
const bodyEl = document.querySelector('body');

let timerId = null;

stopButtonEl.disabled = true;
// console.dir(stopButtonEl);

startButtonEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
});

stopButtonEl.addEventListener('click', () => {
  clearInterval(timerId);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
