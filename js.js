// Computer

function getComputerChoice() {

    choices = Math.floor(Math.random() * 3)

    if (choices == 0) {
        console.log("Computer: rock");
    } else if (choices == 1) {
        console.log("Computer: paper");
    } else if (choices == 2) {
        console.log("Computer: scissors");
    }

}


//Player

function getHumanChoice() {
    let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";

    let playerChoice = prompt("Your turn:", ["rock, paper, scissors"]);
    
    if (playerChoice == choice1) {
        console.log("Player: rock");
    } else if (playerChoice == choice2) {
        console.log("Player: paper");
    } else if (playerChoice == choice3) {
        console.log("Player: scissors");
    }

}


//Score Variables

let humanScore = 0;
let computerScore = 0;


// Single Round
function playRound(humanChoice, computerChoice) {

 if (humanChoice == computerChoice) {
    console.log("It's a tie.");
    } else if ((humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "rock" && computerChoice == "scissors")) {
        humanScore++;
        console.log("You win!");
    } else ((humanChoice == "rock" && computerChoice == "paper") ||
           (humanChoice == "paper" && computerChoice == "scissors") ||
           (humanChoice == "scissors" && computerChoice == "rock")) 
        computerScore++;
        console.log("You lose!");

    }  


//Game
function playGame() {

    for (let i = 0; i < 5; i++) {

        playRound(getHumanChoice(), getComputerChoice());
        
//Keep Score
        console.log("Player:", humanScore);
        console.log("Computer:", computerScore);
    }

//Winner
    if (humanScore > computerScore) {  
        console.log("Game Over! Player wins!");
    } else if (humanScore < computerScore) {
        console.log("Game Over! Computer wins!");
    } else {
        console.log("Game Over! It's a tie!")
    }
    }

playGame();


