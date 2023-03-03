//set current date
const date = new Date();

const dayOtions = {weekday: 'long'};
const day = date.toLocaleDateString('en-us', dayOtions);
document.querySelector('.day').innerHTML = day + ',';

const monthOptions = {month: 'long'}; 
const month = date.toLocaleDateString('en-us', monthOptions);
document.querySelector('.month').innerHTML = month;

const year = date.getFullYear();
document.querySelector('.year').innerHTML = year;