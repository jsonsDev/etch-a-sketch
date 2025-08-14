const container = document.querySelector(".grid-container");

let gridSize = 16;

createGrid();

const buttonContainer = document.querySelector(".button-container");
const requestButton = document.createElement("button");
requestButton.classList.add("request-button");
requestButton.textContent = "Create new grid";
buttonContainer.appendChild(requestButton);

const createGridButton = document.querySelector(".request-button");
createGridButton.addEventListener("click", () => {
    removeGrid();
    let input = prompt("Enter number of squares per side to create a new grid");
    gridSize = parseInt(input);
    
    if (isNaN(gridSize)) {
        input = prompt("Not a number! Try again!");
    } else if(gridSize > 100) {
        input = prompt("Keep it under 100:");
    } else {
        input = gridSize;
        createGrid();
    }
});

function removeGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
    const gridRemove = document.querySelector(".grid-square");
    gridRemove.remove();
    };
};


function createGrid() {
    let = squareSize = container.clientWidth / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.classList.add("etched-grid");
    });
    };
};