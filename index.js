function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

function showTime() {
    const now = new Date();
    const second = addZero(now.getSeconds());
    const minute = addZero(now.getMinutes());
    const hour = addZero(now.getHours());

    const secRotationDegree = ((second/60) * 360) + 90;
    document.querySelector(".seconds").style.transform = `rotate(${secRotationDegree}deg)`;

    const minRotationDegree = ((minute/60) * 360) + ((second / 60) * 6) + 90;
    document.querySelector(".minutes").style.transform = `rotate(${minRotationDegree}deg)`;

    const hourRotationDegree = ((hour/12) * 360) + ((minute / 60) * 30) + 90;
    document.querySelector(".hours").style.transform = `rotate(${hourRotationDegree}deg)`;

    document.querySelector(".time").innerHTML = hour + " : " + minute + " : " + second;
}

setInterval(showTime, 1000);

showTime();