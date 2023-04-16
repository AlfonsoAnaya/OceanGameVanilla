const grid = document.getElementById("grid");
let squares = [];
let border = [];
let gridWidth = 7;
let gridHeight = 12;

let ocean = "🌊";
let earth = "🌳";
let beach = "🏖️";
let house = "🏠";

const layout = [
  0, 0, 0, 1, 1, 1, 1,
  0, 0, 2, 1, 1, 3, 1,
  0, 0, 2, 1, 1, 1, 1,
  0, 2, 2, 1, 1, 1, 1,
  0, 0, 1, 1, 1, 1, 1,
  0, 0, 0, 1, 1, 1, 1,
  0, 0, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 1, 1,
  0, 0, 0, 2, 2, 1, 1,
  0, 0, 2, 2, 1, 1, 1,
  0, 2, 2, 1, 1, 3, 1,
  0, 0, 1, 1, 1, 1, 1,
]

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', i);
    grid.appendChild(square);
    squares.push(square);
    if (layout[i] === 0) {
      square.classList.add('ocean');
      square.textContent = ocean;
    } else if (layout[i] === 1) {
      square.classList.add('earth');
      square.textContent = earth;
    } else if (layout[i] === 2) {
      square.classList.add('beach');
      square.textContent = beach;
    } else if (layout[i] === 3) {
      square.classList.add('house');
      square.textContent = house;
    } else {
      square.classList.add('empty');
    }
  }
}
createBoard();


function findBorder() {
  for (square of border) {border.classList.remove('border')};
  border = [];
  for (square of squares) {
    let id = parseInt(square.id);
    if (square.classList.contains('ocean')) {
      //top 
      if (square.id >= 0 && square.id < gridWidth)
        //check for land 
        if (!squares[id + 1].classList.contains('ocean') 
        || !squares[id + gridWidth].classList.contains('ocean')) border.push(square);
      //bottom      
      if (square.id >= (gridWidth * gridHeight) - gridWidth && square.id < (gridWidth * gridHeight))
        //check for land 
        if (!squares[id + 1].classList.contains('ocean') 
        || !squares[id - gridWidth].classList.contains('ocean')) border.push(square);
      //center
      if (square.id >= gridWidth && square.id < gridWidth * gridHeight - gridWidth)
        //check for land 
        if (!squares[id + 1].classList.contains('ocean') 
        || !squares[id - gridWidth].classList.contains('ocean') 
        || !squares[id + gridWidth].classList.contains('ocean')) border.push(square);
    }
  }
  for (square of border) {
    square.classList.add('border');
  }
}

findBorder();