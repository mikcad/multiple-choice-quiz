// highscore variables
const highScore = document.getElementById("highscores");


function displayScores() {
   for (let i = 0; i < localStorage.length; i++) {
      const userInitials = localStorage.key(i);
      const userScore = localStorage.getItem(userInitials);
      const displayScores = document.createElement("li");
      displayScores.innerHTML += `${userInitials}: ${userScore} <br/>`;
      highScore.appendChild(displayScores)
   }
}

const clearButton = document.getElementById("clear");
// function to clear highscores
function clearScores() {
   // event.preventDefault();
   localStorage.clear();
   console.log(localStorage);
   highScore.innerHTML = "";
}


clearButton.addEventListener("click", clearScores);

window.onload = function() {
   displayScores();
};