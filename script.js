const container = document.querySelector(".main-container");
let gridSize = 16;
let gridItems = [];
let setGridBtn = document.querySelector("#grid-size-button");

function createGrid() {
    let gridItemSize = (container.clientWidth / gridSize).toFixed(0);
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let gridItem = document.createElement("div");
            
            gridItem.style.width = `${gridItemSize}px`;
            gridItem.style.height = `${gridItemSize}px`;
            
            container.appendChild(gridItem);
            gridItems.push(gridItem);
        }
    }
}

gridItems.forEach((item) => item.onmouseenter = () => {
    console.log("A");
    item.style.backgroundColor = "black";
});
    
createGrid();