export function reconstruct(squares, beach, gridWidth, gridHeight) {
  console.log('begin reconstruction')
  let craneSquares = squares.filter(square => square.classList.contains('crane'));
  let craneAccessibleSquares = [];
  let reconstructSquares = [];
  for (let square of craneSquares) {
    let id = parseInt(square.id);
    if (id === 0) {
      if (squares[id + 1].classList.contains('ocean')) craneAccessibleSquares.push(squares[id + 1]);
      if (squares[id + gridWidth].classList.contains('ocean')) craneAccessibleSquares.push(squares[id + gridWidth]);
    } else if (id === (gridHeight*gridWidth)-1) {
      if (squares[id - 1].classList.contains('ocean')) craneAccessibleSquares.push(squares[id - 1]);
      if (squares[id - gridWidth].classList.contains('ocean')) craneAccessibleSquares.push(squares[id - gridWidth]);
    } else if (id <= gridWidth) {
      if (squares[id - 1].classList.contains('ocean')) craneAccessibleSquares.push(squares[id - 1]);
      if (squares[id + 1].classList.contains('ocean')) craneAccessibleSquares.push(squares[id + 1]);
      if (squares[id + gridWidth].classList.contains('ocean')) craneAccessibleSquares.push(squares[id + gridWidth]);
    } else if (id >= (gridWidth*gridHeight)-gridWidth) {
      if (squares[id - 1].classList.contains('ocean')) craneAccessibleSquares.push(squares[id - 1]);
      if (squares[id + 1].classList.contains('ocean')) craneAccessibleSquares.push(squares[id + 1]);
      if (squares[id - gridWidth].classList.contains('ocean')) craneAccessibleSquares.push(squares[id - gridWidth]);
    } else {
      if (squares[id - 1].classList.contains('ocean')) craneAccessibleSquares.push(squares[id - 1]);
      if (squares[id + 1].classList.contains('ocean')) craneAccessibleSquares.push(squares[id + 1]);
      if (squares[id + gridWidth].classList.contains('ocean')) craneAccessibleSquares.push(squares[id + gridWidth]);
      if (squares[id - gridWidth].classList.contains('ocean')) craneAccessibleSquares.push(squares[id - gridWidth]);
    }
  }
  //from accessible squares select randomly which will succeed =create yet new array=;
  for (let square of craneAccessibleSquares) {
    let randomNum = Math.random();
    if (randomNum >= .66) {
      reconstructSquares.push(craneAccessibleSquares[Math.floor(Math.random() * craneAccessibleSquares.length)]);
    }
  }
  function reconstruct(i) {
    reconstructSquares[i].classList.remove('ocean');
    reconstructSquares[i].classList.add('beach');
    reconstructSquares[i].textContent = beach;
  }
  for (let i = 0; i < reconstructSquares.length; i++) {
    setTimeout(reconstruct, (i + 1) * 300, i)
  }
}