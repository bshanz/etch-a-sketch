const body = document.querySelector("body");
const container = document.querySelector(".container");
const square = document.querySelector("div");
const rainbow = document.querySelector(".rainbow");
const columns = document.querySelector(".columns");
const rows = document.querySelector(".rows");

const restart = document.querySelector(".restart");
const reload = document.querySelector(".reload");


//get user input for grid size
function gridSize() {
  let num = window.prompt(
    "How many rows should the grid have? Enter a number smaller than 100."
  );
  while (num > 100) {
    num = window.prompt(
      "That's not gonna work. Please enter a number smaller than 100."
    );
  }
  return num;
}

const numberOfSquares = gridSize();

//set the size of the grid
function createGrid(num) {
  let containerHeightAndWidth = num * 25;
  container.style.height = `${containerHeightAndWidth}px`;
  container.style.width = `${containerHeightAndWidth}px`;
}

createGrid(numberOfSquares);

//create the squares for the grid
function createSquare(num) {
  let numberOfCells = num * num;
  for (i = 0; i < numberOfCells; i++) {
    const square = document.createElement("div");
    container.append(square);
    square.classList.add("square");
  }
}

createSquare(numberOfSquares);

// change color of each square to red on mouseover
function changeColor() {
  square.addEventListener("mouseover", function (event) {
    event.target.classList.replace("square", "color");
  });
}

changeColor();

// change square to a random color on mouseover
function randomColor() {
  square.addEventListener("mouseover", function (event) {
    let theColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = `#${theColor}`;
  });
}

// button turn on into rainbow mode
rainbow.addEventListener("click", function (e) {
  randomColor();
});

//change square to back to the color white
function whiteSquare() {
  let numberOfCells = numberOfSquares * numberOfSquares;
  const coloredSquares = document.querySelectorAll(".color");
  for (i = 0; i < coloredSquares.length; i++) {
    coloredSquares[i].classList.replace("color", "square");
    coloredSquares[i].style.backgroundColor = "";
    square.style.backgroundColor = "";
  }
}

// button to change the square back to the color white
restart.addEventListener("click", function (e) {
  whiteSquare();
});

reload.addEventListener("click", function (e) {
    location.reload()
  });
  
