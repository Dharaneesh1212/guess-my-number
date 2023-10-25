const againButtonEl = document.getElementById("again-button");
const guessingEl = document.getElementById("guessing");
const checkBoxEl = document.getElementById("check-box");
const checkButtonEl = document.getElementById("check-button");
const messageEl = document.getElementById("message");
const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("high-score");

let score = 10;

const getRandomNumber = function () {
  return Math.trunc(Math.random() * 100 + 1);
};

const randomNumber = getRandomNumber();

checkButtonEl.addEventListener("click", function () {
  const userInput = Number(checkBoxEl.value);

  if (userInput > 0 && userInput <= 100) {
    if (score > 0) {
      if (userInput === randomNumber) {
        document.body.style.backgroundColor = "green";
        guessingEl.innerText = randomNumber;
        messageEl, (innerText = "You win");
        highScoreEl.innerText = score;
      } else if (userInput > randomNumber) {
        messageEl.innerText = "Your value is high";
        score = score - 1;
        scoreEl.innerText = score;
      } else if (userInput < randomNumber) {
        messageEl.innerText = "Your value is low";
        score -= 1;
        scoreEl.innerText = score;
      }
    } else {
      messageEl.innerText = "You lost";
      document.body.style.backgroundColor = "red";
      scoreEl.innerText = score;
    }
  } else {
    console.log(`enter a valid number`);
  }
});

againButtonEl.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  messageEl.innerText = "start the game";
  scoreEl.innerText = 10;
  checkBoxEl.value = "";
  guessingEl.innerText = "";
});
