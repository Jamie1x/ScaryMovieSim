/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Ouija extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label;
        private _possessedButton : objects.Button;
        private _basementButton : objects.Button;        

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Ouija filler", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._possessedButton = new objects.Button("Start", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._possessedButton);
            this._possessedButton.on("click", this._onPossessedButtonClick, this);

            this._basementButton = new objects.Button("Start", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._basementButton);
            this._basementButton.on("click", this._onBasementButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onPossessedButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.POSSESSED;
            changeScene();
        }

        private _onBasementButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            isPossessed = true;
            scene = config.Scene.BASEMENT;
            changeScene();
        }
    }
}