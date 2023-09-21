

//return a random # between 0-2
function getComputerChoise(){
    let randomChoise = Math.round((Math.random() *2)); 

    if (randomChoise == 1){
        return "rock";
    }      
    else if (randomChoise ==2) {
        return "Paper";
    }
    else {return "scissors"}
}

console.log(getComputerChoise());