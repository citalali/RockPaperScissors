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
let computerSelection = computerPlay(); // Plays it
var playerSelection = prompt("Rock, Paper, Scissors?");
 

function roundOne ( computerSelection, playerSelection) { // function RoundOne
if ( computerSelection == "Rock" && playerSelection == "Paper" ) {  // if statement Rock beats scissors, paper beats rock, scissors beat paper.
	return "You Win! Paper beats Rock" ;
}
	else if (computerSelection == "Rock" && playerSelection == "Scissors"){
		return "You Lose! Rock beats Scissors";
	}
    else if ( computerSelection == "Paper" && playerSelection == "Scissors" ) {
	     return "You Win! Paper beats Rock" ;
}
	else if (computerSelection == "Paper" && playerSelection == "Rock"){
		return "You Lose! Paper beats Rock";
	}
	else if ( computerSelection == "Scissors" && playerSelection == "Paper" ) {
	return "You Lose! Scissor beats Paper" ;
}
	else if (computerSelection == "Scissors" && playerSelection == "Rock"){
		return "You Win! Rock beats Scissors";
	}
   else {
	   return "tie";

   }
// return string thats says what happened 
}
function game() {
	for (let i = 0; i < 5; i++) {
		roundOne();
		computerSelection = computerPlay();
		playerSelection = prompt("Rock, Paper, Scissors?");
		console.log(roundOne(computerSelection, playerSelection));

	}
}


game();