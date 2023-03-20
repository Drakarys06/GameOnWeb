import { createBox } from "./Box.js";
import { createCamera } from "./Camera.js";
import { createHero } from "./Hero.js";

const canvas = document.getElementById("gameOnWeb"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {
    const scene = new BABYLON.Scene(engine);
    //creation of the hero
    var hero = new createHero(scene);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.8;

    //creation of the tutorial temporary
    var box = new createBox(scene, 10, 0);
    box = new createBox(scene, 14, 0);
    box = new createBox(scene, 14, 4);
    box = new createBox(scene, 14, 8);
    box = new createBox(scene, 6, 0);
    box = new createBox(scene, 2, 0);
    box = new createBox(scene, -2, 0);
    box = new createBox(scene, -2, 2);
    box = new createBox(scene, -2, 0);
    box = new createBox(scene, -2, 2);
    box = new createBox(scene, -6, 0);
    box = new createBox(scene, -6, 2);
    box = new createBox(scene, -10, 0);
    box = new createBox(scene, -10, 2);
    box = new createBox(scene, -14, 0);
    box = new createBox(scene, -14, 4);
    box = new createBox(scene, -18, 0);
    box = new createBox(scene, -22, 0);

    //creation of the camera and follows the sphere
    let camera = new createCamera(scene, canvas);
    camera.lockedTarget = hero; // the camera will follow the sphere
    return scene;
};

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});