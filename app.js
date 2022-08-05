//Functional Rock Paper Scissors, BUT incorrectly follows some Odin
//Steps. Try Again...

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
 * @param {string} playerSelection (Rock, Paper, or Scissors) 
 * @param {string} computerSelection (Rock, Paper, or Scissors)
 * @returns {string} result of the rock paper scissor round
 */
function playRound(playerSelection, computerSelection){
    let playerResult = RocPapSciMatrix[playerSelection.toLowerCase()][computerSelection.toLowerCase()];
    switch(playerResult){
        case 'win':
            return "You Win! " + playerSelection + " beats " + computerSelection;
        case 'tie':
            return "Tie! " + playerSelection + " ties " + computerSelection;
        case 'lose':
            return "You Lose! " + playerSelection + " loses to " + computerSelection;
    }
}

/**
 * Plays the game of Rock Paper Scissors 
 * Reports who won each round and finally outputs the end of the game
 * Initially will only use console.log
 * 
 */
function game(){
    let playGame = true;
    let playerScore = 0;
    let computerScore = 0;

    //assuming game is best of 5, where tie extends the game.
    while(playGame){
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection)); //console.log for now

        let playerResult = RocPapSciMatrix[playerSelection][computerSelection];

        switch (playerResult){
            case 'win':
                playerScore++;
                break;
            case 'lose':
                computerScore++;
                break;
            default:
                break;
        }
        playGame = endGame(playerScore, computerScore);
    }
    console.log(playerScore > computerScore ? 
        `The Player wins! Final Score: ${playerScore} to ${computerScore}` : 
        `The Computer wins! Final Score: ${computerScore} to ${playerScore}`);
}

//Helper Functions and Values

/**
 * Checks if computer or player has won the game.
 * if someone has won returns false, else returns true.
 * 
 * @params {number} playerScore
 * @params {number} computerScore
 * @return {boolean} playGame
 */
function endGame(playerScore, computerScore){
    if (computerScore === 3 || playerScore == 3){
        return false;
    }
    return true;

}


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
 * Returns string that is 'Rock', 'Paper', or 'Scissor'
 * 
 * @param {number} num : numerical rep. of Rock, Paper, or Scissor
 */
function getRockPaperScissors (num){
    switch(num){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

/**
 * Returns the either Rock, Paper, or Scissors based on user input
 */
function getPlayerChoice(){
    let playerChoice = "";
    let noChoice = true;
    
    while (noChoice){
        playerChoice = prompt("Please enter Rock, Paper, or Scissor", "");
        playerChoice = capitalizeStr(playerChoice);
        
        switch(playerChoice){
            case "Rock":
                return "Rock";
            case "Paper":
                return "Paper";
            case "Scissor":
                return "Scissor";
        }
        alert("Incorrect value entered, please try again!");
    }

}

/**
 * Returns capitalized version of string.
 * 
 * works with empty strings too!
 * @param {*} str 
 * @returns capitalized version of str
 */

function capitalizeStr(str) {
    let len = str.length;
    return str.slice(0,1).toUpperCase() + str.slice(1,len).toLowerCase();
}