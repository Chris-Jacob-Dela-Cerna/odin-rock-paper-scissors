
// Function that extracts a random choice of rock, paper, or scissors
function getComputerChoice() {
  let number = Math.floor(Math.random() * 100);
  if (number > 66) 
    { return "Rock" } 
  else if (number > 33) 
    { return "Paper" } 
  else 
    { return "Scissors" }
}

// Get input from user and return choice of rock, paper, or scissors
function getHumanChoice() {
  let userInput = prompt("Rock, Paper, or Scissors?");
  if (typeof userInput === "string") 
    { userInput = userInput.trim().toLowerCase() }
  switch (userInput) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    default:
      return null;
    }
}

// Keep track of scores
let humanScore = 0;
let computerScore = 0;

// Round Logic
function playRound(humanChoice, computerChoice) {
  let round = `Computer: ${computerChoice}\nUser: ${humanChoice}\n`
  if (humanChoice === "Rock") {
    if (computerChoice === "Rock") {
      round += "Tied!"
    } else if (computerChoice === "Scissors") {
      round += "You won! Rock beats Scissors."
    } else if (computerChoice === "Paper") {
      round += "You lost! Paper beats Rock."
    }
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Paper") {
      round += "Tied!"
    } else if (computerChoice === "Rock") {
      round += "You won! Paper beats Rock."
    } else if (computerChoice === "Scissors") {
      round += "You lost! Scissors beats Paper."
    }
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Scissors") {
      round += "Tied!"
    } else if (computerChoice === "Paper") {
      round += "You won! Scissors beats Paper."
    } else if (computerChoice === "Rock") {
      round += "You lost! Rock beats Scissors."
    }
  } else {
    round += "You lost! Please enter a valid option."
  }
  console.log(round)
}

// Convert functions into variables
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();


playRound(humanSelection, computerSelection);