const main = document.querySelector("main");

const amountOfSquares = 4;

function createSquares() {
    let div = document.createElement("div");
    div.setAttribute("class", "square");
    main.appendChild(div);
}

for (let i = 0; i < Math.pow(amountOfSquares, 2); i++) {
    createSquares();
}

let square = document.querySelector(".square");
let squareWidth = square.offsetWidth;
console.log(squareWidth);
main.setAttribute(
    "style",
    "width:" + (squareWidth + 2) * amountOfSquares + "px; aspect-ratio: 1 / 1;",
);
