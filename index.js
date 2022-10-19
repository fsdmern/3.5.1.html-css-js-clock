function digitalClock() {
  let currDate = new Date();
  let hour = currDate.getHours();
  let minute = currDate.getMinutes();
  let second = currDate.getSeconds();
  let ampm = 'AM';

  //Prefix zero when time in single digit
  //Covert to 12 hour format when hour > 12 and assign AM/PM
  if (hour > 12) {
    hour = hour - 12;
    ampm = 'PM';
  }

  //Add zero before time unit using function check
  hour = padZero(hour);
  minute = padZero(minute);
  second = padZero(second);

  //Insert Time Variable into HTML Elements
  document.getElementById('hour').innerHTML = hour;
  document.getElementById('minute').innerHTML = minute;
  document.getElementById('second').innerHTML = second;
  document.getElementById('ampm').innerHTML = ampm;
}

// add zero in front of numbers < 10
function padZero(time) {
  if (time < 10) {
    time = '0' + time;
  }
  return time;
}

setInterval(digitalClock, 1000);
