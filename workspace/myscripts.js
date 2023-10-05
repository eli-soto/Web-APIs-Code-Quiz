var startBtnEl = document.getElementById("startBtn"); // where startBtnEl
var timerEl = document.getElementById("timer");
var welcomeContainer = document.querySelector(".quiz-intro");
var questionsContainer = document.querySelector(".questions-screen");
var questionEl = document.querySelector(".question-element");
var btnContainer = document.querySelector(".btn-container");
var quizEndContainer = document.querySelector(".quiz-finished-screen");

var count = 9;
var currentIndex = 0;

var questions = [
  {
    question: "What is json?",
    options: ["A script", "javaScript Object Notation", "Object Programing Language", "None of the above"],
    answer: "Object Programing Language"
  },
  {
    question: "What is nodeJS?",
    options: ["A script", "javaScript Object Notation", "javeScript Runtime Env", "None of the above"],
    answer: "javeScript Runtime Env"
  },
  {
    question: "What is HTML?",
    options: ["Hypertech Multimedia Lang", "javaScript Object Notation", "Object Programing Language", "None of the above"],
    answer: "Hypertech Multimedia Lang"
  }
];



function displayTimer() {
  var timer = setInterval(function() {
    timerEl.textContent = "Timer: " + count; 
    count--;
    if(count <= 0) {
      timerEl.textContent = "Timer: 00:00";
    clearInterval(timer)
    //endQuiz()
  }
}, 1000)
}

function startQuiz() {
  welcomeContainer.style.display = "none";
  questionsContainer.style.display = "block";
  btnContainer.innerHTML = "";
  questionEl.textContent = "";
  questionEl.textContent = questions[currentIndex].question;
  var choices = questions[currentIndex].options;
  for (let i = 0; i < choices.length; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn")
    btn.innerHTML = choices[i];
    btn.onclick = optionsTarget;
    btnContainer.appendChild(btn)
  }
}

function optionsTarget(event) {
  //alert(event.target.textContent)
  currentIndex++;
  if (currentIndex === questions.length ) {
    endQuiz();
  } else {
    startQuiz();
  }
}

function endQuiz() {
    questionsContainer.style.display = "none";
    quizEndContainer.style.display = "block";

}

startBtnEl.addEventListener("click", function() {
  displayTimer();
  startQuiz(); 
});

