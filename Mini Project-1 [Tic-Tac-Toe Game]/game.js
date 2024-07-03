//! Selecting all the HTML Classes and accessing them
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new");
let msgContaioner = document.querySelector(".msgContaioner");
let msg = document.querySelector(".msg");

//* An Array of all the winning Combinations
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let reset = () => {
    turnO = true;
    count = 0;
    msgContaioner.classList.add("hide");
    enableBoxes();
};

//* ForEach Loop on Boxes to give 2 unique values
let turnO = true;
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            console.log("X");
            turnO = false;
            box.innerText = "X";
        } else {
            console.log("O");
            turnO = true;
            box.innerText = "O";
        }
        box.disabled = true;
        checkWinner();
        let chok = checkWinner();
        count++;

        if (count === 9 && !chok) {
            drawGame();
        }
    });
});

let drawGame = () => {
    msg.innerText = "The Game Has Drawn Please Restart";
    msgContaioner.classList.remove("hide");
    disableBoxes();
};

//* Checking Winning Pattern
let checkWinner = () => {
    winPattern.forEach((pattern) => {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if ((pos1Val !== "", pos2Val !== "", pos3Val !== "")) {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    });
};

//* Creating a function to Show Winner
let showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContaioner.classList.remove("hide");
    disableBoxes();
};

let disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

let enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });

};

resetBtn.addEventListener("click", reset);
newBtn.addEventListener("click", reset);
console.log("Ritul");