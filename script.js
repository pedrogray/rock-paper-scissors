let playerWins = 0;
let computerWins = 0;
let games = 0;



function getComputerChoice() {
    let computerChoice = Math.random() * 10
    if (computerChoice <= 3.33) {return computerChoice="rock"}
    else if (computerChoice <=6.66) {return computerChoice="paper"}
    else if (computerChoice <= 10) {return computerChoice="scissors"}
    console.log(computerChoice)
}

function getPlayerChoice() {
    playerChoice = prompt("Make your choice!");
    if (playerChoice.toLowerCase()== "rock") {return "rock"}
    else if (playerChoice.toLowerCase()== "paper") {return "paper"}
    else if (playerChoice.toLowerCase()== "scissors") {return "scissors"}
    else {return getPlayerChoice()}
}

function playRound(player) {
    let computer = getComputerChoice();
    if (computer == 'scissors' && player == 'rock') {
        appendResult("Player wins! Rock beats scissors!")
        playerWins++
        games++
        score.textContent = playerWins;
        endCheck()}
    else if (computer == 'scissors' && player =='paper') {
        appendResult("Computer wins! Scissors beats paper!")
        computerWins++
        games++
        score.textContent = playerWins;
        endCheck()}
    else if (computer == 'paper' && player == 'rock') {
        appendResult("Computer wins! Paper beats rock!")
        computerWins++
        games++
        score.textContent = playerWins;
        endCheck()}
    else if (computer == 'paper' && player == 'scissors') {
        appendResult("Player wins! Scissors beat paper!")
        playerWins++
        games++
        score.textContent = playerWins;
        endCheck()}
    else if (computer== 'rock' && player =='scissors') {
        appendResult("Computer wins! Rock beats scissors!")
        computerWins++
        games++
        score.textContent = playerWins;
        endCheck()
    }
    else if (computer == 'rock' && player =='paper') {
        appendResult("Player wins! Paper beats rock!")
        playerWins++
        games++
        score.textContent = playerWins;
        endCheck()
    }
    else if (computer = player) {
        appendResult("It's a tie!")
        return games++ }
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

function endCheck () {
    if (computerWins == 3 ) {appendResult("The Computer wins!")
    playerWins=0
    computerWins=0
    games=0
    score.textContent = playerWins}
    else if (playerWins == 3 ) {appendResult("The Player wins!")
    playerWins=0
    computerWins=0
    games=0
    score.textContent = playerWins}
    else if (games==5) {appendResult("It's a game tie!")
    playerWins=0
    computerWins=0
    games=0
    score.textContent = playerWins}
    else return;}


function appendResult (resultText) {
    const resultPara = document.createElement('p')
    resultPara.textContent = resultText;
    contentSquare.appendChild(resultPara);
}


const rockButton = document.querySelector(".rockButton");
rockButton.onclick = () => playRound('rock');

const paperButton = document.querySelector(".paperButton");
paperButton.onclick = () => playRound('paper');

const scissorsButton = document.querySelector(".scissorsButton");
scissorsButton.onclick = () => playRound('scissors');

const contentSquare = document.querySelector(".content-square");

let scores = document.querySelector('.scores');
let score = document.createElement('p');
score.textContent = ("Player Score:" + playerWins);
scores.appendChild(score);

score.textContent = playerWins;

