import { calculateBeachRewards } from "./calculateBeachRewards.js"
import { border, findBorder } from "./findBorder.js";
import { executeAttack } from "./executeAttack.js";

let year = 2023;


function seasonUnfold(squares, money, coin, tree, beach, ocean, wall, gridWidth, gridHeight, date, resources) {
  console.log('begin season')
  calculateBeachRewards(squares, money, coin);

  findBorder(squares, gridWidth, gridHeight);

  let attackSelection = [];
  for (let i = 0; i < 5; i++) {
    let randomNum = Math.random();
    if (randomNum >= .5) {
      attackSelection.push(border[Math.floor(Math.random() * border.length)]);
    }
  }

  for (let i = 0; i < attackSelection.length; i++) {
    let attackPossibilities = [];

    let id = parseInt(attackSelection[i].id);
    //select attack squares
    //if top row
    if ((id >= 0 && id < gridWidth)) {
      if (!squares[id + 1].classList.contains('ocean')) attackPossibilities.push(squares[id + 1]);
      if (!squares[id + gridWidth].classList.contains('ocean')) attackPossibilities.push(squares[id + gridWidth]);
    }
    //if bottom row
    if (id >= (gridWidth * gridHeight) - gridWidth && id < (gridWidth * gridHeight)) {
      if (!squares[id + 1].classList.contains('ocean')) attackPossibilities.push(squares[id + 1]);
      if (!squares[id - gridWidth].classList.contains('ocean')) attackPossibilities.push(squares[id - gridWidth]);
    }
    //if central rows
    if (id >= gridWidth && id < gridWidth * gridHeight - gridWidth) {
      if (!squares[id + 1].classList.contains('ocean')) attackPossibilities.push(squares[id + 1]);
      if (!squares[id - gridWidth].classList.contains('ocean')) attackPossibilities.push(squares[id - gridWidth]);
      if (!squares[id + gridWidth].classList.contains('ocean')) attackPossibilities.push(squares[id + gridWidth]);
    }
    if (attackPossibilities.length === 0) continue;
    let attackedSquare = attackPossibilities[Math.floor(Math.random() * attackPossibilities.length)];
    //if wins coin toss then attacked square downgrades house -> tree -> beach -> ocean}

    squares[id].classList.add('ocean-attack');

    setTimeout(executeAttack, (i + 1) * 500, tree, beach, ocean, wall, attackedSquare, squares, id)
  }
  //findBorder(squares, gridWidth, gridHeight);
  year++;
  date.textContent = year;
  money.push(coin);
  resources.textContent = money.join(" ");
}

export {seasonUnfold, year}