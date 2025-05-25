let num1, num2;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;
  document.getElementById('question').innerText = `What is ${num1} + ${num2}?`;
  document.getElementById('answer').value = '';
  document.getElementById('result').innerText = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const correctAnswer = num1 + num2;
  const resultEl = document.getElementById('result');

  if (isNaN(userAnswer)) {
    resultEl.innerText = "Please enter a number.";
    resultEl.style.color = "orange";
  } else if (userAnswer === correctAnswer) {
    resultEl.innerText = "✅ Correct!";
    resultEl.style.color = "green";
  } else {
    resultEl.innerText = `❌ Incorrect! The answer was ${correctAnswer}`;
    resultEl.style.color = "red";
  }
}

// Generate first question on load
generateQuestion();
