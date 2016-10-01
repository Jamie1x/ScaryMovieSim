/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Murderer extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel: createjs.Bitmap;
        private _runButton: objects.Button;
        private _fightButton: objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
            // Add objects to the scene
            console.log("Game scene started");

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("Murderer"));
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._fightButton = new objects.Button("Murderer-Victory", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._fightButton);
            this._fightButton.on("click", this._onFightButtonClick, this);
            
            this._runButton = new objects.Button("Murderer-Murdered", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._runButton);
            this._runButton.on("click", this._onRunButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update(): void {
            // Update objects
        }

        private _onRunButtonClick(event: createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MURDERED;
            changeScene();
        }

        private _onFightButtonClick(event: createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            if (hasKnife && isPossessed) {
                scene = config.Scene.VICTORY;
            }
            else {
                scene = config.Scene.MURDERED;
            }
            changeScene();
        }
    }
}