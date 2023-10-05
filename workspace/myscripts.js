// references to html elements 
var startBtnEl = document.getElementById("startBtn"); // where startBtnEl
var timerEl = document.getElementById("timer");
var welcomeContainer = document.querySelector(".quiz-intro");
var questionsContainer = document.querySelector(".questions-screen");
var questionEl = document.querySelector(".question-element");
var btnContainer = document.querySelector(".btn-container");
var quizEndContainer = document.querySelector(".quiz-finished-screen");


var count = 60; //why nine 
var currentIndex = 0;  //makes sense starts count with, index of some array
var timer 
var questions = [            
  {
    question: "What is json?",         //element //object  
    options: ["A script", "javaScript Object Notation", "Object Programing Language", "None of the above"],   //array of objects
    answer: "Object Programing Language"
  },
  {
    question: "What is nodeJS?",
    options: ["A script", "javaScript Object Notation", "javeScript Runtime Env", "None of the above"],        //element //object
    answer: "javeScript Runtime Env"
  },
  {
    question: "What is HTML?",
    options: ["Hypertech Multimedia Lang", "javaScript Object Notation", "Object Programing Language", "None of the above"],  //element //object
    answer: "Hypertech Multimedia Lang"
  }
];



function displayTimer() {
  timer = setInterval(function() {  //browswer api allows apps to communicate 
    timerEl.textContent = "Timer: " + count; //
    count--; //subtract 1 
    if(count <= 0) {  
      timerEl.textContent = "Timer: 00:00";
    clearInterval(timer)
    //endQuiz()
  }
}, 1000)  //function within set interval will be called every 1 secs
}

function startQuiz() {
  welcomeContainer.style.display = "none";
  questionsContainer.style.display = "block";
  btnContainer.innerHTML = ""; //empty out
  questionEl.textContent = ""; //empty out
  questionEl.textContent = questions[currentIndex].question; //1st elements of the questions array with an object. and we are picking the value of the property(its akey) questions
  var choices = questions[currentIndex].options; 
  for (let i = 0; i < choices.length; i++) {
    var btn = document.createElement("button"); //create an element, button
    btn.setAttribute("class", "btn") //creating an attribute class= btn
    btn.innerHTML = choices[i];       //giving html content to our button. i=0 
    btn.onclick = optionsTarget;       // ()=method no () is a method    //4 options
    btnContainer.appendChild(btn)     //append each buttton add text content
  }
}

function optionsTarget(event) {
  //alert(event.target.textContent)
  currentIndex++;
  if (currentIndex === questions.length ) {  //if condition is met 
    endQuiz();
  } else {
    startQuiz();
  }
}

function endQuiz() {
    questionsContainer.style.display = "none";
    quizEndContainer.style.display = "block";
    clearInterval(timer)

}

startBtnEl.addEventListener("click", function() {
  displayTimer();
  startQuiz(); 
});

