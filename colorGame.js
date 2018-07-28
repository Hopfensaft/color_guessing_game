
var numberSquares = 6
var colors = [];
var goalColor;
var colorHeadline = document.getElementById("colorHeadline");
var squares = document.querySelectorAll(".square");
var gameMessage = document.querySelector("#gameMessage");
var headline = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("buttonSelected");
      modeButtons[1].classList.remove("buttonSelected");
      this.textContent === "easy" ? numberSquares = 3: numberSquares = 6;
      this.classList.add("buttonSelected");
      reset();
    })
  }

  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === goalColor) {
        gameMessage.textContent = "Correct!";
        changeColors(clickedColor);
        headline.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      }
      else {
        this.style.backgroundColor = "#232323";
        gameMessage.textContent = "Try again";
      }
    });
  }

  reset();
}

function reset(){
  colors = generateRandomColors(numberSquares);
  goalColor = pickColor();
  colorHeadline.textContent = goalColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  headline.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  gameMessage.textContent = "";
}

resetButton.addEventListener("click", function(){
  reset()
});

function changeColors(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function generateRandomColors(num) {
  var colorArray = [];
  for(var i = 0; i < num; i++) {
    var redAmount = Math.floor(Math.random() * 256);
    var greenAmount = Math.floor(Math.random() * 256);
    var blueAmount = Math.floor(Math.random() * 256);
    colorArray.push("rgb(" + redAmount + ", " + greenAmount + ", " + blueAmount + ")");
  }
  return colorArray;
}
