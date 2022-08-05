const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', getPlayerChoice));

function getPlayerChoice(e) {
    let playerChoice = this.classList.value;
    finalGame(playerChoice);
}

//Randomly Pick Rock, Paper, or Scissor
function getComputerChoice () {
    const choice = ["Rock", "Paper", "Scissor"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

const plyChoice = document.querySelector('.plychoice');
const comChoice = document.querySelector('.comchoice');

const score = document.querySelector('#score');
const paraTwo = document.createElement('p');

const result = document.querySelector('#result');
const paraThree = document.createElement('p');

//Play 1 round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        plyChoice.textContent = `✊`;
        comChoice.textContent = `✌`;
        playerScore += 1;
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        plyChoice.textContent = `✌`;
        comChoice.textContent = `✋`;
        playerScore += 1;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        plyChoice.textContent = `✋`;
        comChoice.textContent = `✊`;
        playerScore += 1;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        plyChoice.textContent = `✊`;
        comChoice.textContent = `✋`;
        computerScore += 1;
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        plyChoice.textContent = `✋`;
        comChoice.textContent = `✌`;
        computerScore += 1;
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        plyChoice.textContent = `✌`;
        comChoice.textContent = `✊`;
        computerScore += 1;
    } else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
        plyChoice.textContent = `✌`;
        comChoice.textContent = `✌`;
        computerScore += 0;
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        plyChoice.textContent = `✊`;
        comChoice.textContent = `✊`;
        computerScore += 0;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        plyChoice.textContent = `✋`;
        comChoice.textContent = `✋`;
        computerScore += 0;
    }
}

let playerScore = 0;
let computerScore = 0;

function finalGame (a) {
    playRound(a, getComputerChoice());
    
    if (playerScore === 5) {
        paraTwo.textContent = `Player Score ${playerScore} VS Computer Score ${computerScore}`;
        score.appendChild(paraTwo);
        paraThree.textContent = `Player Victory! Please refresh to restart the game.`;
        result.appendChild(paraThree);
        
        const nodes = document.getElementById("container").getElementsByTagName('*');
        for(let i = 0; i < nodes.length; i++){
            nodes[i].disabled = true;
        }
    } else if (computerScore === 5) {
        paraTwo.textContent = `Player Score ${playerScore} VS Computer Score ${computerScore}`;
        score.appendChild(paraTwo);
        paraThree.textContent = `Computer Victory! Please refresh to restart the game.`;
        result.appendChild(paraThree);
        
        const nodes = document.getElementById("container").getElementsByTagName('*');
        for(let i = 0; i < nodes.length; i++){
            nodes[i].disabled = true;
        }
    } else {
        paraTwo.textContent = `Player Score ${playerScore} VS Computer Score ${computerScore}`;
        score.appendChild(paraTwo);
    }
}