var readline = require('readline-sync'); //Required to run readline.question

function computerChoice() {
    let numb = Math.random() * (3 - 1) + 1;
    return Math.round(numb);
}

function userChoice(){
    let choice = readline.question("Whats your choice? ")
    let lowerCased = choice.toLowerCase();
    return lowerCased;
}

function playRound(computerChoice, userChoice){
    if (userChoice === 'rock' && computerChoice === 1){
        console.log("Rock vs Rock: No Winners, Try Again!");
    } else if (userChoice === "paper" && computerChoice === 2){
        console.log("Paper vs Paper: No Winners, Try Again!");
    } else if (userChoice === "scissors" && computerChoice === 3){
        console.log("Scissors vs Scissors: No Winners, Try Again!");
    } else if (userChoice === "rock" && computerChoice === 2){
        console.log("Rock vs Paper: Computer Wins, Try Again! ");
    } else if (userChoice === "rock" && computerChoice === 3){
        console.log('Rock vs Scissors: You Win!');
    } else if (userChoice === "paper" && computerChoice === 1) {
        console.log("Paper vs Rock: You Win!");
    } else if (userChoice === "paper" && computerChoice === 3){
        console.log("Paper vs Scissors: Computer Wins, Try Again!");
    } else if (userChoice === "scissors" && computerChoice === 1){
        console.log("Scissors vs Rock: Computer Win, Try Again!");
    } else if (userChoice === "scissors" && computerChoice === 2){
        console.log("Scissors vs Paper: You Win!");
    } else {
        console.log("Wait what did you typed?!");
    }
}

playRound(computerChoice(),userChoice());