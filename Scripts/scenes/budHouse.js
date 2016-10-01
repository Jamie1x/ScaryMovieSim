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
    var BudHouse = (function (_super) {
        __extends(BudHouse, _super);
        function BudHouse() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        BudHouse.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new createjs.Bitmap(assets.getResult("House"));
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._monopolyButton = new objects.Button("House-Monopoly", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._monopolyButton);
            this._monopolyButton.on("click", this._onMonopolyButtonClick, this);
            this._ouijaButton = new objects.Button("House-Ouija", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._ouijaButton);
            this._ouijaButton.on("click", this._onOuijaButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        BudHouse.prototype.update = function () {
            // Update objects
        };
        BudHouse.prototype._onMonopolyButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MONOPOLY;
            changeScene();
        };
        BudHouse.prototype._onOuijaButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.OUIJA;
            changeScene();
        };
        return BudHouse;
    })(objects.Scene);
    scenes.BudHouse = BudHouse;
})(scenes || (scenes = {}));
//# sourceMappingURL=budHouse.js.map