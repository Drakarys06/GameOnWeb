import { createBlock } from "./Block.js";
import { createSlabDown } from "./SlabDown.js";
import { createSlabUp } from "./SlabUp.js";

export default class Level {

    constructor(scene) {
        this.scene = scene;
        this.block = new createBlock(scene, 0, 0);
        this.map = "Test";
    }

    createLevel() {
        //creation of the level
        this.getMap();
        var x = 0;
        var y = 0;
        for (let i = 0; i < this.map.length; i++) {
            switch (this.map[i]) {
                case 'X':
                    this.block = new createBlock(this.scene, -(x * 5), y);
                    x++;
                    break;
                case 'U':
                    this.block = new createSlabUp(this.scene, -(x * 5), y+1);
                    x++;
                    break;
                case 'D':
                    this.block = new createSlabDown(this.scene, -(x * 5), y - 1);
                    x++;
                    break;
                case 'L':
                    x = 0;
                    y += 4;
                    break;
                case '-':
                    x++;
                    break;
            }
        }
    }

    getMap() {
        this.map =
            //Level 1       X = block, D = slabDown, U = slabUp, L = new line, - = empty space
            //down of the level
            'XXXXXXXDDXXXXXXXXXXXXXL' +
            'X----------DDXXXXXXXXXL' +
            'X--------------DDXXXXXL' +
            'XXXXXXXXUUUUU------DDXL' +
            'XXXXXXXXXXXXDDDD-----XL';      
            //up of the level
        //Level 2
        return this.map;
    }
}