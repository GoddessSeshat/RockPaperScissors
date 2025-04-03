// Computer

function getComputerChoice() {

    choices = Math.floor(Math.random() * 3)

    if (choices == 0) {
        console.log("Computer chose rock");
    } else if (choices == 1) {
        console.log("Computer chose paper");
    } else if (choices == 2) {
        console.log("Computer chose scissors");
    }

}


//Human

function getHumanChoice() {
    let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";

    let playerChoice = prompt("Your turn:", ["rock, paper, scissors"]);

    if (playerChoice == choice1) {
        console.log("Human chose rock");
    } else if (playerChoice == choice2) {
        console.log("Human chose paper");
    } else if (playerChoice == choice3) {
        console.log("Human chose scissors");
    }
    
}


//Score Variables

let humanScore = 0;
let computerScore = 0;


// Single Round
function playRound(humanChoice, computerChoice) {

 if ((humanChoice == "rock" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "scissors")) {
    console.log("It's a tie play another round");
} else if ((humanChoice == "rock" && computerChoice == "paper") ||
           (humanChoice == "paper" && computerChoice == "scissors") ||
           (humanChoice == "scissors" && computerChoice == "rock")) {
            computerScore++;
    console.log("You lose, try again!");
} else if ((humanChoice == "rock" && computerChoice == "scissors") ||
           (humanChoice == "paper" && computerChoice == "rock") ||
           (humanChoice == "scissors" && computerChoice == "paper")) {
            humanScore++
    console.log("You win! Next round is up!");
}  

}


//Game Starts Here
    const humanTurn = getHumanChoice();
    const computerTurn = getComputerChoice();
    
   


//Entire Game
function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanTurn = getHumanChoice();
        const computerTurn = getComputerChoice();
        playRound(humanTurn, computerTurn);
        
//Keep Score
        console.log("Human choice:", humanScore);
        console.log("Computer choice:", computerScore);
      
    }

//Winner
    if (humanTurn > computerTurn) {  
        console.log("Game Over! You win");
    } else if (computerTurn > humanTurn) {
        console.log("Game Over! Computer wins!");
    } else {
        console.log("Game Over! It's a tie! Play again")
    }
}

playGame();


