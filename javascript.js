
// Function that extracts a random choice of rock, paper, or scissors
function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 100)
    return numberChoice
}
console.log(getComputerChoice())