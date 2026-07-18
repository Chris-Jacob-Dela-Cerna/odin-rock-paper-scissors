

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


function buildSummaryNodes(panel, start) {
  const roundSummary = document.createElement("div"),
        plyMove = document.createElement("p"),
        comMove = document.createElement("p"),
        result = document.createElement("h2"),
        plyScore = document.createElement("p"),
        comScore = document.createElement("p");
  roundSummary.setAttribute("id", "summary")
  plyMove.setAttribute("id", "player-move")
  comMove.setAttribute("id", "computer-move")
  result.setAttribute("id", "results")
  plyScore.setAttribute("id", "player-score")
  comScore.setAttribute("id", "computer-score")
  roundSummary.appendChild(plyMove)
  roundSummary.appendChild(comMove)
  roundSummary.appendChild(result)
  roundSummary.appendChild(plyScore)
  roundSummary.appendChild(comScore)
  panel.insertBefore(roundSummary, start)
  panel.removeChild(start)
}


const options = document.getElementById("options");
options.addEventListener("click", function(event) {
  const target = event.target;
  if (target.tagName !== "BUTTON") return;

  const playerChoice = target.id,
        computerChoice = getComputerChoice(),
        roundResult = playRound(playerChoice, computerChoice);
    
  const panel = document.getElementById("panel"),
        roundSummary = document.getElementById("summary"),
        options = document.getElementById("options");
  if (humanScore >= 5 || computerScore >= 5) {
    panel.removeChild(options)
    const restart = document.createElement("h2");
    restart.textContent = "Try again?"
    roundSummary.appendChild(restart)
    const restartBtn = document.createElement("button")
    restartBtn.textContent = "New Game"
    restartBtn.setAttribute("id", "restart")
    restartBtn.addEventListener("click", () => location.reload())
    roundSummary.appendChild(restartBtn)
  } 

  const start = document.getElementById("start");
  if (!roundSummary) buildSummaryNodes(panel, start);

  const plyMove = document.getElementById("player-move"),
        comMove = document.getElementById("computer-move"),
        result = document.getElementById("results"),
        plyScore = document.getElementById("player-score"),
        comScore = document.getElementById("computer-score");
  plyMove.textContent = `You: ${playerChoice}`
  comMove.textContent = `Bot: ${computerChoice}`
  result.textContent = roundResult
  plyScore.textContent = `You: ${humanScore}`
  comScore.textContent = `Bot: ${computerScore}`
});