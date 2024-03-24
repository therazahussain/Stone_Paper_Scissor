let yourAnsOptions = document.querySelectorAll(".optionContainer");
let winMessage = document.querySelector(".button");
let yourCounterBox = document.querySelector(".yourCounter");
let yourCounterMessage = document.querySelector(".yourTagName");
let compCounterBox = document.querySelector(".computerCounter");
let compCounterMessage = document.querySelector(".compTagName");
let resetButton = document.querySelector(".reset");

let yourWinCount = 0;
let compWinCount = 0;
let comp_ans_option = ["rock", "paper", "scissor"];

const disableButtons = () => {
  for (let option of yourAnsOptions) {
    option.disabled = true;
  }
};

const enableButtons = () => {
  for (let option of yourAnsOptions) {
    option.disabled = false;
  }
};

const youWinRound = () => {
  yourWinCount++;
  let count = yourWinCount;
  yourCounterBox.innerText = count;
  winMessage.style = "background-color:#A5DD9B";
  winMessage.innerText = "You Win this Round";

  yourCounterBox.style = "border:2px solid #A5DD9B; color:#A5DD9B";
  yourCounterMessage.style.color = "#A5DD9B";

  compCounterBox.style = "border:2px solid red; color:red";
  compCounterMessage.style.color = "red";

  setTimeout(() => {
    for (let option of yourAnsOptions) {
      option.style = "border-color: #fff";
    }
    winMessage.innerText = "Pick Your Move";
    winMessage.style = "background-color:#000";

    yourCounterBox.style = "border:2px solid #d9d9d9; color:#000";
    yourCounterMessage.style.color = "#000";

    compCounterBox.style = "border:2px solid #d9d9d9; color:#000";
    compCounterMessage.style.color = "#000";
    enableButtons();
  }, 1500);
};

const compWinRound = () => {
  compWinCount++;
  compCounterBox.innerText = compWinCount;
  winMessage.style = "background-color:red";
  winMessage.innerText = "Oops, Computer Win this Round";

  compCounterBox.style = "border:2px solid #A5DD9B; color:#A5DD9B";
  compCounterMessage.style.color = "#A5DD9B";

  yourCounterBox.style = "border:2px solid red; color:red";
  yourCounterMessage.style.color = "red";

  setTimeout(() => {
    for (let option of yourAnsOptions) {
      option.style = "border-color: #fff";
    }
    winMessage.innerText = "Pick Your Move";
    winMessage.style = "background-color:#000";

    yourCounterBox.style = "border:2px solid #d9d9d9; color:#000";
    yourCounterMessage.style.color = "#000";

    compCounterBox.style = "border:2px solid #d9d9d9; color:#000";
    compCounterMessage.style.color = "#000";
    enableButtons();
  }, 1500);
};

const checkWinner = (yourAns, compAns) => {
  // if both the user and comp have selected the same ans
  if (compAns === yourAns) {
    winMessage.innerText = "Draw";
    setTimeout(() => {
      winMessage.innerText = "Pick Your Move";
      enableButtons();
    }, 1500);
  } else {
    // if comp selected paper
    if (compAns === "paper" && yourAns === "scissor") {
      yourAnsOptions[2].style = "border-color:#A5dd98";
      yourAnsOptions[1].style = "border-color:red";
      youWinRound();
    }
    if (compAns === "paper" && yourAns === "rock") {
      yourAnsOptions[0].style = "border-color: red";
      yourAnsOptions[1].style = "border-color:#a5dd98";
      compWinRound();
    }
    if (compAns === "rock" && yourAns === "scissor") {
      yourAnsOptions[2].style = "border-color: red";
      yourAnsOptions[0].style = "border-color:#A5dd98";
      compWinRound();
    }
    if (compAns === "rock" && yourAns === "paper") {
      yourAnsOptions[1].style = "border-color: #A5dd98";
      yourAnsOptions[0].style = "border-color:red";
      youWinRound();
    }
    if (compAns === "scissor" && yourAns === "paper") {
      yourAnsOptions[2].style = "border-color: #A5dd98";
      yourAnsOptions[1].style = "border-color:red";
      compWinRound();
    }
    if (compAns === "scissor" && yourAns === "rock") {
      yourAnsOptions[2].style = "border-color: red";
      yourAnsOptions[0].style = "border-color: #A5dd98";
      youWinRound();
    }
  }
};

for (let yourSelectedOption of yourAnsOptions) {
  yourSelectedOption.addEventListener("click", () => {
    disableButtons();
    let compAnsIndex = Math.floor(Math.random() * 3);
    let yourAns = yourSelectedOption.getAttribute("value");
    let compAns = comp_ans_option[compAnsIndex];

    checkWinner(yourAns, compAns);
  });
}

resetButton.addEventListener("click", () => {
  yourWinCount = 0;
  compWinCount = 0;
  yourCounterBox.innerText = 0;
  compCounterBox.innerText = 0;

  winMessage.innerText = "Pick Your Move";
  winMessage.style = "background-color:#000";

  yourCounterBox.style = "border:2px solid #d9d9d9; color:#000";
  yourCounterMessage.style.color = "#000";

  compCounterBox.style = "border:2px solid #d9d9d9; color:#000";
  compCounterMessage.style.color = "#000";
  enableButtons();
});
