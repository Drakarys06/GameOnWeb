import { createLevel } from "./Level.js";
import Listener from "./Listener.js";
import Hero from "./Hero.js";
import Camera from "./Camera.js";

const canvas = document.getElementById("gameOnWeb"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    const scene = new BABYLON.Scene(engine);
    //Gravity
    scene.enablePhysics();

    //creation of the level
    createLevel(scene);
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.8;

    //creation of the camera and follows the sphere
    var camera = new Camera(scene, canvas);
    //creation of the hero
    var hero = new Hero(scene);
    //creation of the listener to move the hero
    var input = new Listener(scene);


    // Register a render loop to repeatedly render the scene
    var toRender = function () {
        hero.moveForward();
        camera.updateCamera(hero.hero);
        input.updateFromKeyboard(hero.hero);
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

