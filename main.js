let gridContainer = document.querySelector('.gridContainer');
let gridSize = 16; // Start with a 16x16 grid
let cellSize = (500 / gridSize) + 'px';

// Function to create grid
function createGrid(value) {
    for (let i = 0; i < value; i++){
        createRow(value);
    }
}

// Function to create row
function createRow(value) {
    let cellSize = (500 / value) + 'px';
    for (let i = 0; i < value; i++){
        newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        newDiv.style.width = cellSize;
        newDiv.style.height = cellSize;
        gridContainer.appendChild(newDiv);
    }
}

createGrid(gridSize);

let button = document.querySelector('.gridSize');
button.addEventListener('click', userGrid);

// Function to get user input and create grid accordingly
function userGrid() {
    // Check if grid size is more than 100
    do {
        gridSize = prompt("Enter a Grid Size, Max 100");
    }
    while ((gridSize > 100) || isNaN(gridSize));
    // Empty grid container
    gridContainer.innerHTML = "";
    // Create new grid
    createGrid(gridSize);
}

