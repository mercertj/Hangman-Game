var randomNum = getRandomNum(100);
var guessesLeft = 5;
var losses = 0;
var counter = 0;
var maxAttempts = 5;
var guess;
var correctGuess = false;
var wins = 0;
//I have no idea how to complete this asssignment//
var wordOptions = "tanner",
    "aaron", "margaret", "david", "leeland", "michael", "thomas", "cindy", "anna"]
var selectedWord = "";
var lettersinWord = [];
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks and correct guesses respectively

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }


    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
  //check if letter exists
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    //check where letter exists in word, populate to blanksAndSucceses
    if(isLetterInWord) {
      for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
          blanksAndSuccesses[i] = letter;
        }
      }
    }
    else {
      wrongLetters.push(letter);
      numGuesses++
    }
}
//main process//

startGame();

//register keyclicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    console.log(letterGuessed);
}