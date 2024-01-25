// Global Variables
// start screen variables
const startContainer = document.getElementById("start-screen");
const startButton = document.getElementById("start");

// question screen variables
const questionContainer = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
const questionChoices = document.getElementById("choices");

// end screen variables
const endContainer = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let playerInitials = document.getElementById("initials");
const submitButton = document.getElementById("submit");

// feedback variables
let quizFeedback = document.getElementById("feedback");

// timer variables
const timerContainer = document.getElementById("timer-container");
let timerDisplay = document.getElementById("time");



let scoreCount = 0; // stores the score of the player
let questionIndex = 0; // stores the current index of the questions list
let isCorrect = true; // stores the boolean state of the choice selected
let timerCount = 60; // stores the current timer value
var timerInterval; // makes the timerInterval a global variable


// Functions
// fucntion that runs when the start button is clicked
function startQuiz () {
   startContainer.classList.add("hide");
   questionContainer.classList.remove("hide");
   displayQuestion();
   startTimer();
}

// fucntion for displaying questions from the list
function displayQuestion() {
   const currentQuestion = questions[questionIndex].title;
   questionTitle.textContent = currentQuestion;
   displayChoices();
}

// function to create and display buttons for each choice for the current question
function displayChoices() {
   const choices = questions[questionIndex].choices;
   const answer = questions[questionIndex].answer;
   questionChoices.innerHTML = "";
   questionChoices.classList.remove("clicked");
   for (let i = 0; i < choices.length; i++) {
      const choiceButton = document.createElement("button");
      questionChoices.appendChild(choiceButton);
      choiceButton.textContent = choices[i];
      choiceButton.addEventListener("click", function() {
         console.log(questionIndex);
         if (!questionChoices.classList.contains("clicked")) {
            if (choices[i] === answer) {
               isCorrect = true;
               // console.log("correct", choices[i]);
               scoreCount += 10;
               timerCount += 2;
               // console.log("current score:", scoreCount);
               feedback();
               setTimeout(nextQuestion, 2000);
            } else {
               isCorrect = false;
               // console.log("incorrect", choices[i]);
               timerCount -= 8;
               feedback();
               setTimeout(nextQuestion, 2000);
            }
         }
         questionChoices.classList.add("clicked"); // disables the choice button 
      })
   }
}

// function to add feedback when the choice is selected
function feedback() {
   quizFeedback.classList.remove("hide");
   quizFeedback.classList.toggle("feedback-correct", isCorrect);
   quizFeedback.classList.toggle("feedback-incorrect", !isCorrect);
   if (isCorrect === true) {
      quizFeedback.textContent = "Correct! You get +10 points.";
   } else {
      quizFeedback.textContent = "Incorrect! You get -10 seconds.";
   }
}

//  function to go to the next question and increment the current questionIndex
function nextQuestion() {
   questionIndex++;
   quizFeedback.classList.add("hide");
   
   if (questionIndex < questions.length) {
      displayQuestion();
   } else {
      console.log("End of the quiz");
      endQuiz();
   }
}

// fucntion to start a timer for the quiz
function startTimer() {
   timerContainer.classList.remove("hide");
   timerInterval = setInterval(function() {
      timerCount--;
      if (timerCount >= 0) {
         timerDisplay.textContent = timerCount;
      } else {
         endQuiz();
      }
   }, 1000);
}

// fucntion to end the quiz
function endQuiz() {
   // add the final score to the endscreen
   clearInterval(timerInterval);
   finalScore.textContent = scoreCount;
   questionContainer.classList.add("hide");
   endContainer.classList.remove("hide");
}

//fucntion to submit score after completed
function submitScore(event) {
   event.preventDefault();

   const userInitials = playerInitials.value;
   const userScore = scoreCount;

   if (playerInitials.value) {

      localStorage.setItem(userInitials, userScore);
      // localStorage.setItem("score", userScore);
      console.log(localStorage);
      submit.classList.add("clicked");

      window.location.href = "/highscores.html";
   } else {
      alert("Your input box is empty, please enter your initials.");
   }
}


// Event Listeners
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitScore);
