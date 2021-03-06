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
    var Murderer = (function (_super) {
        __extends(Murderer, _super);
        function Murderer() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Murderer.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("Murderer"));
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._fightButton = new objects.Button("Murderer-Victory", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._fightButton);
            this._fightButton.on("click", this._onFightButtonClick, this);
            this._runButton = new objects.Button("Murderer-Murdered", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._runButton);
            this._runButton.on("click", this._onRunButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Murderer.prototype.update = function () {
            // Update objects
        };
        Murderer.prototype._onRunButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MURDERED;
            changeScene();
        };
        Murderer.prototype._onFightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            if (hasKnife && isPossessed) {
                scene = config.Scene.VICTORY;
            }
            else {
                scene = config.Scene.MURDERED;
            }
            changeScene();
        };
        return Murderer;
    })(objects.Scene);
    scenes.Murderer = Murderer;
})(scenes || (scenes = {}));
//# sourceMappingURL=murderer.js.map