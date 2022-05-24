const prompt = require('prompt-sync')({sigint: true});

let player1 = (prompt("Player 1 enter 'rock', 'paper', or 'scissors' "));
let player2 = (prompt("Player 2 enter 'rock', 'paper', or 'scissors' "));
console.log("Player 1 " + player1);
console.log("Player 2 " + player2);

if (player1 === player2){
    console.log("Draw")
} 

if (player1 === "paper" && player2 === "rock"){
    console.log("paper beats rock")
    console.log("Player 1 wins")
} 

if (player1 === "rock" && player2 === "scissors"){
    console.log("rock beats scissors")
    console.log("Player 1 wins")
}

if (player1 === "scissors" && player2 === "paper"){
    console.log("scissors beats paper")
    console.log("Player 1 wins")
}

if (player2 === "paper" && player1 === "rock"){
    console.log("paper beats rock")
    console.log("Player 2 wins")
}

if (player2 === "rock" && player1 === "scissors"){
    console.log("rock beats scissors")
    console.log("Player 2 wins")
}

if (player2 === "scissors" && player2 === "paper"){
    console.log("scissors beat paper")
    console.log("Player 2 wins")
}