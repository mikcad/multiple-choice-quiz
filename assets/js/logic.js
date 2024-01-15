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

// timer variables
const timerContianer = document.getElementById("timer-container");
let timerDisplay = document.getElementById("time");

// highscore variables
const highScore = document.getElementById("scores");


// Functions
// fucntion that runs when the start button is clicked
function startQuiz () {
   startContainer.classList.add("hide");
   questionContainer.classList.remove("hide");
   displayQuestion();
}

// stores the current index of the questions list
let questionIndex = 0; 
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
   for (let i = 0; i < choices.length; i++) {
      const choiceButton = document.createElement("button");
      questionChoices.appendChild(choiceButton);
      choiceButton.textContent = choices[i];
      choiceButton.addEventListener("click", function() {
         console.log(questionIndex);
         if (choices[i] === answer) {
            console.log("correct", choices[i]);
            scoreCount += 10;
            console.log("current score:", scoreCount);
            nextQuestion();
         } else {
            console.log("incorrect", choices[i]);
            nextQuestion();
         }
      })
   }
}

//  function to go to the next question and increment the current questionIndex
function nextQuestion() {
   questionIndex++;
   
   if (questionIndex < questions.length) {
      displayQuestion();
   } else {
      console.log("End of the quiz");
      endQuiz();
   }
}

let scoreCount = 0; // stores the score of the player
// fucntion to end the quiz
function endQuiz() {
   // add the final score to the endscreen
   finalScore.textContent = scoreCount;
   questionContainer.classList.add("hide");
   endContainer.classList.remove("hide");
}

// Event Listeners
startButton.addEventListener("click", startQuiz);