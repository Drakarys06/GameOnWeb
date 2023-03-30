export default class Camera{
    constructor(scene, canvas){
        // Parameters : name, position, scene
        this.camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 10, 30), scene);
        // Targets the camera to a particular position. In this case the scene origin
        this.camera.setTarget(BABYLON.Vector3.Zero());
        // Attach the camera to the canvas
        this.camera.attachControl(canvas, true);
    }

    updateCamera(hero){
        this.camera.position.x = hero.position.x;
        this.camera.position.y = hero.position.y + 10;
        this.camera.position.z = hero.position.z + 70;
    }
}

//Initaile idea of camera
/*var camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);
camera.radius = 20; // how far from the object to follow
camera.heightOffset = 3;    // how high above the object to place the camera
camera.cameraRotation = 0;  // the viewing angle 
camera.inputRotation = 0;   // how much to rotate the input to affect the camera
camera.attachControl(canvas,true);*/
