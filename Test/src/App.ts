module SpriterExample {

    export class Global {
        // game derived from Phaser.Game
        static game: Game = null;

        // game size
        static GAME_WIDTH: number = 850;
        static GAME_HEIGHT: number = 850;

        // assets path
        static assetsPath: string = "assets/";
    }
}

var PhaserGlobal = {
    stopFocus: true
}

// -------------------------------------------------------------------------
window.onload = () => {
    SpriterExample.Global.game = new SpriterExample.Game();
};

