function makeGrid(num) {
    const container = document.querySelector("#container");
    container.innerHTML = ""; // Clear previous grid
    let pixelSize = `calc(100% / ${num})`; // Dynamic pixel size

    for (let i = 0; i < num * num; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        div.style.flex = "1 0 auto"; // Make the div flexible
        div.style.width = pixelSize; // Set width dynamically
        div.style.height = pixelSize; // Set height dynamically
        container.appendChild(div); // Append each pixel div
    }
}

// Event listener for generating the grid
document.getElementById("generateGrid").addEventListener("click", () => {
    const size = document.getElementById("gridSize").value;
    if (size > 0) {
        makeGrid(size);
    }
});

document.querySelector("#container").addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("pixel")) {
        event.target.style.backgroundColor = "black";
    }
});