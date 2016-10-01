/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
var hasKnife = false;
var isPossessed = false;
// Game scenes
var menuScene;
var instructionScene;
// Preload Assets required
var assetData = [
    { id: "Start", src: "../../Assets/images/Start.jpg" },
    { id: "Menu", src: "../../Assets/images/menu.jpg" },
    { id: "Instructions", src: "../../Assets/images/instructions.jpg" },
    { id: "Intro", src: "../../Assets/images/intro.jpg" },
    { id: "Intro-Mansion", src: "../../Assets/images/intro-mansion.jpg" },
    { id: "Intro-House", src: "../../Assets/images/intro-house.jpg" },
    { id: "House", src: "../../Assets/images/budHouse.jpg" },
    { id: "House-Monopoly", src: "../../Assets/images/house-monopoly.jpg" },
    { id: "House-Ouija", src: "../../Assets/images/house-ouija.jpg" },
    { id: "Monopoly", src: "../../Assets/images/monopoly.jpg" },
    { id: "Monopoly-Cops", src: "../../Assets/images/monopoly-cops.jpg" },
    { id: "Monopoly-Graveyard", src: "../../Assets/images/monopoly-graveyard.jpg" },
    { id: "Graveyard", src: "../../Assets/images/graveyard.jpg" },
    { id: "Graveyard-Menu", src: "../../Assets/images/graveyard-menu.jpg" },
    { id: "CopsGood", src: "../../Assets/images/copsgood.jpg" },
    { id: "CopsBad", src: "../../Assets/images/copsbad.jpg" },
    { id: "Cops-Menu", src: "../../Assets/images/cops-menu.jpg" },
    { id: "CopsBad-Menu", src: "../../Assets/images/copsbad-menu.jpg" },
    { id: "Ouija", src: "../../Assets/images/ouija.jpg" },
    { id: "Ouija-Basement", src: "../../Assets/images/ouija-basement.jpg" },
    { id: "Ouija-Possessed", src: "../../Assets/images/ouija-possessed.jpg" },
    { id: "Possessed", src: "../../Assets/images/possessed.jpg" },
    { id: "Possessed-Menu", src: "../../Assets/images/possessed-menu.jpg" },
    { id: "Mansion", src: "../../Assets/images/mansion.jpg" },
    { id: "Mansion-Basement", src: "../../Assets/images/mansion-basement.jpg" },
    { id: "Mansion-Kitchen", src: "../../Assets/images/mansion-kitchen.jpg" },
    { id: "Kitchen", src: "../../Assets/images/kitchen.jpg" },
    { id: "Kitchen-Basement", src: "../../Assets/images/kitchen-basement.jpg" },
    { id: "Kitchen-House", src: "../../Assets/images/kitchen-house.jpg" },
    { id: "Basement", src: "../../Assets/images/basement.jpg" },
    { id: "Basement-Murderer", src: "../../Assets/images/basement-murderer.jpg" },
    { id: "Basement-Cops", src: "../../Assets/images/basement-cops.jpg" },
    { id: "Murderer", src: "../../Assets/images/murderer.jpg" },
    { id: "Murderer-Murdered", src: "../../Assets/images/murderer-murdered.jpg" },
    { id: "Murderer-Victory", src: "../../Assets/images/murderer-victory.jpg" },
    { id: "Murdered", src: "../../Assets/images/murdered.jpg" },
    { id: "Murdered-Menu", src: "../../Assets/images/murdered-menu.jpg" },
    { id: "Victory", src: "../../Assets/images/victory.jpg" },
    { id: "Victory-Doomsday", src: "../../Assets/images/victory-doomsday.jpg" },
    { id: "Doomsday", src: "../../Assets/images/doomsday.jpg" },
    { id: "Doomsday-Boom", src: "../../Assets/images/doomsday-boom.jpg" },
    { id: "Boom", src: "../../Assets/images/boom.jpg" },
    { id: "Boom-Menu", src: "../../Assets/images/boom-menu.jpg" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.INSTRUCTIONS:
            stage.removeAllChildren();
            currentScene = new scenes.Instructions();
            console.log("Starting INSTRUCTIONS scene");
            break;
        case config.Scene.INTRO:
            stage.removeAllChildren();
            currentScene = new scenes.Intro();
            console.log("Starting Intro scene");
            break;
        case config.Scene.BUDHOUSE:
            stage.removeAllChildren();
            currentScene = new scenes.BudHouse();
            console.log("Starting BudHouse scene");
            break;
        case config.Scene.MANSION:
            stage.removeAllChildren();
            currentScene = new scenes.Mansion();
            console.log("Starting Mansion scene");
            break;
        case config.Scene.MONOPOLY:
            stage.removeAllChildren();
            currentScene = new scenes.Monopoly;
            console.log("Starting MONOPOLY scene");
            break;
        case config.Scene.OUIJA:
            stage.removeAllChildren();
            currentScene = new scenes.Ouija;
            console.log("Starting OUIJA scene");
            break;
        case config.Scene.BASEMENT:
            stage.removeAllChildren();
            currentScene = new scenes.Basement;
            console.log("Starting BASEMENT scene");
            break;
        case config.Scene.KITCHEN:
            stage.removeAllChildren();
            currentScene = new scenes.Kitchen;
            console.log("Starting KITCHEN scene");
            break;
        case config.Scene.MURDERER:
            stage.removeAllChildren();
            currentScene = new scenes.Murderer;
            console.log("Starting MURDERER scene");
            break;
        case config.Scene.MURDERED:
            stage.removeAllChildren();
            currentScene = new scenes.Murdered;
            console.log("Starting MURDERED scene");
            break;
        case config.Scene.POLICEGOOD:
            stage.removeAllChildren();
            currentScene = new scenes.PoliceGood;
            console.log("Starting POLICEGOOD scene");
            break;
        case config.Scene.POLICEBAD:
            stage.removeAllChildren();
            currentScene = new scenes.PoliceBad;
            console.log("Starting POLICEBAD scene");
            break;
        case config.Scene.POSSESSED:
            stage.removeAllChildren();
            currentScene = new scenes.Possessed;
            console.log("Starting POSSESSED scene");
            break;
        case config.Scene.GRAVEYARD:
            stage.removeAllChildren();
            currentScene = new scenes.Graveyard;
            console.log("Starting GRAVEYARD scene");
            break;
        case config.Scene.VICTORY:
            stage.removeAllChildren();
            currentScene = new scenes.Victory;
            console.log("Starting VICTORY scene");
            break;
        case config.Scene.DOOMSDAY:
            stage.removeAllChildren();
            currentScene = new scenes.Doomsday;
            console.log("Starting DOOMSDAY scene");
            break;
        case config.Scene.BOOM:
            stage.removeAllChildren();
            currentScene = new scenes.Boom;
            console.log("Starting BOOM scene");
            break;
    }
}
/*
case config.Scene :
            stage.removeAllChildren();
            currentScene = new scenes ;
            console.log("Starting  scene");
            break;
            */ 
//# sourceMappingURL=game.js.map