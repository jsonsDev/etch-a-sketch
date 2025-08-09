// Create a 16x16 grid

const container = document.querySelector(".grid-container");

for (let i = 0; i <256; i++) {
const gridSquare = document.createElement("div");
gridSquare.classList.add("grid-square");
container.appendChild(gridSquare);
};

const buttonContainer = document.querySelector(".button-container");
const requestButton = document.createElement("button");
requestButton.classList.add("request-button");
requestButton.textContent = "Create new grid";
buttonContainer.appendChild(requestButton);