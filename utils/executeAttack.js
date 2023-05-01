export function executeAttack(tree, beach, ocean, wall, attackedSquare, squares, id, attackSelection, i, attackBtn) {
    attackedSquare.classList.add('new-ocean')
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
    } else if (attackedSquare.classList.contains('wall')) {
      attackedSquare.classList.remove('wall');
      attackedSquare.classList.add('tree');
      attackedSquare.textContent = tree;
    } else if (attackedSquare.classList.contains('crane')) {
        attackedSquare.classList.remove('crane');
        attackedSquare.classList.add('beach');
        attackedSquare.textContent = beach;
      }
    squares[id].classList.remove('ocean-attack');
    console.log(attackSelection.length, i+1)
    if (attackSelection.length === i+1) {
      attackBtn.disabled = false
    }
  }