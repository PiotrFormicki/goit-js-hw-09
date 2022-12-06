import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const body = document.querySelector('body');
const button = document.querySelector('button');
const container = document.querySelector('.timer');

const divField = container.getElementsByClassName('field');
const dateTime = document.getElementById('datetime-picker');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours');
const dataMinutes = document.querySelector('span[data-minutes');
const dataSec = document.querySelector('span[data-seconds]');
const stopButton = document.getElementById('close');
const backgroundButton = document.querySelector('.background-button');
let dateInMs = 0;
let interval = null;
button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    clearInterval(interval);
    let userDate = selectedDates[0].getTime();
    let currentDate = options.defaultDate.getTime();
    dateInMs = userDate - currentDate;
    //Jeśli użytkownik wybrał datę z przeszłości,
    //pokaż window.alert() o treści "Please choose a date in the future".
    if (userDate < currentDate) {
      Notiflix.Notify.init({
        fontSize: '2rem',
        width: '30vw',
        borderRadius: '8px',
        position: 'center-center',
        fontAwesomeIconSize: '2rem',
        clickToClose: true,
      });
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      button.disabled = false;
    }
  },
};
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
function addLeadingZero(value) {
  if (value.length < 2) {
    return value.padStart(2, '0');
  }
  return value;
}
const startCounter = () => {
  button.disabled = true;
  stopButton.disabled = false;
  console.log(`Counter started!`);
  interval = setInterval(() => {
    let date = convertMs(dateInMs);
    const { days, hours, minutes, seconds } = date;
    dataDays.textContent = addLeadingZero(days.toString());
    dataHours.textContent = addLeadingZero(hours.toString());
    dataMinutes.textContent = addLeadingZero(minutes.toString());
    dataSec.textContent = addLeadingZero(seconds.toString());
    dateInMs -= 1000;
    if (dateInMs <= 0) {
      clearInterval(interval);
    }
  }, 1000);
};
flatpickr(dateTime, options);
button.addEventListener('click', startCounter);
stopButton.addEventListener('click', () => {
  clearInterval(interval);
  button.disabled = false;
  stopButton.disabled = true;
});

//
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const changeBgroundColor = () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
};
backgroundButton.addEventListener('click', changeBgroundColor);
