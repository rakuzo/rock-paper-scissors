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

//Make input case-insensitive
function getPlayerChoice () {
    let playerInput = "ROCk"; //Input User choice
    let lower = playerInput.toLowerCase();
    let capital = lower.charAt(0).toUpperCase() + lower.slice(1);
    return capital;
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

playRound(playerSelection, computerSelection);