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
    var Mansion = (function (_super) {
        __extends(Mansion, _super);
        function Mansion() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Mansion.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Mansion filler", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._basementButton = new objects.Button("Start", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._basementButton);
            this._basementButton.on("click", this._onBasementButtonClick, this);
            this._kitchenButton = new objects.Button("Start", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._kitchenButton);
            this._kitchenButton.on("click", this._onKitchenButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Mansion.prototype.update = function () {
            // Update objects
        };
        Mansion.prototype._onBasementButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BASEMENT;
            changeScene();
        };
        Mansion.prototype._onKitchenButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.KITCHEN;
            changeScene();
        };
        return Mansion;
    })(objects.Scene);
    scenes.Mansion = Mansion;
})(scenes || (scenes = {}));
//# sourceMappingURL=mansion.js.map