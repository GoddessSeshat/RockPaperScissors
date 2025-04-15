// Computer

function getComputerChoice() {

    let turn = Math.random()
    
    if (turn < 0.33) {
        return "rock";
    } else if (turn > 0.66) {
        return "scissors";
    } else {
        return "paper";
    }
}

//Player

function getHumanChoice() {

    return prompt("Your turn:", ["rock, paper, scissors"]);
    
}


//Score Variables

let humanScore = 0;
let computerScore = 0;


// Single Round
function playRound(humanChoice, computerChoice) {

 if (humanChoice == computerChoice) {
        console.log("It's a tie");
 } else if ((humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "rock" && computerChoice == "scissors")) {
        humanScore++;
        console.log("You win!");
 } else { 
        computerScore++;
        console.log("You lose!");
 }  
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


