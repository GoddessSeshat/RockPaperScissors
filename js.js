function getComputerChoice() {

    choices = Math.floor(Math.random() * 3)

    if (choices == 0) {
        console.log("Computer chose rock");
    } else if (choices == 1) {
        console.log("Computer chose paper");
    } else if (choices == 2) {
        console.log("Computer chose scissors");
    }

return choices;

}

console.log(getComputerChoice());





function getHumanChoice() {
    let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";

    let playerChoice = prompt("Your turn:", ["rock, paper, scissors"]);

    if (playerChoice == choice1) {
        console.log("HumanPlayer chose rock");
    } else if (playerChoice == choice2) {
        console.log("HumanPlayer chose paper");
    } else if (playerChoice == choice3) {
        console.log("HumanPlayer chose scissors");
    }
    
    return playerChoice;
}

console.log(getHumanChoice());