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
    var Ouija = (function (_super) {
        __extends(Ouija, _super);
        function Ouija() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Ouija.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("Ouija"));
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._basementButton = new objects.Button("Ouija-Basement", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._basementButton);
            this._basementButton.on("click", this._onBasementButtonClick, this);
            this._possessedButton = new objects.Button("Ouija-Possessed", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._possessedButton);
            this._possessedButton.on("click", this._onPossessedButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Ouija.prototype.update = function () {
            // Update objects
        };
        Ouija.prototype._onPossessedButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.POSSESSED;
            changeScene();
        };
        Ouija.prototype._onBasementButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            isPossessed = true;
            scene = config.Scene.BASEMENT;
            changeScene();
        };
        return Ouija;
    })(objects.Scene);
    scenes.Ouija = Ouija;
})(scenes || (scenes = {}));
//# sourceMappingURL=ouija.js.map