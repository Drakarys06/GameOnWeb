export function createBlock(scene,x,y){
    let block = BABYLON.MeshBuilder.CreateBox("block", { height: 4, width: 5, depth: 2 }, scene);
    block.position.x = x;
    block.position.y = y;
    block.checkCollisions = true;
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    boxMat.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png");
    block.material = boxMat;
    block.physicsImpostor = new BABYLON.PhysicsImpostor(block, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
    return block;
}