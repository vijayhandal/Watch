const body = document.querySelector("body"),
  hour  = document.querySelector(".hour"),
  minute  = document.querySelector(".minute"),
  second  = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");


const updateTime = () => {
    let date = new Date(),
      sec = (-date.getSeconds() / 60) * 360,
      min = (-date.getMinutes() / 60) * 360,
      hr = (-date.getHours() / 12) * 360;
    second.style.transform = `rotate(${sec}deg)`;
    minute.style.transform = `rotate(${min}deg)`;
    hour.style.transform = `rotate(${hr}deg)`;
  };
  setInterval(updateTime, 1000);
  updateTime();