"use-strict";

let gameStarted = false;
const btnStart = document.querySelector(".start-game");
const btnReset = document.querySelector(".reset-game");
const scorePlayerbtn = document.querySelector(".score-player");
const scoreComputerbtn = document.querySelector(".score-computer");
const imgContainer = document.querySelector(".img-rps");
const heading = document.querySelector(".h1-heading");
const currWinnerEl = document.querySelector(".current-winner");
let count = 5;
let playerScore = 0;
let computerScore = 0;
let computerChoiceInt = 0;

// 0 - Rock ,1-paper, 2 - Scissor

const assignChoice = (value) => {
  let assignedChoice;
  switch (value) {
    case 0:
      assignedChoice = "Rock";
      break;
    case 1:
      assignedChoice = "Paper";
      break;
    case 2:
      assignedChoice = "Scissor";
      break;
  }

  return assignedChoice;
};

const getComputerChoice = () => {
  computerChoiceInt = Math.floor((Math.random() * 10) % 3);
  computerChoiceText = assignChoice(computerChoiceInt);
  return computerChoiceText;
};

const checkWinner = (player, computer) => {
  let winner;

  if (player === computer) {
    return "draw";
  }
  if (player === "Rock") {
    if (computer === "Scissor") {
      winner = "Player";
      playerScore++;
    } else if (computer === "Paper") {
      winner = "Computer";
      computerScore++;
    }
  }
  if (player === "Paper") {
    if (computer === "Rock") {
      winner = "Player";
      playerScore++;
    } else if (computer === "Scissor") {
      winner = "Computer";
      computerScore++;
    }
  }
  if (player === "Scissor") {
    if (computer === "Paper") {
      winner = "Player";
      playerScore++;
    } else if (computer === "Rock") {
      winner = "Computer";
      computerScore++;
    }
  }

  return winner;
};

// const getPlayerChoice = (selectedValue,computer) => {
//   // console.log("Enter your choice");
//   let playerChoice = selectedValue;
//   let playerChoiceText = assignChoice(playerChoice);

//   // console.log(computerChoiceText, playerChoiceText);
//   let getWinner = checkWinner(playerChoiceText, computerChoiceText);

//   // console.log("Winner", getWinner);
//   if (computerChoiceText === playerChoiceText) {
//     // console.log("draw");
//     playerScore++;
//     computerScore++;
//     return;
//   }
//   if (playerScore === 5 || computerScore === 5) {
//     if (playerScore > computerScore) {
//       console.log("Player wins");
//     } else {
//       console.log("Computer Wins");
//     }
//     return;
//   }
// };

const gameStart = (event) => {
  // console.log("Game Start");
  gameStarted = true;
  // const startText = document.createElement("p");
  // const textNode = document.createTextNode("Select your choice");

  // while (!(playerScore === 5 || computerScore === 5)) {
  //   startText.appendChild(textNode);
  //   startText.style.display = "block";
  //   heading.appendChild(startText);
  // }
};

const resetGame = (e) => {
  playerScore = 0;
  computerScore = 0;
  scoreComputerbtn.innerHTML = computerScore;
  scorePlayerbtn.innerHTML = playerScore;

  currWinnerEl.innerHTML = "  ";
};
btnStart.addEventListener("click", gameStart);

imgContainer.addEventListener("click", (e) => {
  if (gameStarted === true) {
    let playerChoice = e.target.dataset.type;
    let computerChoice = getComputerChoice();
    const currentRoundWinner = checkWinner(playerChoice, computerChoice);
    currWinnerEl.innerHTML = "  " + currentRoundWinner;
    console.log(playerChoice, computerChoice);
    console.log(playerScore, computerScore);
    scoreComputerbtn.innerHTML = computerScore;
    scorePlayerbtn.innerHTML = playerScore;
    if (playerScore == 5 || computerScore == 5) {
      console.log("Winner:", playerScore == 5 ? "Player" : "Computer");
      resetGame();
    }
  }
});

btnReset.addEventListener("click", resetGame);
