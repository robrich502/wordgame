var currentSecretWord;
var score = 0;
var scoreLoaded = false;
// this function generates a random number and picks one of the items out of the array we declared above.
// the function returns a object with two properties which are strings (word, and hint);
    function GetSecretWord() {
        var min = 0,
        max = secretWords.length - 1;
        var rand = min + Math.random() * (max + 1 - min);
        var randIndex = Math.floor(rand);
        return secretWords[randIndex];
}
// this function is currently assigned to the OnLoad event of the body of the document. So when the OnLoad event fires off
// for the body of the html document, the code in this function will automatically execute.
    function OnLoad() {
        currentSecretWord = GetSecretWord();
        document.getElementById('hint').innerHTML = "Hint: " + currentSecretWord.hint;
        // Focus back on the text input for the next question. --Korey
        document.getElementById('txtGuess').focus();
}
    function CheckWord() {
        var word = document.getElementById('txtGuess').value;
        // these console.log statements are used for debugging purposes
        console.log(word);
        console.log(currentSecretWord.hint);
        console.log(currentSecretWord.word);
        if (word.toLowerCase() == currentSecretWord.word) {
        updateScore(true);
        alert("Congratulations, you have guessed the correct word!");
        // Remove that question and go to another question.
        // Also, reset the text field to be blank. --Korey
        var completed = secretWords.indexOf(currentSecretWord);
        if (completed !== -1) {
        secretWords.splice(completed, 1);
        }
        document.getElementById('txtGuess').value = "";
        OnLoad();
        } else {
        updateScore(false);
        alert("You are WRONG!!!! Try again.");
        // After wrong answer, focus and select the text in the text field. --Korey
        document.getElementById('txtGuess').select();
        // Deleted to not reset the score to 0 for each wrong answer. --Korey
        // score = 0;
        }
    }
    function updateScore(result) {
        // display score div if not yet displayed
        if(scoreLoaded == false) {
        loadScoreDiv();
        scoreLoaded = true;
        }
        // logic for correct answer
        if(result) {
        score++;
        }
        // logic for incorrect answer
        // Changed to keep the score from resetting to 0 on subsequent questions. Could it also just be deleted? --Korey
        else {
        score = score;
}
document.getElementById('score').innerHTML = "Score: " + score;
}
    function loadScoreDiv() {
        var scoreDiv = document.getElementById('score');
        var topOffset = -60; //push the element above the viewport
        scoreDiv.style.top = topOffset;
        scoreDiv.style.display = "block";
        var loadScore = setInterval(function () {
        topOffset += 1;
        scoreDiv.style.top = topOffset + "px";
        if (topOffset >= 0) {
        clearInterval(loadScore);
        }
        }, 5);
}
