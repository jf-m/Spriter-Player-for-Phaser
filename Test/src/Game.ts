﻿/// <reference path="../lib/phaser.d.ts" />
module SpriterExample {

    export class Game extends Phaser.Game {
        public static game: Phaser.Game;

        // -------------------------------------------------------------------------
        constructor() {
            // init game
            super(Global.GAME_WIDTH, Global.GAME_HEIGHT, Phaser.CANVAS, "content", null /* , transparent, antialias, physicsConfig */);

            Game.game = this;
            
            // states
            this.state.add("Boot", Boot);
            this.state.add("Preloader", Preloader);
            this.state.add("Test", Test);

            // start
            this.state.start("Boot");
        }
    }
}
    