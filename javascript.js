

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
        return  "its a tie!";
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
                        
const computerSelection = [getComputerChoice(),getComputerChoice(),getComputerChoice(),getComputerChoice(),getComputerChoice()];

//get 5th letter of string return from play round function if w add 1 to player score if l add 1 to computer score
//console.log(playRound(playerSelection, computerSelection[1]).charAt(4));
//console.log(playRound(playerSelection, computerSelection[2]).charAt(4));
//console.log(playRound(playerSelection, computerSelection[3]).charAt(4));
//console.log(playRound(playerSelection, computerSelection[4]).charAt(4));
//console.log(playRound(playerSelection, computerSelection[0]).charAt(4));

// make 2 variables and assign the score of player and computer

let computerScore = 0;

let playerScore = 0;

function game(){

    console.log("CPU "+computerScore,"YOU "+playerScore); //starting score

    alert("You have been challenged to a best out of 5 by the machine! \n Choose Rock, Paper or Scissors"); //starts the game lets player know the rules.

        // request selection from player and turns it into lower case for comparison

    const playerSelection = [   window.prompt("Round 1! Rock, Paper or Scissors!").toLowerCase(),
                                window.prompt("Round 2! Rock, Paper or Scissors!").toLowerCase(),
                                window.prompt("Round 3! Rock, Paper or Scissors!").toLowerCase(),           //array to clean code up prompt 5 round input
                                window.prompt("Round 4! Rock, Paper or Scissors!").toLowerCase(),
                                window.prompt("Final Round! Rock, Paper or Scissors!").toLowerCase()
                            ];

                        //round 1
    console.log(playRound(playerSelection[1], computerSelection[1])); //discribes round and declares win or loss
    
    if (playRound(playerSelection[1], computerSelection[1]).charAt(4)=="W"){ //if win add 1 to player score
        console.log("CPU "+ computerScore, "YOU "+ (playerScore += 1));
    } else if (playRound(playerSelection[1], computerSelection[1]).charAt(4)=="L"){ //if loose add 1 to cpu score
        console.log("CPU "+ (computerScore += 1) , "YOU "+ playerScore );
    } else{
        console.log("CPU "+computerScore,"YOU "+playerScore); // if tie display current score
    }
                        //round 2
        console.log(playRound(playerSelection[2], computerSelection[2]));

    if (playRound(playerSelection[2], computerSelection[2]).charAt(4)=="W"){
        console.log("CPU "+ computerScore, "YOU "+(playerScore += 1));
    } else if (playRound(playerSelection[2], computerSelection[2]).charAt(4)=="L"){
        console.log("CPU "+ (computerScore += 1) , "YOU "+ playerScore );
    } else{
        console.log("CPU "+computerScore,"YOU "+playerScore); 
    }

                        //round 3
    console.log(playRound(playerSelection[3], computerSelection[3]));
    
    if (playRound(playerSelection[3], computerSelection[3]).charAt(4)=="W"){
       console.log("CPU "+ computerScore, "YOU "+(playerScore += 1));
    } else if (playRound(playerSelection[3], computerSelection[3]).charAt(4)=="L"){
        console.log("CPU "+ (computerScore += 1) , "YOU "+ playerScore );
    } else{
        console.log("CPU "+computerScore,"YOU "+playerScore); 
    }

                        //round 4 
    console.log(playRound(playerSelection[4], computerSelection[4]));
    
    if (playRound(playerSelection[4], computerSelection[4]).charAt(4)=="W"){
        console.log("CPU "+ computerScore, "YOU "+(playerScore += 1));
    } else if (playRound(playerSelection[4], computerSelection[4]).charAt(4)=="L"){
        console.log("CPU "+ (computerScore += 1) , "YOU "+ playerScore );
    } else{
        console.log("CPU "+computerScore,"YOU "+playerScore); 
    }

                        //final round
    console.log(playRound(playerSelection[0], computerSelection[0]));

    if (playRound(playerSelection[0], computerSelection[0]).charAt(4)=="W"){
        console.log("CPU "+ computerScore, "YOU "+(playerScore += 1));
    } else if (playRound(playerSelection[0], computerSelection[0]).charAt(4)=="L"){
        console.log("CPU "+ (computerScore += 1) , "YOU "+ playerScore );
    } else{
        console.log("CPU "+computerScore,"YOU "+playerScore); 
    }

    //game result
    if (computerScore==playerScore) {
        console.log("Its a tie! what are the odds of that! (it actually 1 in 129 million");
    } else if (computerScore>playerScore){
        console.log("You Loose!");
    } else {
        console.log("You Win!")
    }
}

game(computerScore, playerScore)