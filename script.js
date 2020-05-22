
$(document).ready(function () {
	var magic8Ball = {}
	magic8Ball.listOfAnswers = ["Yes", "No", "Try Again Later", "Maybe", "Most Definetly"];
	$("#answer").hide();
	var questionButton = document.getElementById("questionButton");
	var answer = document.getElementById("answer")

	$("#answer").hide();

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

	//wait half a second before showing prompt
	setTimeout(
		function () {
			//show prompt
			var question = prompt("Ask a yes or no question")
			magic8Ball.askQuestion(question)
		}, 500);

	magic8Ball.askQuestion = function (question) {
		$("#8ball").effect("shake");
		var randomNumber = Math.random();
		var randomNumberlistOfAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberlistOfAnswers);
		var answer = this.listOfAnswers[randomIndex];
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
		$("#answer").text(answer);
		$("#answer").hide();
		$("#answer").fadeIn(4000);
		console.log(question);
		console.log(answer);
	};

	$("#questionButton").click(onClick);
});	