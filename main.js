let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll("button[class=gameDecisionButton]"); // all buttons exept the reset button
const resetButton = document.querySelector("#reset");
const playerPointsPara = document.querySelector("#playerPoints"); // player points are displayed here
const computerPointsPara = document.querySelector("#computerPoints"); // computer points are displayed here
const resultsPara = document.querySelector("#resultsPara"); // results of rounds and the game overall will be displayed here

buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

function playRound() {
    let playerSelection = this.id; // playerSelection equals id of pressed button, e.g. "rock"
    let computerSelection = computerPlay();

    // if player won round, increase playerPoints by 1 and display them and the result of the round
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerPoints++;
        playerPointsPara.textContent = "Player Points: " + playerPoints;

    if (playerPoints === 5) {
        resultsPara.textContent = "You win the game!";
        showResetButton();
    }
        
    resultsPara.textContent = "You win the round!";
        }
    else if (playerSelection === computerSelection) {
        resultsPara.textContent = "It's a tie!";    
    }
    else {
        computerPoints++;
        computerPointsPara.textContent = "Computer Points: " + computerPoints;

        if (computerPoints === 5) {
            resultsPara.textContent = "You lose the game!";
            showResetButton();
        }

        resultsPara.textContent = "You lose the round!";   
    }
}

// hides main buttons when reset button is shown
function hideMainButtons() {
    const div = document.querySelector(".mainButtons");
    div.setAttribute("style", "display: none");
}

function showResetButton() {
    resetButton.setAttribute("style", "display: inline");
    hideMainButtons();
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
    playerPoints = 0;
    computerPoints = 0;
    playerPointsPara.textContent = "Player Points: " + playerPoints;
    computerPointsPara.textContent = "Computer Points: " + computerPoints;
    resultsPara.textContent = "";
    resetButton.setAttribute("style", "display: none"); // hide reset button
    const div = document.querySelector(".mainButtons");
    div.setAttribute("style", "display: inline"); // show main buttons again
}

function computerPlay() {
    let number = getRandomInt(3); // number can be 0, 1, or 2
            
        if (number === 0) {
            return "rock";
        }      
        else if (number === 1) {
            return "paper";
        }
        else {
            return "scissors";
        }
}

/* returns random int between 0 (inclusive) and max (exclusive) */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}