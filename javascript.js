
let playerWinCount=0;
let pcWinCount=0;
let tieCount=0;
let playerChoice="0" ;
let pcChoice="";
let randomNumber ="0";
let pjImage = document.getElementById('pjChoice');
let playerWinRound;
let pcWinRound;
let tieRound;
let gameHasFinish= false;

const resultText= document.querySelector('.resultText');
const pjPoints= document.querySelector('.pjPoints');
const pcPoints= document.querySelector('.pcPoints');
const textAndButton= document.querySelector('.textAndButton')
function getPaper(){
    console.log(playerChoice);
    playerChoice="paper";
}
function getRock(){
    playerChoice="rock";
    console.log(playerChoice);
}

function getScissors(){
    playerChoice="scissors"
    console.log(playerChoice);
}

function changeToRock() {
    if(gameHasFinish===false){
    document.getElementById('pjChoice').src="images/Rock.png";
    document.getElementById('pjChoice').setAttribute('style', 'width: 150px; height: 150px;')
    return}}

function changeToPaper() {
    if(gameHasFinish===false){
    document.getElementById('pjChoice').src="images/Paper.png";
    document.getElementById('pjChoice').setAttribute('style', 'width: 150px; height: 150px;')
    return}}

function changeToScissors() {
    if(gameHasFinish===false){
    document.getElementById('pjChoice').src="images/Scissors.png";
    document.getElementById('pjChoice').setAttribute('style', 'width: 150px; height: 150px;')
    return}}  

function changeToQuestionMark(){
    if(playerChoice=="0"){
    document.getElementById('pjChoice').src="images/QuestionMark.png";
    document.getElementById('pjChoice').setAttribute('style', 'width: 50px; height: 90px;')
    }
  return} 

function changingTheText(){
    if(playerWinRound==true){
        resultText.textContent='The player has won the round!';
    }else if(pcWinRound==true){
        resultText.textContent='The pc has won the round!';
    } else if(tieRound==true){
        resultText.textContent='There was a tie.';
    }
}

function addPoints(){
    if(playerWinRound==true){
        pjPoints.textContent= `The player points are: ${playerWinCount}`;
    } else if(pcWinRound==true){    
        pcPoints.textContent=`The pc points are: ${pcWinCount}`;
    }
}

function getPcChoice(){
    randomNumber= Math.floor(Math.random()*3)+1;
    if(randomNumber == 1){
        pcChoice = "rock";
        document.getElementById('pcChoice').src="images/Rock.png";
        document.getElementById('pcChoice').setAttribute('style', 'width: 150px; height: 150px;')

    } else if(randomNumber==2){
        pcChoice = "paper";
        document.getElementById('pcChoice').src="images/Paper.png";
        document.getElementById('pcChoice').setAttribute('style', 'width: 150px; height: 150px;')
    }
    else if(randomNumber==3){ pcChoice = "scissors";
        document.getElementById('pcChoice').src="images/Scissors.png";
        document.getElementById('pcChoice').setAttribute('style', 'width: 150px; height: 150px;')}
    console.log(pcChoice)
}

function winningConditions(){
    if ((playerChoice == "paper" && pcChoice == "rock")||(playerChoice == "scissors" && pcChoice == "paper")||(playerChoice == "rock" && pcChoice == "scissors")){
        playerWinCount++
        tieRound=false;
        pcWinRound=false;
        playerWinRound=true;
        console.log(`The playes has chosen ${playerChoice} and the pc has chosen ${pcChoice}, therefore, the player wins this round.`);
    } else if ((playerChoice == "rock" && pcChoice == "rock")||(playerChoice == "scissors" && pcChoice == "scissors")||(playerChoice == "paper" && pcChoice == "paper")){
        tieCount++
        playerWinRound=false;
        pcWinRound=false;
        tieRound=true;
        console.log(`The playes has chosen ${playerChoice} and the pc has chosen ${pcChoice}, therefore, is a tie .`)
    } else if ((playerChoice == "paper" && pcChoice == "scissors")||(playerChoice == "scissors" && pcChoice == "rock")||(playerChoice == "rock" && pcChoice == "paper")){
        pcWinCount++
        playerWinRound=false;
        tieRound=false;
        pcWinRound=true;
        console.log(`The playes has chosen ${playerChoice} and the pc has chosen ${pcChoice}, therefore, the player loses this round.`)}
    } 
  

function choisingWinner(){
    if(playerWinCount >=3){
        resultText.textContent="The player have won the game, congratulations :D!";
        gameHasFinish=true;
    } else if (pcWinCount >=3){ 
        resultText.textContent="The pc has won, how bad :(";
        gameHasFinish=true;
    } 
   
}

function createbutton(){
    const button = document.createElement('button');
    textAndButton.appendChild(button);
    button.textContent= 'Play again!'
}
  
function choisingRock(){
    if(gameHasFinish===false){
    getRock();
    changeToRock();
    getPcChoice();
    winningConditions();
    changingTheText();
    addPoints();
    choisingWinner();
    }
}
 
function choisingPaper(){
    if(gameHasFinish===false){
    getPaper();
    changeToPaper();
    getPcChoice();
    winningConditions();
    changingTheText();
    addPoints();
    choisingWinner();
    }
}
function choisingScissors(){
    if(gameHasFinish===false){
    getScissors();
    changeToScissors();
    getPcChoice();
    winningConditions();
    changingTheText();
    addPoints();
    choisingWinner();
    }
}

if(playerWinCount >= 3 || pcWinCount >= 3){
    choisingWinner();
}

const rock = document.querySelector('#toolImagesRock');
rock.addEventListener('click', choisingRock);

const paper = document.querySelector('#toolImagesPaper');
paper.addEventListener('click', choisingPaper);

const scissors = document.querySelector('#toolImagesScissors');
scissors.addEventListener('click', choisingScissors);


rock.addEventListener('mouseover', changeToRock);
paper.addEventListener('mouseover', changeToPaper);
scissors.addEventListener('mouseover', changeToScissors);

rock.addEventListener('mouseout', changeToQuestionMark); 
paper.addEventListener('mouseout',changeToQuestionMark); 
scissors.addEventListener('mouseout', changeToQuestionMark);
