export default class Listener {
    constructor(scene, hero) {
        scene.actionManager = new BABYLON.ActionManager(scene);

        this.inputMap = {};
        this.hero = hero;
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
        document.addEventListener('keydown', (event) => {
            //Forward Checks (KeyRight)
            if (event.code === 'ArrowRight') {
                console.log("Forward");
                this.hero.moveForward();
            }
            //Backward Checks (KeyLeft)
            if (event.code === 'ArrowLeft') {
                console.log("Backward");
                this.hero.moveBackward();
            }
            //Jump Checks (SPACE)
            if (event.code === 'Space') {
                console.log("Jump");
                this.hero.jump();
            }
        });
    }
}
