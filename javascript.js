let humanScore = 0
let computerScore = 0
function getHumanChoice() {
    var humanChoice = Number(prompt("Type a number from 0 = Rock,1 = Scissor,2 = paper"));
    if (humanChoice == 0) {
    console.log("Rock");
  } else if (humanChoice == 1) {
   console.log("Scissor");
  } else {
    console.log("paper");
  }
    return humanChoice;
}
function getComputerChoice() {
  let ComputerChoice = Math.floor(Math.random() * 3);
  if (ComputerChoice == 0) {
    console.log("Rock");
  } else if (ComputerChoice == 1) {
   console.log("Scissor");
  } else {
    console.log("paper");
  }
  return ComputerChoice;
}
function playRound(humanChoice, computerChoice) {
  if (computerChoice == humanChoice) {
    console.log("It is draw");
  } else if (computerChoice == 0 && humanChoice == 1) {
   console.log("You lose!");
    computerScore++;
  } else if(computerChoice == 0 && humanChoice == 2){
    console.log("You won!");
    humanScore++;
  } else if(computerChoice == 1 && humanChoice == 0){
    console.log("You won!");
    humanScore++;
    } else if(computerChoice == 1 && humanChoice == 2){
    console.log("You lose!");
    computerScore++;
  }
  else if(computerChoice == 2 && humanChoice == 0){
    console.log("You lose!");
    computerScore++;
  }
  else {
    console.log("You won!");
    humanScore++;
  }
  return computerChoice;
} 

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}
if(humanScore > computerScore){
    console.log(`Congrats! You beat a computer! Your score: ${humanScore} - Computer Score: ${computerScore}`);
    }
else if(humanScore < computerScore){
    console.log(`Did you just lose from a computer! Your score: ${humanScore} - Computer Score: ${computerScore}`);
    }
else{
    console.log(`It's a tie! Your score: ${humanScore} - Computer Score: ${computerScore}`)
}
}

playGame();