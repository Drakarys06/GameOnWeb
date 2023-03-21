export default class Hero {
    constructor(scene) {
        this.hero = BABYLON.MeshBuilder.CreateSphere("Hero", { diameter: 2 }, scene);

        this.hero.position.x = -4;
        this.hero.position.y = 6;
        this.hero.position.z = 0;

        this.hero.jumpForce = 3;

        this.hero.physicsImpostor = new BABYLON.PhysicsImpostor(this.hero, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0 }, scene);
    }

    moveForward() {
        this.hero.moveWithCollisions(new BABYLON.Vector3(-0.1, 0, 0));
    }

    moveBackward() {
        this.hero.moveWithCollisions(new BABYLON.Vector3(0.1, 0, 0));
    }

    jump() {
        this.hero.position.y = hero.jumpForce;
    }
}
