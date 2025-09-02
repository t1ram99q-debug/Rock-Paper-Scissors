let humanScore = 0;
let computerScore = 0;
/*function getHumanChoice() {
  var humanChoice = Number(
    prompt("Type a number from 0 = Rock,1 = Scissor,2 = paper"),
  );
  if (humanChoice == 0) {
    console.log("Rock");
  } else if (humanChoice == 1) {
    console.log("Scissor");
  } else {
    console.log("paper");
  }
  return humanChoice;
}*/
function getComputerChoice() {
  let ComputerChoice = Math.floor(Math.random() * 3);
  if (ComputerChoice == 0) {
    return (ComputerChoice = "Rock");
  } else if (ComputerChoice == 1) {
    return (ComputerChoice = "Scissor");
  } else {
    return (ComputerChoice = "Paper");
  }
}
function playRound(humanChoice, ComputerChoice) {
  if (ComputerChoice == humanChoice) {
    document.getElementById("result").textContent = "It is draw";
  } else if (ComputerChoice == "Rock" && humanChoice == "Scissor") {
    document.getElementById("result").textContent = "You lose!";
    computerScore++;
  } else if (ComputerChoice == "Rock" && humanChoice == "Paper") {
    document.getElementById("result").textContent = "You won!";
    humanScore++;
  } else if (ComputerChoice == "Scissor" && humanChoice == "Rock") {
    document.getElementById("result").textContent = "You won!";
    humanScore++;
  } else if (ComputerChoice == "Scissor" && humanChoice == "Paper") {
    document.getElementById("result").textContent = "You lose!";
    computerScore++;
  } else if (ComputerChoice == "Paper" && humanChoice == "Rock") {
    document.getElementById("result").textContent = "You lose!";
    computerScore++;
  } else {
    document.getElementById("result").textContent = "You won!";
    humanScore++;
  }
  return ComputerChoice;
}

/* function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  if (humanScore > computerScore) {
    console.log(
      `Congrats! You beat a computer! Your score: ${humanScore} - Computer Score: ${computerScore}`,
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Did you just lose from a computer! Your score: ${humanScore} - Computer Score: ${computerScore}`,
    );
  } else {
    console.log(
      `It's a tie! Your score: ${humanScore} - Computer Score: ${computerScore}`,
    );
  }
}

playGame(); */

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    document.getElementById(
      "choice"
    ).textContent = `${humanChoice} V/S ${computerChoice}`;
    document.getElementById("Your-score").textContent =
      "Your Score: " + humanScore;
    document.getElementById("Bot-score").textContent =
      "Bot Score: " + computerScore;
  });
});
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  document.getElementById("choice").textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("Your-score").textContent = "Your Score: 0";
  document.getElementById("Bot-score").textContent = "Bot Score: 0";
});
