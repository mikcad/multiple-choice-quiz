// highscore variables
const highScore = document.getElementById("highscores");
const clearButton = document.getElementById("clear");


function displayScores() {
   for (let i = 0; i < localStorage.length; i++) {
      const userInitials = localStorage.key(i);
      const userScore = localStorage.getItem(userInitials);
      const displayScores = document.createElement("li");
      displayScores.innerHTML += `${userInitials}: ${userScore} <br/>`;
      highScore.appendChild(displayScores)
   }
}

// function to clear highscores
function clearScores() {
   // event.preventDefault();
   localStorage.clear();
   // console.log(localStorage);
   highScore.innerHTML = "";
}

window.onload = function() {
   displayScores();
};


clearButton.addEventListener("click", clearScores);