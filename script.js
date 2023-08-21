function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    if (num===1) {
        return "rock";
    }
    else if (num===2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function playRound(playerSelection, getComputerChoice) {
    if (playerSelection === "rock") {
        if (getComputerChoice === "rock") {
            return "It's a draw!";
        }
        else if (getComputerChoice === "paper") {
            return "You lose!";
        }
        else {
            return "You win!";
        }
    }
    if (playerSelection === "paper") {
        if (getComputerChoice === "rock") {
            return "You win!";
        }
        else if (getComputerChoice === "paper") {
            return "It's a draw!";
        }
        else {
            return "You lose!";
        }
    }
    if (playerSelection === "scissor") {
        if (getComputerChoice === "rock") {
            return "You lose!";
        }
        else if (getComputerChoice === "paper") {
            return "You win!";
        }
        else {
            return "It's a draw!";
        }
    }
}

function game() {
    for(let i=0;i<5;i++) {
        const playerSelection = window.prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()



