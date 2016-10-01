/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static INSTRUCTIONS : number = 1;
        public static INTRO : number = 2;
        public static BUDHOUSE : number = 3;
        public static MANSION : number = 4;
        public static MONOPOLY : number = 5;
        public static OUIJA : number = 6;
        public static BASEMENT : number = 7;
        public static KITCHEN : number = 8;
        public static MURDERER : number = 9;
        public static MURDERED : number = 10;
        public static POLICEGOOD : number = 11;
        public static POLICEBAD : number = 12;
        public static POSSESSED : number = 13;
        public static GRAVEYARD : number = 14;
        public static VICTORY : number = 15;
        public static DOOMSDAY : number = 16;
        public static BOOM : number = 17;        
    }

    export class Screen {
        public static WIDTH : number = 640;
        public static HEIGHT : number = 480;
        public static CENTER_X : number = 320;
        public static CENTER_Y : number = 240;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}