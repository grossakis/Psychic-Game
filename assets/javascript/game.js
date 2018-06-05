var guesses = 10;

var letterArray = "abcdefghijklmnopqrstuvwxyz".split("");

var mysteryLetter = letterArray[Math.floor(Math.random()*letterArray.length)];
console.log(mysteryLetter)
var wins = 0;
var losses = 0;

var guessedLetters = document.getElementById("guessed-letters");
var remainingGuess = document.getElementById("guess-count");
remainingGuess.textContent = guesses;

var winCount = document.getElementById("win-count");
winCount.textContent = wins;
var lossCount = document.getElementById("loss-count");
lossCount.textContent = losses;

document.onkeyup = function() {
    var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if(letterGuess === mysteryLetter){
        alert("youwin");
        wins++;
        winCount.textContent = wins;
    } else if(guesses < 1){
        alert("youlose");
        losses++
        lossCount.textContent = losses;
    }
    else{
        var targetLetters = document.createElement("span");
        targetLetters.textContent = letterGuess + ", ";
        guessedLetters.appendChild(targetLetters);
        guesses--;
        remainingGuess.textContent = guesses;
    }

    
    // console.log(letterGuess);
    
    // if(guessedLetter === mysteryLetter){
    //     console.log("correct");
    // }
    // else{
    //     console.log("guess again");
    // }
}
