import {calculateBeachRewards} from "./calculateBeachRewards.js"
import { border, findBorder } from "./findBorder.js";


export function seasonUnfold(squares, money, coin, tree, beach, ocean, gridWidth,gridHeight, year, date) {
    calculateBeachRewards(squares, money, coin);
    findBorder(squares, gridWidth, gridHeight);
    console.log(border);
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
    //findBorder(squares, gridWidth, gridHeight);
    year ++;
    date.textContent = year;
    money.push(coin);
    resources.textContent = money.join(" ");
  }