// CrystalsCollector Game

$(document).ready(function() {
	var scoreMatch;
	var wins = 0;
	var losses = 0;
	var crystalValue1;
	var crystalValue2;
	var crystalValue3;
	var crystalValue4;
	var userScore;

	// Resetting the game
	function startGame (){
		userScore = 0;

		// Getting a random number between 19-120 for the game 
		scoreMatch = 19 + (Math.floor(Math.random()*102));

		// Getting random values for each crystal between 1-12
		crystalValue1 = Math.floor(1 + (Math.random()*12));
		crystalValue2 = Math.floor(1 + (Math.random()*12));
		crystalValue3 = Math.floor(1 + (Math.random()*12));
		crystalValue4 = Math.floor(1 + (Math.random()*12));
		
		$('#randomScore').html(scoreMatch);
		$('#totalScore').html(userScore);
		$('#winsScore').html('Wins: ' + wins);
		$('#lossesScore').html('Losses: ' + losses);
	}

	// Updating the user's total score
	function updateResults(someValue){
		// Determines what crystal value to add to the user's score
		switch(someValue) {
			case 'value1':
				userScore += crystalValue1;
			break;
			case 'value2':
				userScore += crystalValue2;
			break;
			case 'value3':
				userScore += crystalValue3;
			break;
			case 'value4':
				userScore += crystalValue4;
			break;
		}

		$('#totalScore').html(userScore);
	}

	// When a round is complete, check if it's a win or loss
	function roundComplete(score) {
		if (userScore == scoreMatch) {
			console.log('you win');
			wins++;
			$('#loss_win').html('You won!');
			startGame();
		}
		else if(userScore > scoreMatch) {
			console.log('you lose');
			losses++;
			$('#loss_win').html('You lost!');
			startGame();
		}
	}
// Starting the game...
	startGame()

	$('.images').click(function(){
		var value = $(this).attr('value');
		updateResults(value);
		roundComplete();
	});
})