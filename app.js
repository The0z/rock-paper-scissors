//Rock Paper Scissors with UI!

//GLOBAL VARIABLES:
let playerChoice = '';
let computerChoice = '';
let playerPts = 0;
let cpuPts = 0;

//customization fun. Production code would not have this.
let rock = 'tails';
let paper = 'sonic';
let scissors = 'knuckles';
const RocPapSciMatrix = {
    tails:{
        tails: 'tie',
        sonic: 'lose',
        knuckles: 'win',
    },
    sonic:{
        tails: 'win',
        sonic: 'tie',
        knuckles: 'lose' 
    },
    knuckles:{
        tails: 'lose',
        sonic: 'win',
        knuckles: 'tie'
    }
};


/**
 * Returns the computerChoice for Rock, Paper, Scissors.
 */
function getComputerChoice(){
    let randNum = Math.floor(1 + Math.random() * 3); //Returns 1,2, or 3.
    return getRockPaperScissors(randNum);
}

/**
 * Plays a round of Rock Paper Scissors 
 * 
 * @param {string} playerSelection (rock, paper, or scissors) 
 * @returns {string} result of the rock paper scissor round
 */
function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    let playerResult = RocPapSciMatrix[playerChoice][computerChoice];
    computerChoice = CapFirstLetterStr(computerChoice);
    playerChoice = CapFirstLetterStr(playerChoice);
    let roundMsg = `Robotnik chose ${computerChoice} and Player chose ${playerChoice}...`;
    
    switch(playerResult){
        case 'win':
            playerPts++;
            roundMsg += `Round Won: ${playerChoice} beats ${computerChoice}`;
            break;
        case 'tie':
            roundMsg += `Round Tied: ${playerChoice} ties ${computerChoice}`;
            break;
        case 'lose':
            cpuPts++;
            roundMsg += `Round Loss: ${playerChoice} loses to ${computerChoice}`;
            break;
    }
    roundResP.textContent = roundMsg;
    roundResP.classList.add("playing");
    updateScore();
    gameStatus();
}

/**
 * Checks if the computer or player has reached enough points to win the game
 * Calls end game if either the player or cpu wins.
 * Updates roundResP to tell the player who won the game
 * Plays music based on gameStatus (future iterations should separate these!)
 */
function gameStatus(){
    scoreP.classList.add("playing");
    const gameWin = document.querySelector("#gameWin");
    const gameLoss = document.querySelector("#gameLoss");
    const backMusic = document.querySelector("#backMusic");

    if (playerPts >= 3){
        backMusic.pause();
        gameWin.load(); //reload the music.
        gameWin.play();
        roundResP.textContent = "THE PLAYER HAS DEFEATED DOCTOR ROBOTNIK";
        endGame();
    } else if (cpuPts >= 3){
        backMusic.pause();
        gameLoss.load();
        gameLoss.play();
        roundResP.textContent = "DOCTOR ROBOTNIK HAS TAKEN OVER!";
        endGame();
    }
 
}

function updateScore(){
    document.querySelector('#scoreP').innerHTML = `PLAYER: ${playerPts}<br> 
        ROBOTNIK: ${cpuPts}`;
}

/** 
 * Returns string that is 'rock', 'paper', or 'scissor'
 * 
 * @param {number} num : numerical rep. of Rock, Paper, or Scissor
 */
function getRockPaperScissors (num){
    switch(num){
        case 1:
            return rock;
        case 2:
            return paper;
        case 3:
            return scissors;
    }
}

/**
 * Returns capitalized version of string.
 * 
 * works with empty strings too!
 * @param {*} str 
 * @returns capitalized version of str
 */

 function CapFirstLetterStr(str) {
    let len = str.length;
    return str.slice(0,1).toUpperCase() + str.slice(1,len).toLowerCase();
}

//EVENT LISTENERS:


const choiceBtns = document.querySelectorAll('.choiceBtns');
const gameBtn = document.querySelector('#gameBtn');
const roundResP = document.querySelector('#roundResP');

const divChoice = document.querySelector('#choiceContainer');

//Creates rock, paper, scissor, buttons then sets itself to invisible.
gameBtn.addEventListener('click', () => {
    roundResP.textContent = 'Choose Tails, Sonic, Or Knuckles';
    document.querySelector("#gameLoss").pause();
    document.querySelector("#gameWin").pause();
    document.querySelector('#backMusic').play();
    document.querySelector('#introContainer').style.display = 'none';
    document.querySelector('#roundInfoContainer').style.display = 'flex';

    const rockBtn = document.createElement('button');
    rockBtn.setAttribute("id", 'rockBtn');
    rockBtn.innerHTML = '<img  id="rockImg" class="choiceImg" \
        draggable="false" src="./imgs/TailsLarge.jpg"><img>';
    //rockBtn.textContent = rock.toUpperCase();
    
    const paperBtn = document.createElement('button');
    paperBtn.setAttribute("id", 'paperBtn');
    paperBtn.innerHTML = '<img id="paperImg" class="choiceImg" \
        draggable="false" src="./imgs/SonicLarge.jpg"><img>';
    //paperBtn.textContent = paper.toUpperCase();

    const scissorBtn = document.createElement('button');
    scissorBtn.setAttribute("id", 'scissorBtn');
    scissorBtn.innerHTML = '<img id="scissorImg" class="choiceImg" \
       draggable="false" src="./imgs/KnucklesLarge.jpg"><img>';
    //scissorBtn.textContent = scissors.toUpperCase();

    divChoice.appendChild(rockBtn);
    divChoice.appendChild(paperBtn);
    divChoice.appendChild(scissorBtn);

});

// Listen to any clicks on div then use bubbling to determine which btn
// Required otherwise dynamically created buttons will not attach listener to
divChoice.addEventListener('click', function(e){
    if(e.target){
        if(e.target.id === 'rockImg'){
            playRound(rock);
        } else if (e.target.id === 'paperImg'){
            playRound(paper);
        } else if (e.target.id === 'scissorImg'){
            playRound(scissors);
        }
    
    }
})

/**
 * Asks the player if they want to play again
 * 
 */
 function endGame(){
    removeChoiceBtns();
    playerPts = 0;
    cpuPts = 0;
    document.querySelector('#introTxt').textContent = 'Dr. Robotnik has challenged \
        you to another game of Tails, Sonic, and Knuckles!';
    document.querySelector('#introContainer').style.display = 'flex';
    document.querySelector('#roundInfoContainer').style.display = 'none';
    document.querySelector('#scoreP').classList.remove('playing'); //Fixes scoreP transition bug.
}

function removeChoiceBtns(){
    divChoice.removeChild(rockBtn);
    divChoice.removeChild(paperBtn);
    divChoice.removeChild(scissorBtn);
}

//TRANSITIONS
function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    
}

const buttonPresses = document.querySelectorAll('.transitionP');
buttonPresses.forEach(buttonPress => buttonPress.addEventListener('transitionend', removeTransition));


