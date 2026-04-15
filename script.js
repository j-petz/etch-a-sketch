const main = document.querySelector("main");

const btnCalculate = document.querySelector("button");
btnCalculate.addEventListener("click", createSquares);

const btnDelete = document.querySelector("#del");
btnDelete.addEventListener("click", deleteSquares);

let amountOfSquares = 0;

function createSquares() {
    deleteSquares();

    amountOfSquares = document.getElementById("amountOfSquares").value;

    for (let i = 0; i < Math.pow(amountOfSquares, 2); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "square");
        main.appendChild(div);
    }

    let square = document.querySelector(".square");
    let squareWidth = square.offsetWidth;
    main.setAttribute(
        "style",
        "width:" +
            (squareWidth + 2) * amountOfSquares +
            "px; aspect-ratio: 1 / 1;",
    );

    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach((element) => {
        element.addEventListener("mouseover", changeColor);
    });
}

function deleteSquares() {
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
}

function changeColor() {
    // one color
    //this.style.backgroundColor = "lightcoral";

    // random color
    /* let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"; */

    //opacity
    let hoveredSquare = this;
    let computedStyles = window.getComputedStyle(hoveredSquare);
    let currentOpacity = computedStyles.getPropertyValue("opacity");
    let currentOpacityFloat = Number(currentOpacity);
    if (currentOpacityFloat < 1) {
        let newOpacity = currentOpacityFloat + 0.1;
        hoveredSquare.style.opacity = newOpacity;
    }
    //console.log("opacity:", currentOpacity);
}
