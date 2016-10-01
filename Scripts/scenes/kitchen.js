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
    var Kitchen = (function (_super) {
        __extends(Kitchen, _super);
        function Kitchen() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Kitchen.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            hasKnife = true;
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("Kitchen"));
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._basementButton = new objects.Button("Kitchen-Basement", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._basementButton);
            this._basementButton.on("click", this._onBasementButtonClick, this);
            this._budHouseButton = new objects.Button("Kitchen-House", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._budHouseButton);
            this._budHouseButton.on("click", this._onBudHouseButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Kitchen.prototype.update = function () {
            // Update objects
        };
        Kitchen.prototype._onBasementButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BASEMENT;
            changeScene();
        };
        Kitchen.prototype._onBudHouseButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BUDHOUSE;
            changeScene();
        };
        return Kitchen;
    })(objects.Scene);
    scenes.Kitchen = Kitchen;
})(scenes || (scenes = {}));
//# sourceMappingURL=kitchen.js.map