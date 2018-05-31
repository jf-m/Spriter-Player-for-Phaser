module SpriterExample {
    export class Preloader extends Phaser.State {

        // -------------------------------------------------------------------------
        constructor() {
            super();
        }

        // -------------------------------------------------------------------------
        preload() {
            // load assets
            var path: string = Global.assetsPath;
            this.load.json("TESTJson", path + "Gangster/definitive-transformed.scon");
        }

        // -------------------------------------------------------------------------
        public onBinaryLoaded(key: string, data: ArrayBuffer) {
            return data;
        }

        // -------------------------------------------------------------------------
        create() {
            this.game.state.start("Test");
        }
    }
}
