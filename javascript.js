// start code
// create variables for buttons
// create functions for when button is clicked
var timeLeft = document.getElementById("timerValue");
var commenceQuiz = document.querySelector("#commenceButton");
var questionChoice1 = document.querySelector(".answerChoice1");
var questionChoice2 = document.querySelector(".answerChoice2");
var questionChoice3 = document.querySelector(".answerChoice3");
var questionChoice4 = document.querySelector(".answerChoice4");
var questionPrompt = document.querySelector(".questionPrompt");
var submitButton = document.querySelector(".submitButton");
var answerBtn = document.querySelector(".answer-button");

var secondsLeft = 200;
var indexCounter = 0;
var answerStore;
var correct = 0;
var wrong = 0;

var availableQuestions = [
  {
  question: "Which one is not a data type supported by JavaScript?",
  options: ["Boolean", "Null", "String", "Alerts"],
  correctAnswer: "Alerts",
}, {
  question: "Arrays in JavaScript can be used to store ______ ?",
  options: ["Numbers", "Strings", "Other Arrays", "All of the above"],
  correctAnswer: "All of the above",
}, {
  question: "String values must be enclosed in ____?",
  options: ["Square Brackets", "Quotes", "Curly Brackets", "Dollar Signs"],
  correctAnswer: "Quotes",
}, {
  question: "What is the command combo on PC for pasting? ",
  options: ["ctrl + x", "ctrl + d", "ctrl + x", "ctrl + v"],
  correctAnswer: "ctrl + v",
}]

function startQuiz() {
  commenceQuiz.addEventListener("click", function() {
  timerset();
  commenceQuiz.style.visibility = "hidden"
  displayQuestion1();
  console.log(displayQuestion1);
});
}



function displayQuestion1() {

  questionChoice1.textContent = availableQuestions[indexCounter].options[0];
  questionChoice2.textContent = availableQuestions[indexCounter].options[1];
  questionChoice3.textContent = availableQuestions[indexCounter].options[2];
  questionChoice4.textContent = availableQuestions[indexCounter].options[3];
  questionPrompt.textContent = availableQuestions[indexCounter].question;
  
  questionChoice1.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    displayQuestion2();
  })
  questionChoice2.addEventListener("click", function(){
    correct++;
    indexCounter++;
    displayQuestion2();
  })
  questionChoice3.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    displayQuestion2();
  })
  questionChoice4.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    displayQuestion2();
  });
};

function displayQuestion2() {

  questionChoice1.textContent = availableQuestions[indexCounter].options[0];
  questionChoice2.textContent = availableQuestions[indexCounter].options[1];
  questionChoice3.textContent = availableQuestions[indexCounter].options[2];
  questionChoice4.textContent = availableQuestions[indexCounter].options[3];
  questionPrompt.textContent = availableQuestions[indexCounter].question;

  questionChoice1.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    displayQuestion3();
  })
  questionChoice2.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    displayQuestion3();
  })
  questionChoice3.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    displayQuestion3();
  })
  questionChoice4.addEventListener("click", function(){
    correct++;
    indexCounter++;
    displayQuestion3();
  })
}
function displayQuestion3() {

  questionChoice1.textContent = availableQuestions[indexCounter].options[0];
  questionChoice2.textContent = availableQuestions[indexCounter].options[1];
  questionChoice3.textContent = availableQuestions[indexCounter].options[2];
  questionChoice4.textContent = availableQuestions[indexCounter].options[3];
  questionPrompt.textContent = availableQuestions[indexCounter].question;

  questionChoice1.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    displayQuestion4();
  })
  questionChoice2.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    displayQuestion4();
  })
  questionChoice3.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    displayQuestion4();
  })
  questionChoice4.addEventListener("click", function(){
    correct++;
    indexCounter++;
    displayQuestion4();
  })
}
function displayQuestion4() {

  questionChoice1.textContent = availableQuestions[indexCounter].options[0];
  questionChoice2.textContent = availableQuestions[indexCounter].options[1];
  questionChoice3.textContent = availableQuestions[indexCounter].options[2];
  questionChoice4.textContent = availableQuestions[indexCounter].options[3];
  questionPrompt.textContent = availableQuestions[indexCounter].question;

  questionChoice1.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    gameOver();
  })
  questionChoice2.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    gameOver();
  })
  questionChoice3.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 10;
    gameOver();
  })
  questionChoice4.addEventListener("click", function(){
    correct++;
    indexCounter++;
    gameOver();
  })
}



function correctEval () {
  if (answerStore === correctAnswer) {
    indexCounter++;
    changeQuestion();
  } else {
    
  }

}

function timerset() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.innerHTML = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          gameOver();
        }
        return 0;
      }, 1000);
}


function gameOver() {
    timeLeft.innerHTML = "0";
    questionPrompt.textContent = "";
    answerBtn.textContent = "";
}

startQuiz();