import { createBlock } from "./Block.js";
import { createSlab } from "./Slab.js";

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
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j] == 'X') {
                    this.block = new createBlock(this.scene, -(x*5), y);
                    x++;
                }
                if (this.map[i][j] == '_') {
                    this.block = new createSlab(this.scene, -(x*5), y-1);
                    x++;
                }
                if (this.map[i][j] == 'L') {
                    x = 0;
                    y += 4;
                }
                if (this.map[i][j] == '-') {
                    x++;
                }
            }
        }
    }

    getMap() {
        this.map =
        //Level 1       X = block, _ = slab, L = new line, - = empty space
            'XXXXXXX___XXXXXL' +      //down of the level
            'X----------__XXL' +
            'X-------------XL' + 
            'XXXXXXXXXXXXXXXL';      //up of the level
        //Level 2
        return this.map;
    }
}