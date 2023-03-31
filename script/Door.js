export function createDoor(scene,x,y){
    let block = BABYLON.MeshBuilder.CreateBox("door", { height: 2, width: 2, depth: 2 }, scene);
    block.position.x = x;
    block.position.y = y;
    block.checkCollisions = false;
    /*const boxMat = new BABYLON.StandardMaterial("boxMat");
    boxMat.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png");
    block.material = boxMat;*/
    return block;
}