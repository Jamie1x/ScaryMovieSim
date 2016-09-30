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
    var Victory = (function (_super) {
        __extends(Victory, _super);
        function Victory() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Victory.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Victory filler", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._onMenuButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Victory.prototype.update = function () {
            // Update objects
        };
        Victory.prototype._onMenuButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.DOOMSDAY;
            changeScene();
        };
        return Victory;
    })(objects.Scene);
    scenes.Victory = Victory;
})(scenes || (scenes = {}));
//# sourceMappingURL=victory.js.map