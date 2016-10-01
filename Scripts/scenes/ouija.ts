/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Ouija extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : createjs.Bitmap;
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
            this._gameLabel = new createjs.Bitmap(assets.getResult("Ouija"));
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._basementButton = new objects.Button("Ouija-Basement", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._basementButton);
            this._basementButton.on("click", this._onBasementButtonClick, this);

            this._possessedButton = new objects.Button("Ouija-Possessed", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._possessedButton);
            this._possessedButton.on("click", this._onPossessedButtonClick, this);

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