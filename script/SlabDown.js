export function createSlabDown(scene,x,y){
    let slab = BABYLON.MeshBuilder.CreateBox("slabDown", { height: 2,width: 5, depth: 2 }, scene);
    slab.position.x = x;
    slab.position.y = y;
    slab.checkCollisions = true;
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    boxMat.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png");
    slab.material = boxMat;
    slab.physicsImpostor = new BABYLON.PhysicsImpostor(slab, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
    return slab;
}