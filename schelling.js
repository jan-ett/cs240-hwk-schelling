/**
 * Schelling's Model simulator
 * @author Janett
 */


//reads in the dimension input
let dimension = 50;
let input1 = document.querySelector("#dimension");
input1.addEventListener("input", () => {
    dimension = input1.value;
    convertToTable();
    colorCells();

});

//reads in the similarity threshold input
let similarityThreshhold = 0.35;
let input2 = document.querySelector("#threshold");
input2.addEventListener("input", () => {
    similarityThreshhold = input2.value;
});

//reads in the vacant cell input
let vacantCells = 0.05;
let input3 = document.querySelector("#vacantRatio");
input3.addEventListener("input", () => {
    vacantCells = input3.value;
});

//reads in the population split input
let popSplit = 0.5;
let input4 = document.querySelector("#popRatio");
input4.addEventListener("input", () => {
    popSplit = input4.value;
});

//reads in the population X color
let popXColor = "#006EFF";
let input5 = document.querySelector("#popXcolor");
input5.addEventListener("input", () => {
    popXColor = input5.value;
});

//reads in the population Y color
let popYColor
let input6 = document.querySelector("#popYcolor");
input6.addEventListener("input", () => {
    popYColor = input6.value;
});

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


function colorCells() {
    let vacantNumCells = parseInt((dimension*dimension)*vacantCells);
    let popX = ;
    let popY = ;
    //vacant cells
    for(let i = 0; i < vacantNumCells; i++) {
        let listItemNum = Math.floor(Math.random()*list.length);
        let listItem = list[listItemNum];
        let x = listItem[0];
        let y = listItem[1];
        console.log(grid[x][y]);
        grid[x][y].id = "0";
        grid[x][y].style.backgroundColor = "#FFFF"
        list.splice(listItemNum,1);
    }
    //pop one
    for(let i = 0; i < vacantNumCells; i++) {
        let listItemNum = Math.floor(Math.random()*list.length);
        let listItem = list[listItemNum];
        let x = listItem[0];
        let y = listItem[1];
        console.log(grid[x][y]);
        grid[x][y].id = "1";
        grid[x][y].style.backgroundColor = "#006EFF"
        list.splice(listItemNum,1);
    }
    //pop two
    for(let i = 0; i < vacantNumCells; i++) {
        let listItemNum = Math.floor(Math.random()*list.length);
        let listItem = list[listItemNum];
        let x = listItem[0];
        let y = listItem[1];
        console.log(grid[x][y]);
        grid[x][y].id = "2";
        grid[x][y].style.backgroundColor = "#FF7B00"
        list.splice(listItemNum,1);
    }
}

colorCells();