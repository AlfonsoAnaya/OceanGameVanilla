export function upgradeSquareListeners(squares, money, wall, tree) {
    for (let square of squares) {
        square.addEventListener("click", function (e) {
            if (square.classList.contains('beach')) {
                money.pop();
                resources.textContent = money.join(" ");
                square.classList.remove('beach');
                square.classList.add('tree');
                square.textContent = tree;
            } else if (square.classList.contains('tree')) {
                money.pop();
                resources.textContent = money.join(" ");
                square.classList.remove('tree');
                square.classList.add('wall');
                square.textContent = wall;
            }
        });
    }
}
