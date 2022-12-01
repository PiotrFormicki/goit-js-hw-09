const onButton = document.querySelector('button[data-start]');
const offButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
let counter;
offButton.disabled = true;
console.log('Current background color is ', body.style.backgroundColor);
const newColor = () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  counter = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  onButton.disabled = true;
  offButton.disabled = false;
};
onButton.addEventListener('click', newColor);

const stopGettingNewColor = () => {
  clearInterval(counter);
  onButton.disabled = false;
  offButton.disabled = true;
  console.log('Your current color is:', body.style.backgroundColor);
};
offButton.addEventListener('click', stopGettingNewColor);
