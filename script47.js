
let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let guess = Number(document.getElementById("guess").value);

    let result = document.getElementById("result");

    if (guess < 1 || guess > 10) {
        result.innerText = "Enter a number between 1 and 10";
    }
    else if (guess === secretNumber) {
        result.innerText = "Correct! You won!";
    }
    else if (guess < secretNumber) {
        result.innerText = "Too low! Try again.";
    }
    else {
        result.innerText = "Too high! Try again.";
    }
}
