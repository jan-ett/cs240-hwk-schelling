/**
 * Schelling's Model simulator
 * @author Janett
 */

class schellingsModel {
    constructor() {
        //reads in the dimension input
        let input1 = document.querySelector("#dimension");
        input1.addEventListener("input", () => {
            this.dimension = input1.value;
            this.grid = new Array(this.dimension);
            for (let i = 0; i < this.dimension; i++){
                this.grid[i] = new Array(this.dimension);
            }
            console.log(this.dimension);
            console.log(this.grid);
       });

       //reads in the similarity threshold input
        let input2 = document.querySelector("#threshold");
        input2.addEventListener("input", () => {
            this.similarityThreshhold = input2.value;
       });

       //reads in the vacant cell input
        let input3 = document.querySelector("#vacantRatio");
        input3.addEventListener("input", () => {
            this.vacantCells = input3.value;
       });

       //reads in the population split input
        let input4 = document.querySelector("#popRatio");
        input4.addEventListener("input", () => {
            this.popSplit = input4.value;
       });

       //reads in the population X color
        let input5 = document.querySelector("#popXcolor");
        input5.addEventListener("input", () => {
            this.popXColor = input5.value;
       });

        //reads in the population Y color
        let input6 = document.querySelector("#popYcolor");
        input6.addEventListener("input", () => {
            this.popYwoColor = input6.value;
       });
    }

    convertToTable() {
        //take from field once created
    }
}

const tester = new schellingsModel();