

// Game stat initialization
let round = 1
let humanScore = 0;
let computerScore = 0;


// Round logic
function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case (computerChoice):
      roundResult = "Tied!";
      break;
    case ("rock"):
      if (computerChoice === "paper") {
        ++computerScore;
        roundResult = "You lost! Paper beats Rock.";
      } else if (computerChoice === "scissors") {
        ++humanScore;
        roundResult = "You won! Rock beats Scissors.";
      }
      break;
    case ("paper"):
      if (computerChoice === "rock") {
        ++humanScore;
        roundResult = "You won! Paper beats Rock.";
      } else if (computerChoice === "Scissors") {
        ++computerScore;
        roundResult = "You lost! Scissors beats Paper.";
      }
      break;
    case ("scissors"):
      if (computerChoice === "rock") {
        ++computerScore;
        roundResult = "You lost! Rock beats Scissors.";
      } else if (computerChoice === "paper") {
        ++humanScore;
        roundResult = "You won! Scissors beats Paper.";
      }
      break;
    default:
      ++computerScore;
      roundResult = "You lost! Please enter a valid option.";
  }
  return roundResult
}


// Computer selects from Rock / Paper / Scissors
function getComputerChoice() {
  const number = Math.floor(Math.random() * 100);
  if (number > 66) { 
    return "rock" 
  } else if (number > 33) { 
    return "paper" 
  } else { 
    return "scissors" }
}


// Round end message TO BE FIXED
function gameResult() {
  if (humanScore > computerScore) {
    return "--- You win! ---";
  } else {
    return "--- You lost! ---";
  }
}


const options = document.getElementById("options");
options.addEventListener("click", function(event) {
  const target = event.target;
  if (target.tagName !== "BUTTON") return;

  const playerChoice = target.id,
        computerChoice = getComputerChoice(),
        roundResult = playRound(playerChoice, computerChoice);

  const panel = document.getElementById("panel"),
        start = document.getElementById("start");
  if (start) {
    const roundSummary = document.createElement("div"),
          plyMove = document.createElement("p"),
          comMove = document.createElement("p"),
          results = document.createElement("h2"),
          plyScore = document.createElement("p"),
          comScore = document.createElement("p");
    roundSummary.setAttribute("id", "summary")
    plyMove.setAttribute("id", "player-move")
    comMove.setAttribute("id", "computer-move")
    results.setAttribute("id", "results")
    plyScore.setAttribute("id", "player-score")
    comScore.setAttribute("id", "computer-score")
    roundSummary.appendChild(plyMove)
    roundSummary.appendChild(comMove)
    roundSummary.appendChild(results)
    roundSummary.appendChild(plyScore)
    roundSummary.appendChild(comScore)
    panel.insertBefore(roundSummary, start)
    panel.removeChild(start)
  }

  

});