// Select Element

function updateClock() {
  const clockElement = document.getElementById("clock");

  const now = new Date();

  // get hours, minutes, seconds and milliseconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();

  // add leading zero if needed for hours, minutes, and seconds
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  clockElement.innerHTML = timeString;
}
setInterval(updateClock, 100);
updateClock();
