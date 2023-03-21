import Hero from "./Hero.js";
export default class Listener {
    constructor(scene) {
        scene.actionManager = new BABYLON.ActionManager(scene);

        this.inputMap = {};

        scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, (evt) => {
            this.inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
        }));
        scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, (evt) => {
            this.inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
        }));
        scene.onBeforeRenderObservable.add(() => {
            this.updateFromKeyboard();
        });
    }

    updateFromKeyboard() {
        //Forward Checks (KeyRight)
        if (this.inputMap["ArrowRight"]) {
            console.log("Forward");
        }
        //Backward Checks (KeyLeft)
        if (this.inputMap["ArrowLeft"]) {
            console.log("Backward");
        }
        //Jump Checks (SPACE)
        if (this.inputMap[" "]) {
            console.log("Jump");
        }
    }
}