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
    var Intro = (function (_super) {
        __extends(Intro, _super);
        function Intro() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Intro.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("Intro"));
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._budButton = new objects.Button("Intro-House", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._budButton);
            this._budButton.on("click", this._onBudButtonClick, this);
            this._mansionButton = new objects.Button("Intro-Mansion", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._mansionButton);
            this._mansionButton.on("click", this._onMansionButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Intro.prototype.update = function () {
            // Update objects
        };
        Intro.prototype._onBudButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BUDHOUSE;
            changeScene();
        };
        Intro.prototype._onMansionButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MANSION;
            changeScene();
        };
        return Intro;
    })(objects.Scene);
    scenes.Intro = Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro.js.map