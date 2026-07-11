
// Function that extracts a random choice of rock, paper, or scissors
function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    if (number > 66) {
        return "Rock"
    } else if (number > 33) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
console.log(getComputerChoice());

// Get input from user and return choice of rock, paper, or scissors
function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    if (typeof userInput === "string") {
        userInput = userInput.trim().toLowerCase()
    }
    switch (userInput) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors"
        default:
            return null
    }
}
console.log(getHumanChoice());