import Notiflix from 'notiflix';
const setAmount = document.querySelector('input[name=amount]');
const step = document.querySelector('input[name=step]');
const delay = document.querySelector('input[name=delay]');
const form = document.querySelector('form.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay }); // Fulfill
      } else {
        reject({ position, delay }); // Reject
      }
    }, delay);
  });
  return promise;
}

const promisesGenerator = event => {
  event.preventDefault();
  let promisesValue;
  const setAmountValue = Number(setAmount.value);
  let stepValue = Number(step.value);
  let delayValue = Number(delay.value);
  for (let i = 0; i < setAmountValue; i++) {
    promisesValue = i + 1;
    createPromise(promisesValue, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayValue += stepValue;
  }
};
form.addEventListener('submit', promisesGenerator);
