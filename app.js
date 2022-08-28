//Rock Paper Scissors with UI!

//GLOBAL VARIABLES:
let playerChoice = '';
let computerChoice = '';
let playerPts = 0;
let cpuPts = 0;



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
    switch(playerResult){
        case 'win':
            playerPts++;
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
            break;
        case 'tie':
            console.log(`Tie! ${playerChoice} ties ${computerChoice}`);
            break;
        case 'lose':
            cpuPts++;
            console.log(`You Lose! ${playerChoice} loses to ${computerChoice}`);
            break;
    }
    gameStatus();
}

/**
 * Checks if the computer or player has reached enough points to win the game
 * Calls end game if either the player or cpu wins.
 */
function gameStatus(){
    if (playerPts >= 3){
        console.log("Player Wins")
        endGame();
    } else if (cpuPts >= 3){
        console.log("CPU Wins");
        endGame();
    }
 
}

//Helper Functions and Values




/**
 * Returns if player lose , tie  or win.
 * Player choice is row, Computer Choice is Column, inner object values are results
 * of the player choice versus computer choice
*/
const RocPapSciMatrix = {
    rock:{
        rock: 'tie',
        paper: 'lose',
        scissors: 'win',
    },
    paper:{
        rock: 'win',
        paper: 'tie',
        scissors: 'lose' 
    },
    scissors:{
        rock: 'lose',
        paper: 'win',
        scissors: 'tie'
    }
};

/** 
 * Returns string that is 'rock', 'paper', or 'scissor'
 * 
 * @param {number} num : numerical rep. of Rock, Paper, or Scissor
 */
function getRockPaperScissors (num){
    switch(num){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
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

//Checks the buttons that are clicked. If they are rock paper or scissor buttons
//the will call playRound using either rock paper or scissors based on what button
//was pressed

const divChoice = document.querySelector('#choiceContainer');

//Creates rock, paper, scissor, buttons then sets itself to invisible.
gameBtn.addEventListener('click', () => {
    gameBtn.style.display = 'none';
    
    const rockBtn = document.createElement('button');
    rockBtn.setAttribute("id", 'rockBtn');
    rockBtn.textContent = "ROCK";
    
    const paperBtn = document.createElement('button');
    paperBtn.setAttribute("id", 'paperBtn');
    paperBtn.textContent = "PAPER";

    const scissorBtn = document.createElement('button');
    scissorBtn.setAttribute("id", 'scissorBtn');
    scissorBtn.textContent = "SCISSORS";

    divChoice.appendChild(rockBtn);
    divChoice.appendChild(paperBtn);
    divChoice.appendChild(scissorBtn);

});

// Listen to any clicks on div then use bubbling to determine which btn
// Required otherwise dynamically created buttons will not attach listener to
divChoice.addEventListener('click', function(e){
    if(e.target){
        if(e.target.id === 'rockBtn'){
            playRound('rock');
        } else if (e.target.id === 'paperBtn'){
            playRound('paper');
        } else if (e.target.id === 'scissorBtn'){
            playRound('scissors');
        }
    
    }
})

/**
 * Asks the player if they want to play again
 * 
 */
 function endGame(){
    divChoice.removeChild(rockBtn);
    divChoice.removeChild(paperBtn);
    divChoice.removeChild(scissorBtn);
    playerPts = 0;
    cpuPts = 0;
    gameBtn.style.display='flex';
}