var score = 0;

function generateQuestion() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operator = Math.random() < 0.5 ? '+' : '*';
  var question, answer;

  if (operator === '+') {
    question = num1 + " + " + num2;
    answer = num1 + num2;
  } else {
    question = num1 + " * " + num2;
    answer = num1 * num2;
  }

  return {
    question: question,
    answer: answer
  };
}

function checkAnswer() {
  var userAnswer = document.getElementById("input").value;
  if (userAnswer === "") {
    document.getElementById("feedback").innerText = "Veuillez entrer une réponse.";
    return;
  }

  userAnswer = parseInt(userAnswer, 10);

  if (userAnswer == currentQuestion.answer) {
    document.getElementById("feedback").innerText = "Correct!";
    document.getElementById("feedback").className = "correct";
    score++;
  } else {
    document.getElementById("feedback").innerText = "Incorrect. Essayez encore.";
    document.getElementById("feedback").className = "incorrect";
    score = Math.max(0, score - 1);
  }

  document.getElementById("score-value").innerText = score;

  currentQuestion = generateQuestion();
  document.getElementById("question").innerText = currentQuestion.question;
  document.getElementById("input").value = "";
}

var currentQuestion = generateQuestion();
document.getElementById("question").innerText = currentQuestion.question;