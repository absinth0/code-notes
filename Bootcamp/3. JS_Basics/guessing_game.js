// create a secret number
var secretNumber = 4;

// Ask user for a guess
var guess;
while(true) {

    guess = Number(prompt("Guess a number: "));

    if((guess) === secretNumber) {
        alert("You Got it Right!");
        break;
    }
    else if(guess < secretNumber){
        alert("Too Low, try higher");
    }
    else {
        alert("Too high, try lower");
    }
}