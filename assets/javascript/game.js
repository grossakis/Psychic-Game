var letterArray = "abcdefghijklmnopqrstuvwxyz".split("");
var wins = 0;
var losses = 0;

var winCount = document.getElementById("win-count");
winCount.textContent = wins;

var lossCount = document.getElementById("loss-count");
lossCount.textContent = losses;

function newGame() {
    var mysteryLetter = letterArray[Math.floor(Math.random()*letterArray.length)];
    console.log(mysteryLetter)
    var guesses = 10;
    var guessedLetters = document.getElementById("guessed-letters");
    var remainingGuess = document.getElementById("guess-count");
    remainingGuess.textContent = guesses;
    var guessArray = [];

    document.onkeyup = function () {
        var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
        if(letterArray.includes(letterGuess)){}
        else{
            alert("Please pick a letter")
            return
        }
        for (i = 0; i < guessArray.length; i++){
            if(letterGuess === guessArray[i]){
                alert("already guessed");
                return
            }
        }
        guessArray.push(letterGuess);
        
        var targetLetters = document.createElement("span");
        targetLetters.textContent = letterGuess + ", ";
        guessedLetters.appendChild(targetLetters);
        guesses--;
        remainingGuess.textContent = guesses;
        
        if(letterGuess === mysteryLetter){
            alert("You Win!");
            wins++;
            winCount.textContent = wins;
            document.getElementById("guessed-letters").innerHTML = "";
            newGame();
        } else if(guesses < 1){
            alert("You Lose :(");
            losses++;
            lossCount.textContent = losses;
            document.getElementById("guessed-letters").innerHTML = "";
            newGame();
        }        
    };
};
newGame();