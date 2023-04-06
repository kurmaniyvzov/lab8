let questions = [
	"What is the capital of France?",
	"Who is the first person to step on the moon?",
	"What is the largest planet in our solar system?",
	"In which Italian city can you find the Colosseum?",
	"Which country is the footballer Cristiano Ronaldo from?"
];
let answers = ["Paris", "Neil Armstrong", "Jupiter", "Rome", "Portugal"];
let choice_options = [
	["Rome", "Paris", "Berlin", "Madrid"],
	["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
	["Mars", "Venus", "Saturn", "Jupiter"],
	["Venice", "Rome", "Naples", "Milan"], 
	["Spain", "Brazil", "Uruguay", "Portugal"]
];

$(document).ready(function() {
	let quiz_box = $("#quiz-box");
	for (let i = 0; i < questions.length; i++) {
		let question_div = $("<div>").addClass("question").text(questions[i]);
		let answer_div = $("<div>").addClass("answer");
		for (let j = 0; j < choice_options[i].length; j++) {
			let label = $("<label>").text(choice_options[i][j]);
			let radio = $("<input>").attr({
				type: "radio",
				name: "question" + i,
				value: choice_options[i][j]
			});
			label.prepend(radio);
			answer_div.append(label);
		}
		quiz_box.append(question_div);
		quiz_box.append(answer_div);
	}


	$(".button-3").click(function() {
		let score = 0;
		for (let i = 0; i < questions.length; i++) {
			let selected = $("input[name='question" + i + "']:checked").val();
			if (selected === answers[i]) {
				score++;
			}
		}
		$("#quiz-box").append("<p>Your score: " + score + " out of " + questions.length + "</p>");
		$(".button-3").hide();
	});
});
