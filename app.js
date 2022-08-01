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


/** 
 * Returns string that is 'Rock', 'Paper', or 'Scissors'
 * 
 * @param {number} num : numerical rep. of Rock, Paper, or Scissors
 */
function getRockPaperScissor (num){
    switch(num){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
