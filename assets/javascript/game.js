var scoreMatch;
var wins;
var losses;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
var userScore;

function startGame (){
	userScore = 0;

	// Getting a random number between 19-120 for the game 
	scoreMatch = 19 + (Math.floor(Math.random()*102));

	// Getting random values for each crystal between 1-12
	crystalValue1 = Math.floor(1 + (Math.random()*12));
	console.log(crystalValue1);
	crystalValue2 = Math.floor(1 + (Math.random()*12));
	crystalValue3 = Math.floor(1 + (Math.random()*12));
	crystalValue4 = Math.floor(1 + (Math.random()*12));

	$('#randomScore').html("" + scoreMatch);

}

startGame()