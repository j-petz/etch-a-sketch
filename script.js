const container = document.querySelector("#container");
container.setAttribute(
    "style",
    "display: flex; flex-wrap: wrap; gap: 2px; height: 400px; width: 400px; margin: 0 auto;",
);

const amountOfSquares = 4;

let div = document.createElement("div");
div.setAttribute(
    "style",
    "height: 20px; width: 20px; background-color: #333; border-radius: 4px",
);

function createSquares() {
    container.appendChild(div);
}

for (let i = 0; i < Math.pow(amountOfSquares, 2); i++) {
    createSquares();
}
