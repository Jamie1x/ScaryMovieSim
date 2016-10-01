/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Doomsday extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : createjs.Bitmap;
        private _boomButton : objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("Doomsday"));
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._boomButton = new objects.Button("Doomsday-Boom", config.Screen.CENTER_X, config.Screen.CENTER_Y + 115);
            this.addChild(this._boomButton);
            this._boomButton.on("click", this._onBoomButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onBoomButtonClick(event : createjs.MouseEvent) {
            // Set global variable to boom Scene and call changescene function
            scene = config.Scene.BOOM;
            changeScene();
        }
    }
}