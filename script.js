const container = document.querySelector(".main-container");
let gridSize = 16;
let gridItems = [];
let setGridBtn = document.querySelector("#grid-size-button");

function createGrid() {
    let gridItemSize = Math.floor(container.clientWidth / gridSize);
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let gridItem = document.createElement("div");
            
            gridItem.style.width = `${gridItemSize}px`;
            gridItem.style.height = `${gridItemSize}px`;
            
            container.appendChild(gridItem);
            gridItems.push(gridItem);
        }

        gridItems.forEach((item) => item.onmouseenter = () => {
            console.log("A");
            item.style.backgroundColor = "black";
        });
    }
}

function deleteGrid() {
    gridItems.forEach((item) => {
        container.removeChild(item);
    });
    gridItems = [];
}

setGridBtn.onclick = () => {
    gridSize = prompt("Set grid size: ");
    deleteGrid();
    createGrid();
};

createGrid();