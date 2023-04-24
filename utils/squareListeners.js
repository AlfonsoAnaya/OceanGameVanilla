export function upgradeSquareListeners(squares, money, wall, tree, crane, resources, coin) {
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
            } else if (square.classList.contains('wall')) {
                money.pop();
                resources.textContent = money.join(" ");
                square.classList.remove('wall');
                square.classList.add('crane');
                square.textContent = crane;
            } else if (square.classList.contains("crane")) {
                money.push(coin);
                resources.textContent = money.join(" ");
                square.classList.remove('crane');
                square.classList.add('tree');
                square.textContent = tree;
            }
        });
    }
}
