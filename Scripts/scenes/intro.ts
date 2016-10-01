/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Intro extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel: createjs.Bitmap;
        private _budButton: objects.Button;
        private _mansionButton: objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
            // Add objects to the scene
            console.log("Game scene started");

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("Intro"));
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._budButton = new objects.Button("Intro-House", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._budButton);
            this._budButton.on("click", this._onBudButtonClick, this);

            this._mansionButton = new objects.Button("Intro-Mansion", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._mansionButton);
            this._mansionButton.on("click", this._onMansionButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update(): void {
            // Update objects
        }

        private _onBudButtonClick(event: createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BUDHOUSE;
            changeScene();
        }

        private _onMansionButtonClick(event: createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MANSION;
            changeScene();
        }
    }
}