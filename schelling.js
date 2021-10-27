/**
 * Schelling's Model simulator
 * @author Janett
 */

class schellingsModel {
    constructor() {
        //reads in the dimension input
        this.dimension = 50;
        let input1 = document.querySelector("#dimension");
        input1.addEventListener("input", () => {
            this.dimension = input1.value;
       });

       //reads in the similarity threshold input
        this.similarityThreshhold = 0.35;
        let input2 = document.querySelector("#threshold");
        input2.addEventListener("input", () => {
            this.similarityThreshhold = input2.value;
       });

       //reads in the vacant cell input
        this.vacantCells = 0.05;
        let input3 = document.querySelector("#vacantRatio");
        input3.addEventListener("input", () => {
            this.vacantCells = input3.value;
       });

       //reads in the population split input
        this.popSplit = 0.5;
        let input4 = document.querySelector("#popRatio");
        input4.addEventListener("input", () => {
            this.popSplit = input4.value;
       });

       //reads in the population X color
        this.popXColor = "#006EFF";
        let input5 = document.querySelector("#popXcolor");
        input5.addEventListener("input", () => {
            this.popXColor = input5.value;
       });

        //reads in the population Y color
        this.popYwoColor = "#FF7B00";
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