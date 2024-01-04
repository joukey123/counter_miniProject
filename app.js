const buttons = document.querySelectorAll("#btns > div");
const counter = document.querySelector("#counter");
let counterNum = 0;

const btnClickEvent = (event) => {
  const btn = event.currentTarget.textContent;
  if (btn === "DECREASE") {
    counterNum--;
  }
  if (btn === "RESET") {
    counterNum = 0;
  }
  if (btn === "INCREASE") {
    counterNum++;
  }
  if (counterNum > 0) {
    counter.style.color = "red";
  } else if (counterNum < 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "black";
  }
  counter.textContent = counterNum;
};

buttons.forEach((button) => button.addEventListener("click", btnClickEvent));
