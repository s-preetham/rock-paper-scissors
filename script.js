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

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a draw!";
        }
        else if (computerSelection === "paper") {
            return "You lose!";
        }
        else {
            return "You win!";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win!";
        }
        else if (computerSelection === "paper") {
            return "It's a draw!";
        }
        else {
            return "You lose!";
        }
    }
    if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            return "You lose!";
        }
        else if (computerSelection === "paper") {
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
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()



