
// Function that extracts a random choice of rock, paper, or scissors
function getComputerChoice() {
    let number = Math.floor(Math.random() * 100)
    let computerChoice = undefined
    if (number > 66) {
        computerChoice = "Rock"
    } else if (number > 33) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice
}
console.log(getComputerChoice())