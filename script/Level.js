import { createBox } from "./Box.js";

export function createLevel(scene){

    //Level 1
    var box = new createBox(scene, 15, 0);
    box = new createBox(scene, 15, 4);
    box = new createBox(scene, 15, 8);
    box = new createBox(scene, 15, 12);
    box = new createBox(scene, 10, 0);
    box = new createBox(scene, 10, 12);
    box = new createBox(scene, 5, 0);
    box = new createBox(scene, 5, 12);
    box = new createBox(scene, 0, 0);
    box = new createBox(scene, 0, 12);
    box = new createBox(scene, -5, 0);
    box = new createBox(scene, -5, 12);
    box = new createBox(scene, -10, 0);
    box = new createBox(scene, -10, 12);
    box = new createBox(scene, -15, 0);
    box = new createBox(scene, -15, 12);
    box = new createBox(scene, -20, 0);
    box = new createBox(scene, -20, 12);
    box = new createBox(scene, -25, 0);
    box = new createBox(scene, -25, 12);
    box = new createBox(scene, -30, 0);
    box = new createBox(scene, -30, 12);
    box = new createBox(scene, -35, 0);
    box = new createBox(scene, -35, 8);
    box = new createBox(scene, -35, 12);
}