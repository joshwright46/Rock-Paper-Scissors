
// Declare variables

let computerChoice
let humanChoice
let computerScore = 0
let humanScore = 0

// Computer choice function

function getComputerChoice(){
    let rand = Math.round((Math.random()*2))
    if(rand == 0){
        return "rock"
    }
    else if(rand == 1){
        return "paper"
    }
    else{
        return "scissors"
    }  
}

// Human choice function

function getHumanChoice(){
    return prompt("Choose Rock, Paper, or Scisors").toLowerCase() //Make user input case insensitive
}

// Single round logic

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
    }
    else if(computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++
    }
    else if(computerChoice == "paper" && humanChoice == "rock"){
        computerScore++
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++
    }
    else if(humanChoice == computerChoice){
        humanScore++
        computerScore++
    }

    console.log(`Human Choice: ${humanChoice}`)
    console.log(`Computer Choice: ${computerChoice}`)
    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

// Five round game

for(let i=1; i<=5; i++){
    console.log(`Round ${i}`)
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
}

// Display winner

if(humanScore > computerScore){
    console.log("Winner: Human")
}
else if(computerScore > humanScore){
    console.log("Winner: Computer")
}
else{
    console.log("Winner: Draw")
}









