
// Function that extracts a random choice of rock, paper, or scissors
function getComputerChoice() {
    let number = Math.floor(Math.random() * 100)
    if (number > 66) {
        return "Rock"
    } else if (number > 33) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
console.log(getComputerChoice())

// Get input from user and return choice of rock, paper, or scissors
function getHumanChoice() {
    userInput = prompt("Rock, Paper, or Scissors?")
    if (typeof userInput === "string") {
        userInput = userInput.trim().toLowerCase()
    }
    if (userInput === "rock") {
        return "Rock"
    } else if (userInput === "paper") {
        return "Paper"
    } else if (userInput === "scissors") {
        return "Scissors"
    } else {
        return "None"
    }
}
console.log(getHumanChoice())