import { createBlock } from "./Block.js";
import { createSlabDown } from "./SlabDown.js";
import { createSlabUp } from "./SlabUp.js";
import { createDoor } from "./Door.js";

export default class Level {

    constructor(scene) {
        this.scene = scene;
        this.block = new createBlock(scene, 0, 0);
        this.map = "Test";
        this.blocks = [];
        this.door = [];
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
                    this.blocks.push(this.block);
                    break;
                case 'U':
                    this.block = new createSlabUp(this.scene, -(x * 5), y + 1);
                    x++;
                    this.blocks.push(this.block);
                    break;
                case 'D':
                    this.block = new createSlabDown(this.scene, -(x * 5), y - 1);
                    x++;
                    this.blocks.push(this.block);
                    break;
                case 'O':
                    this.block = new createDoor(this.scene, -(x * 5), y);
                    x = x + 3;
                    this.door.push(this.block);
                    break;
                case 'L':
                    x = 0;
                    y += 4;
                    break;
                case '-':
                    x++;
                    break;
                case 'E':
                    x = 0;
                    y = 50;
                    break;
            }
        }
    }

    getMap() {
        this.map =
            //Level 1       X = block, D = slabDown, U = slabUp, L = new line, - = empty space
            //              E = end of the level, O = door
            //down of the level
            'XXXXXXXDDXXXXXX-------XXXXXDDDDDXX-------L' +
            'X--------O-DDXX-------X---------XXXXXX---L' +
            'X--------------DDXX---X-------------DDXXXL' +
            'X------------------DDXX----------------DXL' +
            '-----------------------DDXUUUDDDD-------XLE' +
            //up of the levelU
            //Level 2
            '--------XXXXXXXXXXXXXXXXXXXX----------L' +
            '------XXDD---------------DDXXX--------L' +
            '------XX----------------UU---DDX------L' +
            '------XX-----DDXXXX---XX-------X------L' +
            '--------XX------DDXXXX-------UUX------L' +
            '----------XX------X------UUUUXXX------L' +
            '----------XXUU----X-X--------DDXXXXXXXL' +
            '--------XXXX------X-DDD-------------OXL' +
            'XXXXXXDDDD--------X------------------XL' +
            'X-----------------X------------------XL' +
            'X-----------------X------------------XLE';

        return this.map;
    }
}