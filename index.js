let timerId;
// to upade the clock
function update() {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}
// to start the class

function clockStart() {
  timerId = setInterval(update, 1000);
  // don't wait to update the time,
  update();
}
// to stop the
function clockStop() {
  clearInterval(timerId);
}
// by default start it
clockStart();
