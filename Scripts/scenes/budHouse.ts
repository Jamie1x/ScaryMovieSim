/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class BudHouse extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : createjs.Bitmap;
        private _monopolyButton : objects.Button;
        private _ouijaButton : objects.Button;        

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("House"));
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._monopolyButton = new objects.Button("House-Monopoly", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._monopolyButton);
            this._monopolyButton.on("click", this._onMonopolyButtonClick, this);

            this._ouijaButton = new objects.Button("House-Ouija", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._ouijaButton);
            this._ouijaButton.on("click", this._onOuijaButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onMonopolyButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MONOPOLY;
            changeScene();
        }

        private _onOuijaButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.OUIJA;
            changeScene();
        }
    }
}