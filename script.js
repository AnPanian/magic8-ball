$(document).ready(function () {
	var magic8Ball = {}
	magic8Ball.listOfAnswers = ["Yes", "No", "Try Again Later", "Maybe", "Most Definetly"];
	var questionButton = document.getElementById("questionButton");

	var onClick = function () {

		var question = prompt("ASK A YES/NO QUESTION!");
		magic8Ball.askQuestion(question);

	};
	magic8Ball.askQuestion = function (question) {
		var randomNumber = Math.random();
		var randomNumberlistOfAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberlistOfAnswers);
		var answer = this.listOfAnswers[randomIndex];

		console.log(question);
		console.log(answer);
	};

	$("#questionButton").click(onClick);
});	