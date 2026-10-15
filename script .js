let questions = [
  {
    question: "1. which language is used for web development?",
    answers: ["HTML", "CSS", "Javascript", "All of these"],
    correct: 3,
  },

  {
    question: "2. which is the full form of css?",
    answers: [
      "computer style sheets",
      "cascading style sheets",
      "creative style system",
      "colorful sheets style",
    ],
    correct: 1,
  },
  {
    question: "3. Which HTML tag creates a paragraph?",
    answers: ["<p>", "<para>", "<text>", "<pg>"],
    correct: 0,
  },
  {
    question: "4. Which method is used to add an element at the end of an array?",
    answers: ["push()", "shift()", "push()", "pop()"],
    correct: 0,
  },
  {
    question: "5. HTML Stands for?",
    answers: [
      "hyper text markup language",
      "high text machine language",
      "home text markup language",
      "hyper tool multi language",
    ],
    correct: 0,
  },
];

let currentquestion = 0;
let score = 0;

let questionText = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-button");
let scoreText = document.getElementById("score");

function questionshow() {
  let ques = questions[currentquestion];

  questionText.innerText = ques.question;
  answerButtons.innerHTML = "";

  ques.answers.forEach((answer, index) => {
    let button = document.createElement("button");

    button.innerText = answer;
    button.classList.add("answer");

    button.addEventListener("click", function () {
      checkAnswer(index, button);
    });

    answerButtons.appendChild(button);
  });

  nextButton.style.display = "none";
}

function checkAnswer(index, button) {
  let correctAnswer = questions[currentquestion].correct;
  let buttons = answerButtons.children;

  for (let btn of buttons) {
    btn.disabled = true;
  }

  if (index === correctAnswer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    buttons[correctAnswer].classList.add("correct");
  }

  nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", function () {
  currentquestion++;

  if (currentquestion < questions.length) {
    questionshow();
  } else {
    showResult();
  }
});

function showResult() {
  questionText.innerText = "Quiz Completed!";
  answerButtons.innerHTML = "";

  nextButton.style.display = "none";

  scoreText.innerText = "Your Score: " + score + "/" + questions.length;

  let restartButton = document.createElement("button");
  restartButton.innerText = "Play Again";
  restartButton.classList.add("answer");

  restartButton.addEventListener("click", function () {
    currentquestion = 0;
    score = 0;
    scoreText.innerText = "";
    questionshow();
  });

  answerButtons.appendChild(restartButton);
}

questionshow();
