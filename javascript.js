

//return a random # between 0-2
function getComputerChoice(){
    let randomChoice = Math.round((Math.random() *2)); 

    if (randomChoice == 1){
        return "Rock";
    }      
    else if (randomChoice ==2) {
        return "Paper";
    }
    else {return "Scissors";}
}

//console.log(getComputerChoice());

//compare both choices and return a result

function playRound(playerSelection, computerSelection){

    if (playerSelection==computerSelection) {
        return "its a tie! play again";
    } 
    else if (playerSelection== "Rock" && computerSelection == "Paper") {
            return "You Lose! Paper beats Rock";
    }
    else if(playerSelection== "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beat Paper";
    }
    else if(playerSelection== "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beat Scissors";
    }
    else if(playerSelection== "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection== "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection== "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    }
    

}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));