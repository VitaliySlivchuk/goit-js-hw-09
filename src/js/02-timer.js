// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  buttonEl: document.querySelector(`[data-start]`),
  daysEl: document.querySelector(`[data-days]`),
  hoursEl: document.querySelector(`[data-hours]`),
  minutesEl: document.querySelector(`[data-minutes]`),
  secondsEl: document.querySelector(`[data-seconds]`),
};

refs.buttonEl.addEventListener('click', timeToEndDate);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNow = new Date();
    const selectDate = selectedDates[0];
    if (selectDate <= dateNow) {
      Notify.failure('Please choose a date in the future');
      return;
    } else {
      Notify.success('The date is selected correctly press the button "Start"');
      refs.buttonEl.disabled = !true;
      initTimer();
    }
  },
};

let flOptions = flatpickr('#datetime-picker', options);
let intervalID = null;

refs.buttonEl.disabled = true;

function initTimer() {
  const dateDiference = flOptions.selectedDates[0] - Date.now();
  const { days, hours, minutes, seconds } = convertMs(dateDiference);
  refs.daysEl.textContent = addLeadingZero(days);
  refs.hoursEl.textContent = addLeadingZero(hours);
  refs.minutesEl.textContent = addLeadingZero(minutes);
  refs.secondsEl.textContent = addLeadingZero(seconds);
  if (seconds <= 0) {
    clearInterval(intervalID);
  }
}

function timeToEndDate() {
  intervalID = setInterval(() => {
    initTimer(), 1000;
  });
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
