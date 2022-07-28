//Randomly Pick Rock, Paper, or Scissor
function getComputerChoice () {
    const choice = ["Rock", "Paper", "Scissor"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

//Play 1 round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        console.log("You Win! " + playerSelection + " beat " + computerSelection);
        return (1);
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        console.log("You Win! " + playerSelection + " beat " + computerSelection);
        return (1);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Win! " + playerSelection + " beat " + computerSelection);
        return (1);
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("You Draw! " + playerSelection + " draw against " + computerSelection)
        return (0);
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("You Draw! " + playerSelection + " draw against " + computerSelection);
        return (0);
    } else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
        console.log("You Draw! " + playerSelection + " draw against " + computerSelection);
        return (0);
    } else {
        console.log("You Lose! " + computerSelection + " beat " + playerSelection);
        return (-1);
    }
}

// Make input case-insensitive
function getPlayerChoice () {
    let playerInput = prompt("What's your choice?"); //Input User choice
    let lower = playerInput.toLowerCase();
    let capital = lower.charAt(0).toUpperCase() + lower.slice(1);
    return capital;
}

// This makes +1 input prompt so comment It
// let computerSelection = getComputerChoice();
// let playerSelection = getPlayerChoice();

// console.log(playRound(playerSelection, computerSelection));

function game() {
    const values = [];    
    for (let i = 0; i < 5; i++) {
        //Move the variable to this
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();

        //Can also directly call getPlayerChoice() and also getComputerChoice()
        //console.log(playRound(playerSelection, computerSelection));
        values.push(playRound(playerSelection, computerSelection));
    }
    return(values);
}

function getFinalResult() {
    const finArray = game();
    let sum = 0;

    for (let i =0; i < finArray.length; i++) {
        sum += finArray[i];
    }

    if (sum === 0) {
        console.log("You Draw! against Computer");
    } else if (sum >= 1) {
        console.log("You Win! against Computer");
    } else {
        console.log("You Lose! against Computer");
    }
}

getFinalResult();
// console.log(game());