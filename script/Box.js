export function createBox(scene,x,y){
    let box = BABYLON.MeshBuilder.CreateBox("box", { height: 4, width: 4, depth: 2 }, scene);
    box.position.x = x;
    box.position.y = y;
    return box;
}