const container = document.querySelector("#container");
container.setAttribute("style", "width: 400px; aspect-ratio: 1 / 1;");

let containerWidth = container.offsetWidth;

const amountOfSquares = 4;

let squareWidth = containerWidth / amountOfSquares - 2;

function createSquares() {
    let div = document.createElement("div");
    div.setAttribute("class", "square");
    div.setAttribute(
        "style",
        "width: " + squareWidth + "px; aspect-ratio: 1 / 1",
    );
    container.appendChild(div);
}

for (let i = 0; i < Math.pow(amountOfSquares, 2); i++) {
    createSquares();
}
