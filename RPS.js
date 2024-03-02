let choices = ["Rock", "Paper", "Scissors"];
let playerChoice = "";
let computerChoice = "";
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice
}

function getPlayerChoice() {
    let playerChoice = window.prompt(`Choose Rock, Paper, Scissors: `);
    return playerChoice;
}

function gameRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(`Player Choice: ${playerSelection}, Computer Choice: ${computerSelection}`);
    switch(playerSelection) {
        case "rock":
            if ( computerSelection === 'Scissors' ) {
                console.log('You won! Rock beats Scissors');
                playerWins++;
                console.log(playerWins);
                console.log(computerWins);
                break;
            } else if ( computerSelection === 'Paper' ) {
                console.log("You lost. Paper beats Rock");
                computerWins++;
                console.log(playerWins);
                console.log(computerWins);
                break;
            } else if (computerSelection === 'Rock' ) {
                console.log("It's a Tie");
                console.log(playerWins);
                console.log(computerWins);
                break;
            }
        case "paper":
            if ( computerSelection === 'Rock' ) {
                console.log('You won! Paper beats Rock');
                playerWins++;
                console.log(playerWins);
                console.log(computerWins);
                break;
            } else if ( computerSelection === 'Scissors' ) {
                console.log("You lost. Scissors beats Paper");
                computerWins++;
                console.log(playerWins);
                console.log(computerWins);
                break;
            } else if (computerSelection === 'Paper' ) {
                console.log("It's a Tie!");
                console.log(playerWins);
                console.log(computerWins);
                break;
            }
        case "scissors":
            if ( computerSelection === 'Paper' ) {
                console.log('You won! Scissors beats Paper');
                playerWins++;
                console.log(playerWins);
                console.log(computerWins);
                break;
            } else if ( computerSelection === 'Rock' ) {
                console.log("You lost. Rock beats Scissors");
                computerWins++;
                console.log(playerWins);
                console.log(computerWins);
                break;
            } else if (computerSelection === 'Scissors' ) {
                console.log("It's a Tie!");
                console.log(playerWins);
                console.log(computerWins);
                break;
            }
    }
}

function gameTime() {
    let winner = "";
    for (let i = 1; i < 6; i++){
        console.log(`Round ${i}`);
        gameRound(playerChoice, computerChoice);
    }
    if (playerWins > computerWins) {
        winner = "You";
        console.log(`The ${winner} is victorious!`);
    } else if (computerWins > playerWins) {
        winner = "Computer"
        console.log(`The ${winner} is victorious!`)
    } else {
        console.log("You and the Computer Tied!")
    }
}

gameTime();