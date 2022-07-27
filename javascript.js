//Randomly Pick Rock, Paper, or Scissor
function getComputerChoice () {
    let choice = ["Rock", "Paper", "Scissor"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

//Play 1 round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        console.log("You Win!");
    } else {
        console.log("You Lose!");
    }
}