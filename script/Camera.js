export function createCamera(scene, canvas) {
    var camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);
    camera.radius = 20; // how far from the object to follow
    camera.heightOffset = 3;    // how high above the object to place the camera
    camera.cameraRotation = 0;  // the viewing angle 
    camera.inputRotation = 0;
    camera.detachControl(canvas);
    return camera;
}