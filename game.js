function computerPlay() {
	let handOneNum = Math.floor(Math.random()*3); // returns random number: 0, 1 or 2
    let handOne = "0"; // Holds our Rock, Paper or Scissors
	if (handOneNum === 0) {    // if statement to determine what handOne is
		handOne = "Paper";
	}
	else if (handOneNum === 1) {
		handOne = "Scissors";
	}
	else {
		handOne = "Rock";
	}
	return handOne;
}
let computerSelection ; // var holds random computer selection
var playerSelection ; // var holds our player selection
var computerScore = 0; // keeps the score
var playerScore = 0;
 
const Results = document.querySelector('#Results');
Results.style.backgroundColor = 'pink';




const selectionUser = document.querySelectorAll('button'); // (makes selectionPlayer into a nodelist)
selectionUser.forEach((button) => {
	button.addEventListener('click', () => {
				if (playerScore < 5 && computerScore < 5) {
		playerSelection = button.id;
		computerSelection = computerPlay();
        Results.textContent = roundOne(computerSelection, playerSelection) + ' Your Score: ' + playerScore + ' Computer Score: ' + computerScore ; }
		else {
			Results.textContent = findWinner();
			Results.style.backgroundColor = 'blue';
		}
		

	});
}); 




 function roundOne ( computerSelection, playerSelection) { // function RoundOne
if ( computerSelection == "Rock" && playerSelection == "Paper" ) {  // if statement Rock beats scissors, paper beats rock, scissors beat paper.
		playerScore++;  // increments the score
	return "You Win! Paper beats Rock" ;
}
	else if (computerSelection == "Rock" && playerSelection == "Scissors"){
		computerScore++;
		return "You Lose! Rock beats Scissors";
	}
    else if ( computerSelection == "Paper" && playerSelection == "Scissors" ) {
		playerScore++;
	     return "You Win! Paper beats Rock" ;
		
}
	else if (computerSelection == "Paper" && playerSelection == "Rock"){
		computerScore++ ;
		return "You Lose! Paper beats Rock";
		
	}
	else if ( computerSelection == "Scissors" && playerSelection == "Paper" ) {
		computerScore++ ;
	return "You Lose! Scissor beats Paper" ;
}
	else if (computerSelection == "Scissors" && playerSelection == "Rock"){
		playerScore++ ;
		return "You Win! Rock beats Scissors";
	}
   else {
	   return "tie";

   }
// return string thats says what happened 
}
/*
function playGame() {   // plays the game 5 times
	for (let i = 0; i < 5; i++) {
		roundOne();
		computerSelection = computerPlay();
		playerSelection = prompt("Rock, Paper, Scissors?");
		console.log(roundOne(computerSelection, playerSelection));
		
		}
	}
	
	
playGame();
*/





function findWinner () {     // finds the winner and console.logs it.
 if ( playerScore > computerScore ) {
			return "YOU WON";
		}
		else if ( computerScore > playerScore) {
			return "YOU LOST";
		}
		else {
			return "TIE";
		} 

	
}
// findWinner(); 