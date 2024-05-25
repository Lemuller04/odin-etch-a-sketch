const container = document.querySelector(".main-container");
let gridSize = 16;
let gridItems = [];
let setGridBtn = document.querySelector("#grid-size-button");
let gridItemSize;

function createGrid() {
    gridItemSize = container.clientWidth / gridSize;

    console.log(container.clientWidth / gridSize)

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let gridItem = document.createElement("div");
            
            gridItem.style.width = `${gridItemSize}px`;
            gridItem.style.height = `${gridItemSize}px`;
            
            container.appendChild(gridItem);
            gridItems.push(gridItem);
        }

        gridItems.forEach((item) => item.onmouseenter = () => {
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
    while (1) {
        gridSize = prompt("Set grid size (1 - 100): ");
        
        if (gridSize >= 1 && gridSize <= 100) {
            deleteGrid();
            createGrid();
            return;
        } else {
            alert("Please, insert a number between 1 and 100");
        }
    }
};

createGrid();