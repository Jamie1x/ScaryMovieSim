/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Monopoly extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel: objects.Label;
        private _graveyardButton: objects.Button;
        private _policeButton: objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
            // Add objects to the scene
            console.log("Game scene started");

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Monopoly filler", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._graveyardButton = new objects.Button("Start", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._graveyardButton);
            this._graveyardButton.on("click", this._onGraveyardButtonClick, this);

            this._policeButton = new objects.Button("Start", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._policeButton);
            this._policeButton.on("click", this._onPoliceButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update(): void {
            // Update objects
        }

        private _onGraveyardButtonClick(event: createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.GRAVEYARD;
            changeScene();
        }

        private _onPoliceButtonClick(event: createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            if (hasKnife) {
                scene = config.Scene.POLICEBAD;
            }
            else {
                scene = config.Scene.POLICEGOOD;
            }
            changeScene();
        }
    }
}