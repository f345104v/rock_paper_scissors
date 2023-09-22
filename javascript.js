

//return a random # between 0-2
function getComputerChoice(){
    let randomChoice = Math.round((Math.random() *2)); 

    if (randomChoice == 1){
        return "rock";
    }      
    else if (randomChoice ==2) {
        return "paper";
    }
    else {return "scissors";}
}

//console.log(getComputerChoice());

//compare both choices and return a result

function playRound(playerSelection, computerSelection){

    if (playerSelection==computerSelection) {
        return  "its a tie! play again";
    } 
    else if (playerSelection== "rock" && computerSelection == "paper") {
            return "You Lose! paper beats rock";
    }
    else if(playerSelection== "paper" && computerSelection == "scissors") {
        return "You Lose! scissors beat paper";
    }
    else if(playerSelection== "scissors" && computerSelection == "rock") {
        return "You Lose! rock beat scissors";
    }
    else if(playerSelection== "paper" && computerSelection == "rock") {
        return "You Win! paper beats rock";
    }
    else if(playerSelection== "scissors" && computerSelection == "paper") {
        return "You Win! scissors beats paper";
    }
    else if(playerSelection== "rock" && computerSelection == "scissors") {
        return "You Win! rock beats scissors";
    }
    else {return "that is not an Option, choose Rock, Paper or Scissors"}
    

}

//request selection from player and turns it into lower case for comparison 
const playerSelection = window.prompt("You have been challenged to a best out of 5 by the machine! \n Choose Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));

// make 2 variables that will keep the score of player and computer

let computerScore = 0 ;

let playerScore = 0 ;

//get 5th letter of string return from play round function if w add 1 to player score if l add 1 to computer score