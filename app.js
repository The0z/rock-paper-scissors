/*Function getComputerChoice
    acts as the computers choice
    uses a random number generator to randomly return a number
    this number will correlate to either Rock, Paper, or Scissors
    then returns computerChoice
*/


/**
 * Returns the computerChoice for Rock, Paper, Scissors.
 */
function getComputerChoice(){
    let randNum = Math.floor(1 + Math.random() * 3); //Returns 1,2, or 3.
    return getRockPaperScissor(randNum);
}


//Helper Functions

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