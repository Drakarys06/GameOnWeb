import { createBox } from "./Box";

export function createTuto(scene){
    var tuto = BABYLON.MeshBuilder.CreateBox("tuto", { height: 4, width: 4, depth: 2 }, scene);
    var box1 = new createBox(scene, 10, 0);
    var box2 = new createBox(scene, 14, 0);
    var box3 = new createBox(scene, 14, 4);
    var box4 = new createBox(scene, 14, 8);
    return tuto;
}