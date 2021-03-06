/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Graveyard = (function (_super) {
        __extends(Graveyard, _super);
        function Graveyard() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Graveyard.prototype.start = function () {
            // Add objects to the scene
            this._gameLabel = new createjs.Bitmap(assets.getResult("Graveyard"));
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._menuButton = new objects.Button("Graveyard-Menu", config.Screen.CENTER_X, config.Screen.CENTER_Y + 115);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._onMenuButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Graveyard.prototype.update = function () {
            // Update objects
        };
        Graveyard.prototype._onMenuButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Graveyard;
    })(objects.Scene);
    scenes.Graveyard = Graveyard;
})(scenes || (scenes = {}));
//# sourceMappingURL=graveyard.js.map