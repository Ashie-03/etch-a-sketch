let gridContainer = document.querySelector('.gridContainer');
let gridSize = 16; // Start with a 16x16 grid
let cellSize = (500 / gridSize) + 'px';

// Function to create grid
function createGrid(value) {
    for (let i = 0; i < value; i++){
        createRow(value);
    }

    // add hover effects
    addHoverEffects();
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

// Randomly generate numbers for colors
function generateColour(){
    let colours = {};
    colours.red = Math.round((Math.random()) * 255);
    colours.green = Math.round(Math.random() * 255);
    colours.blue = Math.round(Math.random() * 255);
    rgb = `${colours.red}, ${colours.green}, ${colours.blue}`;
    return rgb
}

// Function for hover event
function onHoverEvent(cell){
    let colors = generateColour();
    cell.style.backgroundColor = `rgb(${colors})`;
}

// Function to add Hover effects
function addHoverEffects() {
    // Select all cells again
    let gridCell = document.querySelectorAll('.grid');
    // Add event listener to each cell  
    gridCell.forEach(cell => {
    cell.addEventListener('mouseover', () => onHoverEvent(cell))
})};

// create a 16x16 grid when page loads
createGrid(gridSize);

// Add event listener to button
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