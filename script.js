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

let userScore = 0;
let CompScore = 0;



function playRound(playerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
   
    let computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();
    console.log(playerSelection,computerSelection)

    if (winDiv.innerHTML!=="") {
        winDiv.innerHTML = "";
    }
    
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            userScore += 1;
            CompScore += 1;
        }
        else if (computerSelection === "paper") {
            CompScore += 1;
        }
        else {
            userScore += 1;
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            userScore += 1;
        }
        else if (computerSelection === "paper") {
            userScore += 1;
            CompScore += 1;
        }
        else {
            CompScore += 1;
        }
    }
    if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            CompScore += 1;
        }
        else if (computerSelection === "paper") {
            userScore += 1;
        }
        else {
            userScore += 1;
            CompScore += 1;
        }
    }
    playDiv.innerHTML = userScore;
    CompDiv.innerHTML = CompScore;
    if (userScore===5||CompScore===5) {
        if (userScore===5 && CompScore===5) {
            winDiv.innerHTML = "Draw!"
        }
        else if (CompScore===5) {
            window.innerHTML = "Computer Wins!";
        }
        else if (userScore===5){
            winDiv.innerHTML = "User Wins!";
        }
        userScore = 0;
        CompScore = 0;
        
    }
    
    
}
const playDiv = document.getElementById("player-score");
const CompDiv = document.getElementById("comp-score");
const winDiv = document.getElementById("win-element");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");



rVal = rockBtn.id;
pVal = paperBtn.id;
sVal = scissorBtn.id;

rockBtn.addEventListener("click", (event) => console.log(playRound(rVal)));
paperBtn.addEventListener("click", (event) => console.log(playRound(pVal)));
scissorBtn.addEventListener("click", (event) => console.log(playRound(sVal)));





