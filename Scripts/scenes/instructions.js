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
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        function Instructions() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Instructions.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("Instructions"));
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._gameButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Instructions.prototype.update = function () {
            // Update objects
        };
        Instructions.prototype._onButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Instructions;
    })(objects.Scene);
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map