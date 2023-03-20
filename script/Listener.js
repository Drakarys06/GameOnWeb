export function listener(scene, hero) {
    scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
            case BABYLON.KeyboardEventTypes.KEYDOWN:
                switch (kbInfo.event.key) {
                    case "ArrowUp":
                        hero.moveForward();
                        break;
                    case "ArrowDown":
                        hero.moveBackward();
                        break;
                    case "ArrowLeft":
                        hero.position.x += 0.5;
                        break;
                    case "ArrowRight":
                        hero.position.x -= 0.5;
                        break;
                }
                break;
        }
    });
}