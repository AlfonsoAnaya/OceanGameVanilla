import { calculateBeachRewards } from "./utils/calculateBeachRewards.js";
import { upgradeSquareListeners } from "./utils/squareListeners.js";
import { findBorder } from "./utils/findBorder.js";

const grid = document.getElementById("grid");
const resources = document.getElementById("resources");
const date = document.getElementById('year');
const attackBtn = document.getElementById('attack-btn');

let squares = [];
let border = [];
let gridWidth = 7;
let gridHeight = 12;
let year = 2023;
let coin = "🪙";
let money = [coin, coin, coin];

let ocean = "🌊";
let tree = "🌳";
let beach = "🏖️";
let house = "🏠";
let wall = "🧱";

const layout = [
  0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 3, 1,
  0, 1, 1, 1, 1, 1, 1,
  0, 0, 2, 1, 1, 1, 1,
  0, 0, 2, 2, 1, 1, 1,
  0, 0, 0, 0, 1, 1, 1,
  0, 0, 0, 0, 1, 1, 1,
  0, 0, 0, 1, 1, 1, 1,
  0, 0, 2, 1, 1, 1, 1,
  0, 2, 1, 1, 1, 1, 1,
  2, 1, 1, 1, 1, 3, 1,
  0, 0, 1, 1, 1, 1, 1,
]

function createBoard() {
  resources.textContent = money.join(" ");
  date.textContent = year;

  //set up grid
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', i);
    grid.appendChild(square);
    squares.push(square);
    if (layout[i] === 0) {
      square.classList.add('ocean');
      square.textContent = ocean;
    } else if (layout[i] === 1) {
      square.classList.add('tree');
      square.textContent = tree;
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
upgradeSquareListeners(squares, money, wall, tree);
findBorder(border, squares, gridWidth, gridHeight);

function seasonUnfold() {
  calculateBeachRewards(squares, money, coin)

  let attackSelection = [];
  for (let i=0; i<5; i++) {
    attackSelection.push(border[Math.floor(Math.random() * border.length)])
  }

  for (let square of attackSelection) {
    let attackPossibilities = [];
    let id = parseInt(square.id);
    //select attack squares
    //if top row
    if ((square.id >= 0 && square.id < gridWidth)) {
      if (!squares[id + 1].classList.contains('ocean')) attackPossibilities.push(squares[id + 1]);
      if (!squares[id + gridWidth].classList.contains('ocean')) attackPossibilities.push(squares[id + gridWidth]);
    }
    //if bottom row
    if (square.id >= (gridWidth * gridHeight) - gridWidth && square.id < (gridWidth * gridHeight)) {
      if (!squares[id + 1].classList.contains('ocean')) attackPossibilities.push(squares[id + 1]);
      if (!squares[id - gridWidth].classList.contains('ocean')) attackPossibilities.push(squares[id - gridWidth]);
    }
    //if central rows
    if (square.id >= gridWidth && square.id < gridWidth * gridHeight - gridWidth) {
      if (!squares[id + 1].classList.contains('ocean')) attackPossibilities.push(squares[id + 1]);
      if (!squares[id - gridWidth].classList.contains('ocean')) attackPossibilities.push(squares[id - gridWidth]);
      if (!squares[id + gridWidth].classList.contains('ocean')) attackPossibilities.push(squares[id + gridWidth]);
    }
    if (attackPossibilities.length === 0) continue;
    let attackedSquare = attackPossibilities[Math.floor(Math.random() * attackPossibilities.length)];
    //if wins coin toss then attacked square downgrades house -> tree -> beach -> ocean}
    let randomNum = Math.random();
    if (randomNum >= .5) {
      console.log('successful attack')
      if (attackedSquare.classList.contains('house')) {
        attackedSquare.classList.remove('house');
        attackedSquare.classList.add('tree');
        attackedSquare.textContent = tree;
      } else if (attackedSquare.classList.contains('tree')) {
        attackedSquare.classList.remove('tree');
        attackedSquare.classList.add('beach');
        attackedSquare.textContent = beach;
      } else if (attackedSquare.classList.contains('beach')) {
        attackedSquare.classList.remove('beach');
        attackedSquare.classList.add('ocean');
        attackedSquare.textContent = ocean;
      } else if  (attackedSquare.classList.contains('wall')) {
        attackedSquare.classList.remove('wall');
        attackedSquare.classList.add('tree');
        attackedSquare.textContent = tree;
      }
    }
  }
  findBorder();
  year ++;
  date.textContent = year;
  money.push(coin);
  resources.textContent = money.join(" ");
}

attackBtn.addEventListener("click", () => seasonUnfold())