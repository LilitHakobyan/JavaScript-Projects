var currentPlayer = prompt("Who is The Current Player X=1 O=2");

var grid = [];
grid[0] = [];
grid[1] = [];
grid[2] = [];

for (var i = 0; i < 2; i++) {
    grid[i] = [];
    for (var j = 0; j < 2; j++) {
        grid[i][j] = 0;
    }
}

var table = document.getElementById("tic-tac-toe");
table.addEventListener("click", tableClick);

function tableClick(event) {
    var element = event.target;
    if (element && element.tagName === "TD") {
        var y = element.cellIndex;
        var x = element.parent.rowIndex;

        clickCell(element, x, y);
    }
}
function clickCell(cell, x, y) {
    if (grid[x][y] > 0) {
        alert("Dont Try To Cheat Bud!!!!!");
    } else {
        if (currentPlayer === 1) {
            cell.className = "x";
            cell.innerHTML = "X";
            grid[x][y] = 1;
            currentPlayer = 2;
        } else {
            cell.className = "o";
            cell.innerHTML = "O";
            grid[x][y] = 2;
            currentPlayer = 1;
        }
    }
}

var button = getElementById("button");
button.AddEventListener("click", reset());
function reset() {
    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {
            grid[i][j] = 0;
            document.getElementById("cell").innerHTML = "&nbsp;";
        }
    }
    currentPlayer = 1;
}
