//Randomly Pick Rock, Paper, or Scissor
function getComputerChoice () {
    const choice = ["Rock", "Paper", "Scissor"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

//Play 1 round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        return (1);
        // return("You Win! " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        return (1);
        // return("You Win! " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return (1);
        // return("You Win! " + playerSelection + " beat " + computerSelection)
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return (0);
        // return("You Draw! " + playerSelection + " draw against " + computerSelection)
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return (0);
        // return("You Draw! " + playerSelection + " draw against " + computerSelection)
    } else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
        return (0);
        // return("You Draw! " + playerSelection + " draw against " + computerSelection)
    } else {
        return (-1);
        // return("You Lose! " + computerSelection + " beat " + playerSelection);
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
        console.log(playRound(playerSelection, computerSelection));
        values.push(playRound(playerSelection, computerSelection));
    }
    console.log(values);
}


game();