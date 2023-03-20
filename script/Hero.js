export function createHero(scene) {

    let hero = BABYLON.MeshBuilder.CreateSphere("Hero", { diameter: 2 }, scene);

    hero.position.z = 0;
    hero.position.x = 10;
    hero.position.y = 3;
    return hero;
}

