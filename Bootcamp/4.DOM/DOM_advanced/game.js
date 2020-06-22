var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".modes");

var squareCount = 6;
var colors = [];
var pickedColor;

init();

function init() {
    colors = generateColors(squareCount);
    pickedColor = pickColor();
    // assigns colors to each sqaure
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = colors[index];
        squares[index].addEventListener("click", chosenColor);
    }
    colorDisplay.textContent = pickedColor;

}


for (let index = 0; index < modeButtons.length; index++) {
    modeButtons[index].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? squareCount = 3 : squareCount = 6;
        reset();
    });
}


resetButton.addEventListener("click", function () {
    reset();
})

function reset() {
    colors = generateColors(squareCount);
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for (let index = 0; index < squares.length; index++) {
        if (colors[index]) {
            squares[index].style.backgroundColor = colors[index];
            squares[index].style.display = "block";
        } else {
            squares[index].style.display = "none";
        }
    }
    message.textContent = "";
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Game";
}

function chosenColor() {
    if (this.style.backgroundColor === pickedColor) {
        message.textContent = "Bingo!";
        winner(pickedColor);

    } else {
        this.style.backgroundColor = "#333333";
        message.textContent = "Try Again!";
    }
}

function winner(color) {
    //makes all squares of the picked "color"
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
    resetButton.textContent = "Play Again!";

}

function pickColor() {
    //picks a random index of colors array and returns
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(num) {
    //make an array
    //add rand col to arr
    //return arr
    var arr = [];
    for (let index = 0; index < num; index++) {
        arr.push(randCol());

    }
    return arr;
}

function randCol() {
    // pick every r/g/b from 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}