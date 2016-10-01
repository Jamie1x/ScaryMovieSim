/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Kitchen extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : createjs.Bitmap;
        private _basementButton : objects.Button;
        private _budHouseButton : objects.Button;        

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");

            hasKnife = true;

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("Kitchen"));
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._basementButton = new objects.Button("Kitchen-Basement", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._basementButton);
            this._basementButton.on("click", this._onBasementButtonClick, this);

            this._budHouseButton = new objects.Button("Kitchen-House", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._budHouseButton);
            this._budHouseButton.on("click", this._onBudHouseButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onBasementButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BASEMENT;
            changeScene();
        }

        private _onBudHouseButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BUDHOUSE;
            changeScene();
        }
    }
}