import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ cssAnimationStyle: 'from-top', fontAwesomeIconStyle: 'shadow' });

const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
};

refs.formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let delay = +refs.delayEl.value;
  let step = +refs.stepEl.value;
  let amount = +refs.amountEl.value;

  for (let i = 1; i <= amount; i++) {
    const steps = delay + step * (i - 1);
    createPromise(i, steps).then(onSuccess).catch(onError);
  }
  refs.formEl.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
