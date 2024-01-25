// highscore variables
const highScore = document.getElementById("highscores");
const clearButton = document.getElementById("clear");


//fucntion to display the scores in the highscores list
function displayScores() {
   const scoresArray = [];

   // Populate scoresArray with objects containing user initials and scores
   for (let i = 0; i < localStorage.length; i++) {
       const userInitials = localStorage.key(i);
       const userScore = parseInt(localStorage.getItem(userInitials));
       scoresArray.push({ userInitials, userScore });
   }
   // console.log(scoresArray);

   // Sort scoresArray in descending order based on user scores
   scoresArray.sort((a, b) => b.userScore - a.userScore);

   // Display the sorted scores
   highScore.innerHTML = ""; // Clear existing content

   scoresArray.forEach(scoreObj => {
       const displayScores = document.createElement("li");
       displayScores.innerHTML = `${scoreObj.userInitials.toUpperCase()} - ${scoreObj.userScore} <br/>`;
       highScore.appendChild(displayScores);
   });
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