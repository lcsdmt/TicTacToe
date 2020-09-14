let cells = document.querySelectorAll('.row > div');

let currentPlayer = "🥁";
let timesClicked = 0;
//let turnCounter = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
    //cells[i].addEventListener('click', checkWin);
};

let winner = document.getElementById("winner");
let draw = document.getElementById("winner");

function cellClicked(event) {
    timesClicked ++;
    if (event.target.textContent == "") {
        event.target.textContent = currentPlayer
    }if (currentPlayer == "🥁") {
        currentPlayer = "🎸";
    } else {
        currentPlayer = "🥁"
    } if (
        cells[0].textContent == "🥁" && cells[1].textContent == "🥁" && cells[2].textContent == "🥁" ||
        cells[3].textContent == "🥁" && cells[4].textContent == "🥁" && cells[5].textContent == "🥁" ||
        cells[6].textContent == "🥁" && cells[7].textContent == "🥁" && cells[8].textContent == "🥁" ||
        cells[0].textContent == "🥁" && cells[3].textContent == "🥁" && cells[6].textContent == "🥁" ||
        cells[1].textContent == "🥁" && cells[4].textContent == "🥁" && cells[7].textContent == "🥁" ||
        cells[2].textContent == "🥁" && cells[5].textContent == "🥁" && cells[8].textContent == "🥁" ||
        cells[0].textContent == "🥁" && cells[4].textContent == "🥁" && cells[8].textContent == "🥁" ||
        cells[2].textContent == "🥁" && cells[4].textContent == "🥁" && cells[6].textContent == "🥁") {
        winner.innerHTML = "👑 🥁 WINS!!! 👑"
    } else if (
        cells[0].textContent == "🎸" && cells[1].textContent == "🎸" && cells[2].textContent == "🎸" ||
        cells[3].textContent == "🎸" && cells[4].textContent == "🎸" && cells[5].textContent == "🎸" ||
        cells[6].textContent == "🎸" && cells[7].textContent == "🎸" && cells[8].textContent == "🎸" ||
        cells[0].textContent == "🎸" && cells[3].textContent == "🎸" && cells[6].textContent == "🎸" ||
        cells[1].textContent == "🎸" && cells[4].textContent == "🎸" && cells[7].textContent == "🎸" ||
        cells[2].textContent == "🎸" && cells[5].textContent == "🎸" && cells[8].textContent == "🎸" ||
        cells[0].textContent == "🎸" && cells[4].textContent == "🎸" && cells[8].textContent == "🎸" ||
        cells[2].textContent == "🎸" && cells[4].textContent == "🎸" && cells[6].textContent == "🎸") {
        winner.innerHTML = "👑 🎸 WINS!!! 👑"
    } else if (timesClicked == 9) draw.innerHTML = "😭 DRAW 😭";
}

//const winningCombos = [
//    [0, 1, 2],
//    [3, 4, 5],
//    [6, 7, 8],
//    [0, 3, 6],
//    [1, 4, 7],
//    [2, 5, 8],
//    [0, 4, 8],
//    [2, 4, 6]
// ];

// target shows what is clicked, content tells whats in it
//let turnCounter = 0;

// original**
//function cellClicked() {
//    if (turnCounter % 2 === 0) {
//        event.target.textContent = "X";
//        turnCounter++;
//    } else {
//        event.target.textContent = "O";
//        turnCounter++;
//    }
    //if (event.target.textContent = "X","O") {
    // change cursor to not allowed
    //} 
//};



//  if unable to use const
//  if (cells == winningCombos) {} ?? needed for const?

// if win check original location
//function checkWin() {};