//Functional Rock Paper Scissors, BUT incorrectly follows some Odin
//Steps. Try Again...

/**
 * Returns the computerChoice for Rock, Paper, Scissors.
 */
function getComputerChoice(){
    let randNum = Math.floor(1 + Math.random() * 3); //Returns 1,2, or 3.
    return getRockPaperScissor(randNum);
}

/**
 * Returns 0 if the computer won and 1 if the player won
 * 0 = player loss, 1 = player tie, 2 = player wins.
 *
 * @returns {number} result
 */
function playRound(){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log('Player Choice is :', playerChoice); 
    console.log("Computer Choice is:", computerChoice);
    return RocPapScisMatrix[playerChoice.toLowerCase()][computerChoice.toLowerCase()];
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
        let roundRes = playRound();
        switch(roundRes){
            case 0:
                console.log("Computer Wins the Round")
                computerScore++;
                break;
            case 1:
                console.log("It's a Tie!")
                break;
            case 2: 
                console.log("Player Wins the Round!")
                playerScore++;
                break;
        }
        if (computerScore === 3 ){
            console.log("The Computer has won the Game! Whahahahaha")
            return;

        } else if (playerScore === 3){
            console.log("You, the Player has won the Game!")
            return;
        }

    }
}

//Helper Functions and Values

/**
 * Returns if player lose (0), tie (1) or win (2).
 * Player choice is row, Computer Choice is Column, inner object values are results
 * of the player choice versus computer choice
*/
const RocPapScisMatrix = {
    rock:{
        rock: 1,
        paper: 0,
        scissor: 2,
    },
    paper:{
        rock: 2,
        paper: 1,
        scissor: 0 
    },
    scissor:{
        rock: 0,
        paper: 2,
        scissor: 1
    }
};

/** 
 * Returns string that is 'Rock', 'Paper', or 'Scissor'
 * 
 * @param {number} num : numerical rep. of Rock, Paper, or Scissor
 */
function getRockPaperScissor (num){
    switch(num){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
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