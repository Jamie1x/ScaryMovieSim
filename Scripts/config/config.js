/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.INSTRUCTIONS = 1;
        Scene.INTRO = 2;
        Scene.BUDHOUSE = 3;
        Scene.MANSION = 4;
        Scene.MONOPOLY = 5;
        Scene.OUIJA = 6;
        Scene.BASEMENT = 7;
        Scene.KITCHEN = 8;
        Scene.MURDERER = 9;
        Scene.MURDERED = 10;
        Scene.POLICEGOOD = 11;
        Scene.POLICEBAD = 12;
        Scene.POSSESSED = 13;
        Scene.GRAVEYARD = 14;
        Scene.VICTORY = 15;
        Scene.DOOMSDAY = 16;
        return Scene;
    })();
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map