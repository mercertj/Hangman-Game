
function playGame ( ) {
 
  var answer;
  var found = false;
  var count = 2;

  while ((count >= 0) && (found == false)) {
    answer = Number(prompt("Guess what number I'm thinking of (It's between 1 & 100)", "")) || 0;  
    if (answer !== ranNum) { 
      alert("You got it wrong. You have " + count + " more chances"); 
    }  

    if (answer === ranNum) { 
      alert("Good Guess, you must be psychic!"); 
      found = true; 
    }

    count--;
  }
  
  if (!found) { alert("Too bad, you lose ... The number was "+ranNum); }
  return found;
}

function generateRandomNumber() {
  ranNum = Math.floor(Math.random()*100)+1;
}

window.onload = function() { generateRandomNumber(); }
