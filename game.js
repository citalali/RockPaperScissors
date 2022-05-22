function computerPLay() {
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

	console.log (handOne); // logs to console
}
computerPLay(); // Plays it