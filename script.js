const container = document.querySelector(".main-container");
const gridSize = 16;
let gridItems = [];
let gridItemSize = container.clientWidth / gridSize;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let gridItem = document.createElement("div");

        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;

        container.appendChild(gridItem);
        gridItems.push(gridItem);
    }
}

gridItems.forEach((item) => item.onmouseenter = () => {
    console.log("A");
    item.style.backgroundColor = "black";
});