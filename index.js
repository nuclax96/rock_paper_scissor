// 0 - Rock ,1-paper, 2 - Scissor
let computerChoiceInt = 0;

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
};

let count = 5;
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  let winner;

  if (player === computer) {
    return "draw";
  }
  if (player === "Rock") {
    if (computer === "scissor") {
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
      player++;
    } else if (computer === "Scissor") {
      winner = "Computer";
      computerScore++;
    }
  }
  if (player === "Scissor") {
    if (computer === "Paper") {
      winner = "Player";
      player++;
    } else if (computer === "Rock") {
      winner = "Computer";
      computerScore++;
    }
  }

  return winner;
};

const getPlayerChoice = () => {
  console.log("Enter your choice");
  let playerChoice = Number(prompt("Enter 0 - Rock , 1-Paper , 2-Scissor"));
  let playerChoiceText = assignChoice(playerChoice);

  console.log(computerChoiceText, playerChoiceText);
  let getWinner = checkWinner(playerChoiceText, computerChoiceText);

  console.log("Winner", getWinner);
  if (computerChoiceText === playerChoiceText) {
    console.log("draw");
    playerScore++;
    computerScore++;
    return;
  }
  if (playerScore === 3 || computerScore === 3) {
    if (playerScore > computerScore) {
      console.log("Player wins");
    } else {
      console.log("Computer Wins");
    }
    return;
  }
};
for (i = 0; i < 5; i++) {
  getComputerChoice();

  getPlayerChoice();
}
