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

return choices;

}

console.log(getComputerChoice());


//Human

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


//Score Variables

let humanScore = 0;
let computerScore = 0;


// Single Round
function playRound(humanChoice, computerChoice) {

 if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("It's a tie play another round");
} else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose, try again!");
} else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++
    console.log("You win! Next round is up!");
}   else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("It's a tie play another round");
} else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose, try again!");
} else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++
    console.log("You win! Next round is up!");
} else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("It's a tie play another round");
} else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose, try again!");
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++
    console.log("You win! Next round is up!");
}

}


//Entire Game
function playGame() {

    for (let i = 0; i = 5; i++) {
        humanScore = 0;
        computerScore = 0;
        
        playRound(humanChoice, computerChoice);
    }

    return playGame();
}

console.log("Game Over, Play again");
