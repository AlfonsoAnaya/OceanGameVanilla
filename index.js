const grid = document.getElementById("grid");
let squares = [];
let gridWidth = 12;

let ocean = "🌊";
let earth = "🌳";
let beach = "🏖️";

const layout = [
    0,0,0,1,1,1,1,1,1,1,1,1,
    0,0,2,1,1,1,1,1,1,1,1,1,
    0,0,2,1,1,1,1,1,1,1,1,1,
    0,2,2,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,1,1,1,1,1,1,1,
    0,0,0,2,2,1,1,1,1,1,1,1,
    0,0,2,2,1,1,1,1,1,1,1,1,
    0,2,2,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,
]

function createBoard() {
  for (item of layout) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)
      if (item===0) {
        square.classList.add('ocean');
        square.textContent = ocean;
      } else if (item===1) {
        square.classList.add('earth');
        square.textContent = earth;
      } else if (item===2) {
        square.classList.add('beach');
        square.textContent = beach;
      } else if (item===3) {
        square.classList.add('power-pellet')
      } else {
        square.classList.add('empty')
      }
  }
}
createBoard()