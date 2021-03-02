"use strict";
const first = document.querySelector(".first");
const ruleBtn = document.querySelector(".rule-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closed = document.querySelector(".close");
const second = document.querySelector(".second");
const yourIcon = document.querySelector(".your_icon");
const computerIcon = document.querySelector(".your_icon");
const house = document.querySelector(".house");
const middle = document.querySelector(".middle");
const middleHead = document.querySelector(".middle_head");
const middleBtn = document.querySelector(".middle_button");
const scoreNo = document.querySelector(".score_no");

let score = 0;
const availableNames = ["spock", "lizard", "scissors", "rock", "paper"];
//reveal rules
const revealModal = function () {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
};
ruleBtn.addEventListener("click", revealModal);
closed.addEventListener("click", revealModal);
overlay.addEventListener("click", revealModal);

//
const compareNames = function name(name, computerName) {
  if (name == computerName) {
    const message = "you draw";
    return message;
  } else if (name == "scissors" && computerName == "paper") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else if (name == "paper" && computerName == "rock") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else if (name == "rock" && computerName == "lizard") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else if (name == "lizard" && computerName == "spock") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else if (name == "spock" && computerName == "scissors") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else if (name == "paper" && computerName == "spock") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else if (name == "scissors" && computerName == "lizard") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else if (name == "spock" && computerName == "rock") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else if (name == "lizard" && computerName == "paper") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else if (name == "rock" && computerName == "scissors") {
    const message = "you win";
    score += 1;
    console.log(score);
    return message;
  } else {
    const message = "you lose";
    if (score == 0) score = 0;
    else score -= 1;
    return message;
  }
};
getLocalStorage();

first.addEventListener("click", function (e) {
  if (!e.target.closest("div[data-name]")) return;
  const data = e.target.closest("div[data-name]");
  const content = data.querySelector("img");
  const { name } = data.dataset;
  const computerName =
    availableNames[Math.floor(Math.random() * availableNames.length)];
  console.log(name, computerName);
  first.style.display = "none";
  second.style.display = "flex";
  yourIcon.innerHTML = "";
  yourIcon.classList.replace("scissors_color", `${name}_color`);
  yourIcon.insertAdjacentElement("afterbegin", content);
  setTimeout(() => {
    const html = `
    <h4>the house picked</h4>
       <div class="second_icons computer_icon ${computerName}_color">
        <img src="images/icon-${computerName}.svg" alt="spock icon" />
      </div>`;
    house.innerHTML = "";
    house.insertAdjacentHTML("afterbegin", html);
    middle.style.display = "flex";
    middleHead.textContent = compareNames(name, computerName);
    console.log(score);
    scoreNo.textContent = score;
    localStorage.setItem("score", JSON.stringify(score));
  }, 1000);
});

middleBtn.addEventListener("click", function () {
  location.reload();
});
function getLocalStorage() {
  const local = JSON.parse(localStorage.getItem("score"));
  if (!local) return;
  score = local;
  scoreNo.textContent = score;
}
