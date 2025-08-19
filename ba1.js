let arr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let player = 1;

function drawScreen() {
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        html += "<tr>";
        for (let j = 0; j < arr.length; j++) {
            html += `<td onclick="play(${i},${j})" style="width:50px;height:50px;text-align:center;font-size:24px;">${arr[i][j]}</td>`;
        }
        html += "</tr>";
    }
    document.getElementById("screen").innerHTML = html;
}

function play(x, y) {
    if (arr[x][y] !== "") return;

    if (player === 1) {
        arr[x][y] = "X";
        if (checkWin()) {
            alert(`Player ${player} win`);
            resetGame();
            return;
        }
        player = 2;
    } else {
        arr[x][y] = "O";
        if (checkWin()) {
            alert(`Player ${player} win`);
            resetGame();
            return;
        }
        player = 1;
    }
    drawScreen();
}

function checkWin() {
    let n = arr.length;

    // kiểm tra hàng ngang
    for (let i = 0; i < n; i++) {
        if (arr[i][0] !== "" && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
            return true;
        }
    }

    // kiểm tra cột dọc
    for (let j = 0; j < n; j++) {
        if (arr[0][j] !== "" && arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j]) {
            return true;
        }
    }

    // kiểm tra chéo trái 
    if (arr[0][0] !== "" && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        return true;
    }

    // kiểm tra chéo phải
    if (arr[0][2] !== "" && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
        return true;
    }

    return false;
}

function resetGame() {
    arr = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    player = 1;
    drawScreen();
}

drawScreen();

