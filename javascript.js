
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

// Keep track of round and scores
let round = 1
let humanScore = 0;
let computerScore = 0;

// Round Logic
function playRound(humanChoice, computerChoice) {
  let roundMessage = `- Round ${round} -\nComputer: ${computerChoice}\nUser:     ${humanChoice}\n- Result -\n`;
  if (humanChoice === "Rock") {
    if (computerChoice === "Rock") {
      roundMessage += "Tied!"
    } else if (computerChoice === "Scissors") {
      ++humanScore
      roundMessage += "You won! Rock beats Scissors."
    } else if (computerChoice === "Paper") {
      ++computerScore
      roundMessage += "You lost! Paper beats Rock."
    }
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Paper") {
      roundMessage += "Tied!"
    } else if (computerChoice === "Rock") {
      ++humanScore
      roundMessage += "You won! Paper beats Rock."
    } else if (computerChoice === "Scissors") {
      ++computerScore
      roundMessage += "You lost! Scissors beats Paper."
    }
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Scissors") {
      roundMessage += "Tied!"
    } else if (computerChoice === "Paper") {
      ++humanScore
      roundMessage += "You won! Scissors beats Paper."
    } else if (computerChoice === "Rock") {
      ++computerScore
      roundMessage += "You lost! Rock beats Scissors."
    }
  } else {
    ++computerScore
    roundMessage += "You lost! Please enter a valid option."
  }
  let scoreMessage = `\n- Scores -\nComputer: ${computerScore}\nUser:     ${humanScore}`
  console.log(roundMessage + scoreMessage)
}

// Get result panel for game end
function gameResult() {
  if (humanScore === computerScore) {
    return "--- Tie game! ---"
  } else if (humanScore > computerScore) {
    return "--- You win! ---"
  } else {
    return "--- You lost! ---"
  }
}

// 5 rounds loop
function gameLoop() {
  for (round; round <= 5; ++round) 
    { playRound(getHumanChoice(), getComputerChoice()); }
  console.log(gameResult())
}


gameLoop();