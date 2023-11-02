function getComputerChoice() {
    let computerChoice = Math.random() * 10
    if (computerChoice <= 3.33) {return computerChoice="rock"}
    else if (computerChoice <=6.66) {return computerChoice="paper"}
    else if (computerChoice <= 10) {return computerChoice="scissors"}
}

function getPlayerChoice() {
    playerChoice = prompt("Make your choice!");
    if (playerChoice.toLowerCase()== "rock") {return "rock"}
    else if (playerChoice.toLowerCase()== "paper") {return "paper"}
    else if (playerChoice.toLowerCase()== "scissors") {return "scissors"}
    else {return getPlayerChoice()}
}

function playRound() {
    let computer = getComputerChoice();
    let player = getPlayerChoice();
    
}