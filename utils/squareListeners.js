export function upgradeSquareListeners(squares, money, wall, tree) {
    for (let square of squares) {
        square.addEventListener("click", function (e) {
            money.pop();
            resources.textContent = money.join(" ");
            if (square.classList.contains('beach')) {
                square.classList.remove('beach');
                square.classList.add('tree');
                square.textContent = tree;
            } else if (square.classList.contains('tree')) {
                square.classList.remove('tree');
                square.classList.add('wall');
                square.textContent = wall;
            }
        });
    }
}
