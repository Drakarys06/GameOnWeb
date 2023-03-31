export default class Hero {
    constructor(scene) {
        this.hero = BABYLON.MeshBuilder.CreateSphere("hero", { diameter: 2 }, scene);

        this.hero.position.x = -4;
        this.hero.position.y = 6;
        this.hero.position.z = 0;
        this.hero.speed = -0.15;

        this.hero.jumpForce = 3;
        this.hero.jumping = false;

        this.hero.physicsImpostor = new BABYLON.PhysicsImpostor(this.hero, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0 }, scene);
    }

    move(){
        this.hero.moveWithCollisions(new BABYLON.Vector3(this.hero.speed, 0, 0));
    }

    moveForward() {
        this.hero.speed = -0.15;
    }

    moveBackward() {
        this.hero.speed = 0.15;
    }

    jump() {
        if (!this.hero.jumping) {
            this.hero.position.y += this.hero.jumpForce;
            this.hero.jumping = true;
            console.log("Jump");
        }
    }

    resetJump() {
        console.log("Reset Jump");
        this.hero.jumping = false;
    }
}
