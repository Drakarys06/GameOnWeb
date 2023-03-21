export function createBox(scene,x,y){
    let box = BABYLON.MeshBuilder.CreateBox("box", { height: 4, width: 5, depth: 2 }, scene);
    box.position.x = x;
    box.position.y = y;
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    boxMat.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png");
    box.material = boxMat;
    box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
    return box;
}