const startButtonEl = document.querySelector(`[data-start]`);
const stopButtonEl = document.querySelector(`[data-stop]`);
const bodyEl = document.querySelector('body');

let timerId = null;

startButtonEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
});

stopButtonEl.addEventListener('click', () => {
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
