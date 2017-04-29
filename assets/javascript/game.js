
var randomNum = getRandomNum(100);
var guessesLeft = 9;
var losses = 0;
var counter = 0;
var maxAttempts = 9;
var guess;
var correctGuess = false;
//I have no idea how to complete this asssignment//




function getRandomNum(upper) {
  var num = Math.floor(Math.random()*upper) + 1;
  return num;
}
// while(true) {
//   guess = prompt("I am think of a number bewteen 1 and 100. What is it?");
//     guessesLeft += 1;
//     if (parseInt(guess) === randomNum){
//         correctGuess = true;
//         break;
//     }
}
document.write("You must be psychic!");

while (guess != num) {
  guess = prompt("Please pick a number between 1 and 100");
  counter += 1;
  console.log(counter);

    if (counter > maxAttempts) {
         alert("Sorry, you lose. the random number was" + ranNum + "Please try again!");
              break
    }

    if (attempts === ranNum) {
      document.write("Congratulations! You guessed correctly!");
      alert("The correct number was " + ranNum);
      alert("It took you " + attempts + "tries.");
      console.log(wins);  
    }
  }

