/**
 * Schelling's Model simulator
 * @author Janett
 */


//reads in the dimension input and creates grid with colored cells
let dimension = 50;
let input1 = document.querySelector("#dimension");
input1.addEventListener("input", () => {
    dimension = input1.value;
    convertToTable(); //creates grid with given dimension
    populateGrid(); //adds id tags to each cell randomly
    colorCells(); //gives colors to each cells depending on given id tag

});

//reads in the similarity threshold input
let similarityThreshhold = 0.35;
let input2 = document.querySelector("#threshold");
input2.addEventListener("input", () => {
    similarityThreshhold = input2.value;
});

//reads in the vacant cell input and colors appropriate cells
let vacantCells = 0.05;
let input3 = document.querySelector("#vacantRatio");
input3.addEventListener("input", () => {
    vacantCells = input3.value;
    convertToTable(); //creates grid with new vacant cell ratio
    populateGrid(); //populates those cells with id tags
    colorCells(); //colors in the appropriate id tags
});

//reads in the population split input and colors appropriate cells
let popSplit = 0.5;
let input4 = document.querySelector("#popRatio");
input4.addEventListener("input", () => {
    popSplit = input4.value;
    convertToTable(); //creates grid with new population split ratio
    populateGrid(); //populates grid with appropriate tags
    colorCells(); //colors each cell accordingly
});

//reads in the population X color and changes color of pop X
let popXColor = "#006EFF";
let input5 = document.querySelector("#popXcolor");
input5.addEventListener("input", () => {
    popXColor = input5.value;
    colorCells(); //changes color of cell with tag "1" based on user input
});

//reads in the population Y color and changes color of pop Y
let popYColor = "#FF7B00";
let input6 = document.querySelector("#popYcolor");
input6.addEventListener("input", () => {
    popYColor = input6.value;
    colorCells(); //changes color of cell with tag "2" based on user input

});

//randomizes the cells when the randomize button is clicked
let randomize = document.querySelector("#randomize");
randomize.addEventListener("click", () => {
    convertToTable();
    populateGrid();
    colorCells();
});

let run = document.querySelector("#runstop");
run.addEventListener("click", () => {
    neighborhoods();
    simulation();
});

/**
 * Converts the given javascript grid into an HTML table.
 * Attaches a "td" tag to each cells to be able to set id when populating the cells
 */
let grid = new Array(dimension); 
let list = new Array(); //cells with no content
function convertToTable() {
    let table = document.querySelector("#board");
    grid = new Array(dimension);
    list = new Array();
    table.innerHTML = "";
    for (let i = 0; i < dimension; i++) {
        let tableRow = document.createElement("tr");
        grid[i] = new Array(dimension);
        for (let j = 0; j < dimension; j++) {
            let tableData = document.createElement("td");
            tableRow.appendChild(tableData);
            grid[i][j] = tableData;
            list.push([i,j]);
        }
        table.appendChild(tableRow);
    }
    //console.log(grid);
}

convertToTable();

/**
 * Looks through the grid and add a #0, #1, or #2 tag to populate the grid
 */
function populateGrid() {
    let vacantNumCells = parseInt((dimension*dimension)*vacantCells);
    let popXCells = parseInt(((dimension*dimension)*popSplit)-vacantNumCells);
    let popYCells = parseInt(((dimension*dimension)*(1-popSplit))-vacantNumCells);
    //populating with vacant cells
    for(let i = 0; i < vacantNumCells; i++) {
        let listItemNum = Math.floor(Math.random()*list.length);
        let listItem = list[listItemNum];
        let x = listItem[0];
        let y = listItem[1];
        grid[x][y].id = "0";
        list.splice(listItemNum,1);
    }
    //populating with pop one
    for(let i = 0; i < popXCells; i++) {
        let listItemNum = Math.floor(Math.random()*list.length);
        let listItem = list[listItemNum];
        let x = listItem[0];
        let y = listItem[1];
        grid[x][y].id = "1";
        list.splice(listItemNum,1);
    }
    //populating with pop two
    for(let i = 0; i < popYCells; i++) {
        let listItemNum = Math.floor(Math.random()*list.length);
        let listItem = list[listItemNum];
        let x = listItem[0];
        let y = listItem[1];
        grid[x][y].id = "2";
        list.splice(listItemNum,1);
    }
}
populateGrid();

/**
 * Looks through the grid and colors each cell based on the given id tag
 */
function colorCells() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j].id == "0") {
                grid[i][j].style.backgroundColor = "#FFFF"; //sets vacant cell color to white
            }
            else if (grid[i][j].id == "1") {
                grid[i][j].style.backgroundColor = popXColor; //sets pop X color to given color by user
            }
            else if (grid[i][j].id == "2") {
                grid[i][j].style.backgroundColor = popYColor; //sets pop Y color to given color by user
            }
        }
    }
}

colorCells();

/**
 * Create a counter with the number of cells that have the same id as the current cell
 */
 let neighborhood = 0;
 function neighborhoods() {
     try {
         for(let i = 0; i < grid.length; i++) {
             for(let j = 0; j < grid[j].length; j++) {
                 if(grid[i][j].id == grid[i-1][j].id) {
                     neighborhood += 1;
                 }
                 else if (grid[i][j].id == grid[i-1][j+1].id) {
                     neighborhood += 1;
                 }
                 else if (grid[i][j].id == grid[i][j+1].id) {
                     neighborhood += 1;
                 }
                 else if (grid[i][j].id == grid[i+1][j+1].id) {
                     neighborhood += 1;
                 }
                 else if (grid[i][j].id == grid[i+1][j].id) {
                     neighborhood += 1;
                 }
                 else if (grid[i][j].id == grid[i+1][j-1].id) {
                     neighborhood += 1;
                 }
                 else if (grid[i][j].id == grid[i][j-1].id) {
                     neighborhood += 1;
                 }
                 else if (grid[i][j].id == grid[i-1][j-1].id) {
                     neighborhood += 1;
                 }
             }
         }
     }
     catch (e) {
         console.log("Cell does not exist");
     }
 }

/**
 * Checks the cells in the grid to make sure each one is satisfied and moves cells accordingly
 */
async function simulation() {
    let whiteCells = new Array(); //holds all of the vacant cells
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve(); // do nothing after waiting 100 ms, just alert the calling thread
        }, 100)
    );
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j].id == "0") {
                whiteCells.push(grid[i][j]);
            }
        }
    }
    //checks to see if the cell is satisfied, if not then it is moved to a random locaiton and that cell is now vacant
    let randomVacantCell = Math.floor(Math.random()*(whiteCells.length));
    let generationCount = 0;
    for (let k = 0; k < grid.length; k++) {
        for (let l = 0; l < grid[k].length; l++ ) {
            if (!((neighborhood/8) >= similarityThreshhold)) {
                grid[k][l] = whiteCells[randomVacantCell];
                whiteCells.splice(randomVacantCell,1);
                whiteCells.push(grid[k][l]);
                generationCount += 1;
            }
        }
    }
    //checks to see if any moves were made and updates the generation on the HTML page
    if (generationCount > 0) {
        let generation = document.getElementsByName("Generations: 0");
        generation.innerHTML = "Generation:" + generationCount;
    }
    convertToTable();
    populateGrid();
    colorCells();
}

simulation();
