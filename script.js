

//create a function to set the time

function setTime() {
    const d = new Date();
    //get current hour
    const currentHour = d.getHours();
    document.getElementById('hour').innerHTML = currentHour;

    //get current minutes
    const currentMinutes = d.getMinutes();
    document.getElementById('min').innerHTML = currentMinutes;

    //get current seconds
    const currentSeconds = d.getSeconds();
    document.getElementById('sec').innerHTML = currentSeconds;
}

//set intervals to update the time per sec
setInterval(setTime, 1000);

//analog clock
//grab the refrence using query selector
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//create the date function

function setAnalog() {
    const d = new Date();
    const seconds = d.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = d.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform=`rotate(${minutesDegrees}deg)`;

    const hours = d.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform=`rotate(${hoursDegrees}deg)`;
}
setInterval(setAnalog, 1000)
setAnalog()

//toggle dark  mode
function toggleMode() {
  
  const icon = document.querySelector('.material-symbols-outlined');
  const body = document.querySelector('body');
  const clock = document.querySelector('.clock');
  const btn = document.querySelector('.btn-switch');
  if (body.classList.contains('dark-mode')) {
    // Switch to light mode
    body.classList.remove('dark-mode');
    clock.classList.remove('dark-mode');
    btn.classList.remove('dark-mode')
    icon.innerHTML = 'dark_mode';
  } else {
    // Switch to dark mode
    body.classList.add('dark-mode');
    clock.classList.add('dark-mode');
    btn.classList.add('dark-mode')
    icon.innerHTML = 'light_mode';
  }
}


