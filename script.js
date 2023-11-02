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
    if (computer == 'scissors' && player == 'rock') {
        console.log("Player wins! Rock beats scissors!")
        return playerWins++}
    else if (computer == 'scissors' && player =='paper') {
        console.log("Computer wins! Scissors beat paper.")
        return computerWins++}
    else if (computer == 'paper' && player == 'rock') {
        console.log('Computer wins! Paper beats rock.')
        return computerWins++}
    else if (computer == 'paper' && player == 'scissors') {
        console.log('Player wins! Scissors beat paper.')
        return playerWins++}
    else if (computer = player) {
        console.log("It's a tie!")
        return}
}

function game() {
    playerWins = 0
    computerWins = 0
    for (let i=1; i<=5; i++) {
        playRound()
        if (computerWins == 3 ) {return "Game Over! Computer wins!"}
        else if (playerWins == 3 ) {return ("Game over! Player Wins!")}
        else if (i==5) {return "It's a tie!"}
    }
}