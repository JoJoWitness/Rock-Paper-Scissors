
let playerWinCount=0;
let pcWinCount=0;
let tieCount=0;
let playerChoice ="";
let pcChoice="";

function pcChoicef(){
    l
}

function winningConditions(){
    if ((playerChoice == "paper" && pcChoice == "rock")||(playerChoice == "scissors" && pcChoice == "paper")||(playerChoice == "rock" && pcChoice == "scissors")){
        playerWinCount++
        console.log(`The playes has chosen ${playerChoice} and the pc has chosen ${pcChoice}, therefore, the player wins this round.`);
    } else if ((playerChoice == "rock" && pcChoice == "rock")||(playerChoice == "scissors" && pcChoice == "scissors")||(playerChoice == "paper" && pcChoice == "paper")){
        tieCount++
        console.log(`The playes has chosen ${playerChoice} and the pc has chosen ${pcChoice}, therefore, is a tie .`)
    } else if ((playerChoice == "paper" && pcChoice == "scissors")||(playerChoice == "scissors" && pcChoice == "rock")||(playerChoice == "rock" && pcChoice == "paper")){
        pcWinCount++
        console.log(`The playes has chosen ${playerChoice} and the pc has chosen ${pcChoice}, therefore, the player loses this round.`)}
    } 

function choisingWinner(){
    if((playerWinCount > pcWinCount) && (playerWinCount > tieCount)){
        alert("The player have won the game");
    } else if ((pcWinCount > playerWinCount) && (pcWinCount > tieCount)){
        alert("The pc has won");
    } else alert("There was a tie.");
}
for(let i = 0; i < 5; i++) {
    playerChoice = prompt("rock, paper or scissors?");
    console.log(playerChoice)
    let randomNumber= Math.floor(Math.random()*3)+1;
    if(randomNumber == 1){
        pcChoice = "rock";
    } else if(randomNumber==2){
        pcChoice = "paper";
    }
    else if(randomNumber==3){ pcChoice = "scissors";}
    winningConditions(playerChoice, pcChoice);
}


choisingWinner()
