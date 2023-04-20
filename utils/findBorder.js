let border = [];

function findBorder(squares, gridWidth, gridHeight) {
    for (let square of border) { square.classList.remove('border') };
    border = [];
    for (let square of squares) {
      let id = parseInt(square.id);
      if (square.classList.contains('ocean')) {
        //top 
        if (square.id >= 0 && square.id < gridWidth) {
          if (!squares[id + 1].classList.contains('ocean')
            || !squares[id + gridWidth].classList.contains('ocean')) {
              border.push(square);
            }
        }
        //check for land 
        //bottom      
        if (square.id >= (gridWidth * gridHeight) - gridWidth && square.id < (gridWidth * gridHeight)) {
          //check for land 
          if (!squares[id + 1].classList.contains('ocean')
            || !squares[id - gridWidth].classList.contains('ocean')) border.push(square);
        }
        //center
        if (square.id >= gridWidth && square.id < gridWidth * gridHeight - gridWidth) {
          //check for land 
          if (!squares[id + 1].classList.contains('ocean')
            || !squares[id - gridWidth].classList.contains('ocean')
            || !squares[id + gridWidth].classList.contains('ocean')) border.push(square);
        }
      }
    }
    for (let square of border) {
      square.classList.add('border');
    }
    console.log(border);
  }

  export {border, findBorder};