import { createBox } from "./Box.js";
import { createCamera } from "./Camera.js";
import { createHero } from "./Hero.js";
import { listener } from "./Listener.js";

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
    
    var box = new createBox(scene, 14, 0);
    box = new createBox(scene, 14, 4);
    box = new createBox(scene, 14, 8);
    box = new createBox(scene, 14, 12);
    box = new createBox(scene, 10, 0);
    box = new createBox(scene, 10, 12);
    box = new createBox(scene, 6, 0);
    box = new createBox(scene, 6, 12);
    box = new createBox(scene, 2, 0);
    box = new createBox(scene, 2, 12);
    box = new createBox(scene, -2, 0);
    box = new createBox(scene, -2, 2);
    box = new createBox(scene, -2, 12);
    box = new createBox(scene, -6, 0);
    box = new createBox(scene, -6, 2);
    box = new createBox(scene, -6, 12);
    box = new createBox(scene, -10, 0);
    box = new createBox(scene, -10, 2);
    box = new createBox(scene, -10, 12);
    box = new createBox(scene, -14, 0);
    box = new createBox(scene, -14, 4);
    box = new createBox(scene, -14, 12);
    box = new createBox(scene, -18, 0);
    box = new createBox(scene, -18, 12);
    box = new createBox(scene, -22, 0);
    box = new createBox(scene, -24, 10);
    box = new createBox(scene, -22, 12);
    box = new createBox(scene, -26, 0);
    box = new createBox(scene, -26, 8);
    box = new createBox(scene, -26, 12);


    //creation of the camera and follows the sphere
    let camera = new createCamera(scene, canvas);
    camera.lockedTarget = hero; // the camera will follow the sphere

    //creation of the listener to move the hero
    listener(scene, hero);
    
    // Register a render loop to repeatedly render the scene
    var toRender = function () {
        
        scene.render();
    };
    engine.runRenderLoop(toRender);

    return scene;
};

const scene = createScene(); //Call the createScene function



// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});