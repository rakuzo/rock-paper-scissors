//Randomly Pick Rock, Paper, or Scissor
function getComputerChoice () {
    let choice = ["Rock", "Paper", "Scissor"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

//Play 1 round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        return("You Win! " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        return("You Win! " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return("You Win! " + playerSelection + " beat " + computerSelection)
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return("You Draw! " + playerSelection + " draw against " + computerSelection)
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return("You Draw! " + playerSelection + " draw against " + computerSelection)
    } else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
        return("You Draw! " + playerSelection + " draw against " + computerSelection)
    } else {
        return("You Lose! " + computerSelection + " beat " + playerSelection);
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
    
    for (let i = 0; i < 5; i++) {
        //Move the variable to this
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();

        //Can also directly call getPlayerChoice () and also getComputerChoice ()
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();