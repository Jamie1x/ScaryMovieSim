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
    var Doomsday = (function (_super) {
        __extends(Doomsday, _super);
        function Doomsday() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Doomsday.prototype.start = function () {
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
        };
        Doomsday.prototype.update = function () {
            // Update objects
        };
        Doomsday.prototype._onBoomButtonClick = function (event) {
            // Set global variable to boom Scene and call changescene function
            scene = config.Scene.BOOM;
            changeScene();
        };
        return Doomsday;
    })(objects.Scene);
    scenes.Doomsday = Doomsday;
})(scenes || (scenes = {}));
//# sourceMappingURL=doomsday.js.map