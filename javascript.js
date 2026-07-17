

// Computer selects from Rock / Paper / Scissors
function getComputerChoice() {
  let number = Math.floor(Math.random() * 100);
  if (number > 66) { 
    return "Rock" 
  } else if (number > 33) { 
    return "Paper" 
  } else { 
    return "Scissors" }
}


// Game stat initialization
let round = 1
let humanScore = 0;
let computerScore = 0;


// Round logic
function playRound(humanChoice, computerChoice) {
  let roundMessage = `- Round ${round} -\nComputer: ${computerChoice}\nUser:     ${humanChoice}\n- Result -\n`;
  if (humanChoice === "Rock") {
    if (computerChoice === "Rock") {
      roundMessage += "Tied!";
    } else if (computerChoice === "Scissors") {
      ++humanScore;
      roundMessage += "You won! Rock beats Scissors.";
    } else if (computerChoice === "Paper") {
      ++computerScore;
      roundMessage += "You lost! Paper beats Rock.";
    }
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Paper") {
      roundMessage += "Tied!";
    } else if (computerChoice === "Rock") {
      ++humanScore;
      roundMessage += "You won! Paper beats Rock.";
    } else if (computerChoice === "Scissors") {
      ++computerScore;
      roundMessage += "You lost! Scissors beats Paper.";
    }
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Scissors") {
      roundMessage += "Tied!";
    } else if (computerChoice === "Paper") {
      ++humanScore;
      roundMessage += "You won! Scissors beats Paper.";
    } else if (computerChoice === "Rock") {
      ++computerScore
      roundMessage += "You lost! Rock beats Scissors."
    }
  } else {
    ++computerScore;
    roundMessage += "You lost! Please enter a valid option.";
  }
  let scoreMessage = `\n- Scores -\nComputer: ${computerScore}\nUser:     ${humanScore}`;
  console.log(roundMessage + scoreMessage);
  round++
}


// Round end message
function gameResult() {
  if (humanScore === computerScore) {
    return "--- Tie game! ---";
  } else if (humanScore > computerScore) {
    return "--- You win! ---";
  } else {
    return "--- You lost! ---";
  }
}


const options = document.getElementById("options")
options.addEventListener("click", function(event) {
  switch (event.target.id) {
    case "rock":
      playRound("Rock", getComputerChoice())
      break
    case "paper":
      playRound("Paper", getComputerChoice())
      break
    case "scissors":
      playRound("Scissors", getComputerChoice())
      break
  }
});