
let choices = ["rock", "paper", "scissors"]

//*************  4. Game Statistics Object ********* */

let gameStats = { wins: 0, 
                  losses: 0, 
                  ties: 0 
                };

//*********  5. Player Object  ************ */       

let player = { 
                choice: null 
             };

//***********  Your Choice  ************** */

function playRock() {

    player.choice = "rock"
    playGame();
}

function playPaper() {

    player.choice = "paper"
    playGame();
}

function playScissors() {

    player.choice = "scissors"
    playGame();
}


function playGame(){
    let isAlive = true;
    if(isAlive){
       
        let computerchoice = getComputerChoice();
    
        console.log("Your Choice: "+  player.choice)
        document.getElementById("player-choice").innerText = "Your Choice: "+  player.choice;
        
        console.log("Computer's Choices: "+ computerchoice)
        document.getElementById("computer-choice").innerText = "Computer's Choices: "+ computerchoice;
        compareChoices(player.choice, computerchoice);
    }
}

//********** Computer Choice ********** */

function getComputerChoice(){

    return choices[Math.floor(Math.random() * choices.length)];
}

//******** Compare Choice ************* */

function compareChoices(playerchoice, computerchoice){
    if(playerchoice===computerchoice){
        displayMessage("It's a tie!");
        gameStats.ties++;        
    } else if(
        (playerchoice === "scissors" && computerchoice === "paper") ||
        (playerchoice === "rock" && computerchoice === "scissors") ||
        (playerchoice === "paper" && computerchoice === "rock"))
    {
        displayMessage("You Win! "+playerchoice+ " beats "+ computerchoice+".");
        gameStats.wins++;
    } else{
        displayMessage("You lose! "+computerchoice+" beats "+playerchoice+".");
        gameStats.losses++;
        
    }
    updateGameStats();

}

function displayMessage(displaymsg){

    document.getElementById("message").innerText = displaymsg;

}

function updateGameStats(){

    document.getElementById("game-stats").innerText = "Wins: "+gameStats.wins+" | Losses: "+gameStats.losses+" | Ties: "+gameStats.ties;

}
