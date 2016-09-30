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
            this._policeButton = new objects.Button("Start", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._policeButton);
            this._policeButton.on("click", this._onPoliceButtonClick, this);
            this._murdererButton = new objects.Button("Start", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._murdererButton);
            this._murdererButton.on("click", this._onMurdererButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Basement.prototype.update = function () {
            // Update objects
        };
        Basement.prototype._onPoliceButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            if (hasKnife) {
                scene = config.Scene.POLICEBAD;
            }
            else {
                scene = config.Scene.POLICEGOOD;
            }
            changeScene();
        };
        Basement.prototype._onMurdererButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MURDERER;
            changeScene();
        };
        return Basement;
    })(objects.Scene);
    scenes.Basement = Basement;
})(scenes || (scenes = {}));
//# sourceMappingURL=basement.js.map