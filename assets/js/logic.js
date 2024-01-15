// Global Variables
// start screen variables
const startContainer = document.getElementById("start-screen");
const startButton = document.getElementById("start");

// question screen variables
const questionContainer = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let questionChoices = document.getElementById("choices");

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
   displayQuestion();
}

// fucntion for displaying questions from the list

let questionIndex = 0; // stores the current index of the questions list

function displayQuestion() {
   questionContainer.classList.remove("hide");
   const currentQuestion = questions[questionIndex].title;
   questionTitle.textContent = currentQuestion;
}


// Event Listeners
startButton.addEventListener("click", startQuiz);