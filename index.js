function digitalClock() {
  let currDate = new Date();
  let hour = currDate.getHours();
  let minute = currDate.getMinutes();
  let second = currDate.getSeconds();

  document.getElementById('hour').innerHTML = hour;
  document.getElementById('minute').innerHTML = minute;
  document.getElementById('second').innerHTML = second;
}

setInterval(digitalClock, 1000);
