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
    var Basement = (function (_super) {
        __extends(Basement, _super);
        function Basement() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Basement.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Basement filler", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._monopolyButton = new objects.Button("Start", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._monopolyButton);
            this._monopolyButton.on("click", this._onMonopolyButtonClick, this);
            this._ouijaButton = new objects.Button("Start", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._ouijaButton);
            this._ouijaButton.on("click", this._onOuijaButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Basement.prototype.update = function () {
            // Update objects
        };
        Basement.prototype._onMonopolyButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BUDHOUSE;
            changeScene();
        };
        Basement.prototype._onOuijaButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MANSION;
            changeScene();
        };
        return Basement;
    })(objects.Scene);
    scenes.Basement = Basement;
})(scenes || (scenes = {}));
//# sourceMappingURL=basement.js.map