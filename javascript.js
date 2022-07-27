//Randomly Pick Rock, Paper, or Scissor
function getComputerChoice () {
    let choice = ["Rock", "Paper", "Scissor"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

//Play 1 round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        console.log("You Win! " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        console.log("You Win! " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Win! " + playerSelection + " beat " + computerSelection)
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("You Draw! " + playerSelection + " draw against " + computerSelection)
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("You Draw! " + playerSelection + " draw against " + computerSelection)
    } else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
        console.log("You Draw! " + playerSelection + " draw against " + computerSelection)
    } else {
        console.log("You Lose! " + computerSelection + " beat " + playerSelection);
    }
}

let computerSelection = getComputerChoice();
let playerSelection = "Rock";

playRound(playerSelection, computerSelection);