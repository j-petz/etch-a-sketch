const main = document.querySelector("main");
const footer = document.querySelector('footer');

const btnGenerate = document.querySelector("button");
btnGenerate.addEventListener("click", createSquares);

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", clearSquares);

const btnDelete = document.querySelector("#del");
btnDelete.addEventListener("click", deleteSquares);

let baseSquareOpacity = 1;

let amountOfSquares = 0;

let colorVariant = document.getElementById('select-variant');
let colorValue = colorVariant.value;
function changeVariant() {
    colorValue = colorVariant.value;
    let baseSquare = document.querySelectorAll('main div');

    switch(colorValue) {
        case 'monochrome':
            baseSquareOpacity = 1;
            baseSquare.forEach(element => {
                element.setAttribute('class', 'square');
                element.removeAttribute('style');
            });
            break;
        case 'random':
            baseSquareOpacity = 1;
            baseSquare.forEach(element => {
                element.setAttribute('class', 'square');
                element.removeAttribute('style');
            });
            break;
        case 'opacity':
            baseSquareOpacity = 0;
            baseSquare.forEach(element => {
                element.setAttribute('class', 'square-transparent');
                element.removeAttribute('style');
            });
            break;
    }
}
colorVariant.onchange = changeVariant;

function createSquares() {
    deleteSquares();

    amountOfSquares = document.getElementById("amountOfSquares").value;

    if (amountOfSquares <= 80) {
        for (let i = 0; i < Math.pow(amountOfSquares, 2); i++) {
            let div = document.createElement("div");
            if (baseSquareOpacity == 0) {
                div.setAttribute("class", "square-transparent")
            } else {
                div.setAttribute("class", "square");
            }
            main.appendChild(div);
        }

        let square = document.querySelector("main div");
        let squareWidth = square.offsetWidth;
        main.setAttribute(
            "style",
            "width:" +
                (squareWidth + 2) * amountOfSquares +
                "px; aspect-ratio: 1 / 1;",
        );

        let allSquares = document.querySelectorAll("main div");
        allSquares.forEach((element) => {
            element.addEventListener("mouseover", changeColor);
        });
        footer.textContent = "";
    } else {
        const errorMessage = "Please use a number smaller than 81!";
        footer.textContent = errorMessage;
        
    }
}

function clearSquares() {
    let baseSquare = document.querySelectorAll('main div');
    baseSquare.forEach(element => {
        element.removeAttribute('style');
    });
}

function deleteSquares() {
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
    footer.textContent = "";
}

function changeColor() {

    switch (colorValue) {
        case 'monochrome':
            this.style.backgroundColor = "lightcoral";
            break;

        case 'random':
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
            break;

        case 'opacity':
            let hoveredSquare = this;
            let computedStyles = window.getComputedStyle(hoveredSquare);
            let currentOpacity = computedStyles.getPropertyValue("opacity");
            let currentOpacityFloat = Number(currentOpacity);
            if (currentOpacityFloat < 1) {
                let newOpacity = currentOpacityFloat + 0.1;
                hoveredSquare.style.opacity = newOpacity;
            }
            break;
    }
}
