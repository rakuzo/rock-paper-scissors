const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', getPlayerChoice));

function getPlayerChoice(e) {
    let playerChoice = this.classList.value;
    // console.log(this.classList.value);
    playRound(playerChoice, getComputerChoice())
}

//Randomly Pick Rock, Paper, or Scissor
function getComputerChoice () {
    const choice = ["Rock", "Paper", "Scissor"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

const result = document.querySelector('#result')
const para = document.createElement('p');

//Play 1 round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        para.textContent = `You Win! ${playerSelection} beat ${computerSelection}`;
        result.appendChild(para);
        return (1);
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        para.textContent = `You Win! ${playerSelection} beat ${computerSelection}`;
        result.appendChild(para);
        return (1);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        para.textContent = `You Win! ${playerSelection} beat ${computerSelection}`;
        result.appendChild(para);
        return (1);
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        para.textContent = `You Tie! ${playerSelection} draw ${computerSelection}`;
        result.appendChild(para);
        return (0);
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        para.textContent = `You Tie! ${playerSelection} draw ${computerSelection}`;
        result.appendChild(para);
        return (0);
    } else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
        para.textContent = `You Tie! ${playerSelection} draw ${computerSelection}`;
        result.appendChild(para);
        return (0);
    } else {
        para.textContent = `You Lose! ${playerSelection} beaten by ${computerSelection}`;
        result.appendChild(para);
        return (-1);
    }
}

// function game() {
//     const values = [];    
//     for (let i = 0; i < 5; i++) {
//         //Move the variable to this
//         let computerSelection = getComputerChoice();
//         let playerSelection = getPlayerChoice();

//         //Can also directly call getPlayerChoice() and also getComputerChoice()
//         values.push(playRound(playerSelection, computerSelection));
//     }
//     return(values);
// }

// function getFinalResult() {
//     const finArray = game();
//     let sum = 0;

//     for (let i =0; i < finArray.length; i++) {
//         sum += finArray[i];
//     }

//     if (sum === 0) {
//         console.log("You Draw! against Computer");
//     } else if (sum >= 1) {
//         console.log("You Win! against Computer");
//     } else {
//         console.log("You Lose! against Computer");
//     }
// }

// getFinalResult();