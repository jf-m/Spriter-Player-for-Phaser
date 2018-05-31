var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SpriterExample;
(function (SpriterExample) {
    var Global = /** @class */ (function () {
        function Global() {
        }
        // game derived from Phaser.Game
        Global.game = null;
        // game size
        Global.GAME_WIDTH = 850;
        Global.GAME_HEIGHT = 850;
        // assets path
        Global.assetsPath = "assets/";
        return Global;
    }());
    SpriterExample.Global = Global;
})(SpriterExample || (SpriterExample = {}));
var PhaserGlobal = {
    stopFocus: true
};
// -------------------------------------------------------------------------
window.onload = function () {
    SpriterExample.Global.game = new SpriterExample.Game();
};
/// <reference path="../lib/phaser.d.ts" />
var SpriterExample;
(function (SpriterExample) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        // -------------------------------------------------------------------------
        function Game() {
            var _this = 
            // init game
            _super.call(this, SpriterExample.Global.GAME_WIDTH, SpriterExample.Global.GAME_HEIGHT, Phaser.CANVAS, "content", null /* , transparent, antialias, physicsConfig */) || this;
            Game.game = _this;
            // states
            _this.state.add("Boot", SpriterExample.Boot);
            _this.state.add("Preloader", SpriterExample.Preloader);
            _this.state.add("Test", SpriterExample.Test);
            // start
            _this.state.start("Boot");
            return _this;
        }
        return Game;
    }(Phaser.Game));
    SpriterExample.Game = Game;
})(SpriterExample || (SpriterExample = {}));
/// <reference path="../../lib/phaser.d.ts" />
var SpriterExample;
(function (SpriterExample) {
    var Boot = /** @class */ (function (_super) {
        __extends(Boot, _super);
        // -------------------------------------------------------------------------
        function Boot() {
            return _super.call(this) || this;
        }
        // -------------------------------------------------------------------------
        Boot.prototype.init = function () {
            this.input.maxPointers = 1;
            // pause game when not focused
            this.stage.disableVisibilityChange = false;
        };
        // -------------------------------------------------------------------------
        Boot.prototype.create = function () {
            this.game.state.start("Preloader", true, false);
        };
        return Boot;
    }(Phaser.State));
    SpriterExample.Boot = Boot;
})(SpriterExample || (SpriterExample = {}));
var SpriterExample;
(function (SpriterExample) {
    var Preloader = /** @class */ (function (_super) {
        __extends(Preloader, _super);
        // -------------------------------------------------------------------------
        function Preloader() {
            return _super.call(this) || this;
        }
        // -------------------------------------------------------------------------
        Preloader.prototype.preload = function () {
            // load assets
            var path = SpriterExample.Global.assetsPath;
            this.load.json("TESTJson", path + "Gangster/definitive-transformed.scon");
        };
        // -------------------------------------------------------------------------
        Preloader.prototype.onBinaryLoaded = function (key, data) {
            return data;
        };
        // -------------------------------------------------------------------------
        Preloader.prototype.create = function () {
            this.game.state.start("Test");
        };
        return Preloader;
    }(Phaser.State));
    SpriterExample.Preloader = Preloader;
})(SpriterExample || (SpriterExample = {}));
var SpriterExample;
(function (SpriterExample) {
    var Test = /** @class */ (function (_super) {
        __extends(Test, _super);
        // -------------------------------------------------------------------------
        function Test() {
            var _this = _super.call(this) || this;
            _this._spriterGroup = [];
            _this._spriterData = [];
            _this._text = "";
            return _this;
        }
        // -------------------------------------------------------------------------
        Test.prototype.create = function () {
            var _this = this;
            this.stage.backgroundColor = 0x527F68;
            var battleSummary = {
                "turns": [{ "group": 1, "skill": null, "caster": { "id": "Gangster10" }, "target": "atk", "ptarget": ["Gangster6"], "trailing": "current", "receivers": [{ "EP": 0, "HP": 63, "id": "Gangster6", "critical": false, "customValue": 3 }], "actionType": "damageAction" }, {
                        "group": 2,
                        "skill": null,
                        "caster": { "id": "Gangster6" },
                        "target": "atk",
                        "ptarget": ["Gangster6"],
                        "trailing": "before",
                        "receivers": [{ "EP": 16, "HP": 63, "id": "Gangster6", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 2, "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" }, "caster": { "id": "Gangster6" }, "target": "def", "ptarget": ["Gangster10"], "trailing": "current", "receivers": [{ "EP": null, "HP": 53, "id": "Gangster10", "critical": false, "customValue": 27 }], "actionType": "damageAction" }, {
                        "group": 3,
                        "skill": null,
                        "caster": { "id": "Gangster11" },
                        "target": "atk",
                        "ptarget": ["Gangster6"],
                        "trailing": "current",
                        "receivers": [{ "EP": 16, "HP": 59, "id": "Gangster6", "critical": false, "customValue": 4 }],
                        "actionType": "damageAction"
                    }, { "group": 4, "skill": null, "caster": { "id": "Gangster2" }, "target": "atk", "ptarget": ["Gangster2"], "trailing": "before", "receivers": [{ "EP": 7, "HP": 40, "id": "Gangster2", "critical": false }], "actionType": "energy" }, {
                        "group": 4,
                        "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" },
                        "caster": { "id": "Gangster2" },
                        "target": "def",
                        "ptarget": ["Gangster10"],
                        "trailing": "current",
                        "receivers": [{ "EP": null, "HP": 9, "id": "Gangster10", "critical": false, "customValue": 44 }],
                        "actionType": "damageAction"
                    }, { "group": 5, "skill": null, "caster": { "id": "Gangster5" }, "target": "def", "ptarget": ["Gangster5"], "trailing": "before", "receivers": [{ "EP": 7, "HP": 80, "id": "Gangster5", "critical": false }], "actionType": "energy" }, {
                        "group": 5,
                        "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" },
                        "caster": { "id": "Gangster5" },
                        "target": "atk",
                        "ptarget": ["Gangster6"],
                        "trailing": "current",
                        "receivers": [{ "EP": 16, "HP": 51, "id": "Gangster6", "critical": false, "customValue": 8 }],
                        "actionType": "damageAction"
                    }, { "group": 6, "skill": null, "caster": { "id": "Gangster1" }, "target": "atk", "ptarget": ["Gangster1"], "trailing": "before", "receivers": [{ "EP": 16, "HP": 96, "id": "Gangster1", "critical": false }], "actionType": "energy" }, {
                        "group": 6,
                        "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" },
                        "caster": { "id": "Gangster1" },
                        "target": "def",
                        "ptarget": ["Gangster10"],
                        "trailing": "current",
                        "receivers": [{ "EP": null, "HP": 0, "id": "Gangster10", "critical": false, "customValue": 18 }],
                        "actionType": "damageAction"
                    }, { "group": 7, "skill": null, "caster": { "id": "Gangster4" }, "target": "def", "ptarget": ["Gangster4"], "trailing": "before", "receivers": [{ "EP": 16, "HP": 123, "id": "Gangster4", "critical": false }], "actionType": "energy" }, {
                        "group": 7,
                        "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" },
                        "caster": { "id": "Gangster4" },
                        "target": "atk",
                        "ptarget": ["Gangster6"],
                        "trailing": "current",
                        "receivers": [{ "EP": 16, "HP": 45, "id": "Gangster6", "critical": false, "customValue": 6 }],
                        "actionType": "damageAction"
                    }, { "group": 8, "skill": null, "caster": { "id": "Gangster7" }, "target": "def", "ptarget": ["Gangster11"], "trailing": "current", "receivers": [{ "EP": null, "HP": 74, "id": "Gangster11", "critical": false, "customValue": 18 }], "actionType": "damageAction" }, {
                        "group": 9,
                        "skill": null,
                        "caster": { "id": "Gangster8" },
                        "target": "def",
                        "ptarget": ["Gangster8"],
                        "trailing": "before",
                        "receivers": [{ "EP": 7, "HP": 77, "id": "Gangster8", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 9, "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" }, "caster": { "id": "Gangster8" }, "target": "atk", "ptarget": ["Gangster6"], "trailing": "current", "receivers": [{ "EP": 16, "HP": 36, "id": "Gangster6", "critical": true, "customValue": 9 }], "actionType": "damageAction" }, {
                        "group": 10,
                        "skill": null,
                        "caster": { "id": "Gangster9" },
                        "target": "def",
                        "ptarget": ["Gangster11"],
                        "trailing": "current",
                        "receivers": [{ "EP": null, "HP": 71, "id": "Gangster11", "critical": false, "customValue": 3 }],
                        "actionType": "damageAction"
                    }, { "group": 11, "skill": null, "caster": { "id": "Gangster11" }, "target": "atk", "ptarget": ["Gangster6"], "trailing": "current", "receivers": [{ "EP": 16, "HP": 33, "id": "Gangster6", "critical": false, "customValue": 3 }], "actionType": "damageAction" }, {
                        "group": 12,
                        "skill": null,
                        "caster": { "id": "Gangster6" },
                        "target": "atk",
                        "ptarget": ["Gangster6"],
                        "trailing": "before",
                        "receivers": [{ "EP": 32, "HP": 33, "id": "Gangster6", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 12, "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" }, "caster": { "id": "Gangster6" }, "target": "def", "ptarget": ["Gangster11"], "trailing": "current", "receivers": [{ "EP": null, "HP": 41, "id": "Gangster11", "critical": false, "customValue": 30 }], "actionType": "damageAction" }, {
                        "group": 13,
                        "skill": null,
                        "caster": { "id": "Gangster5" },
                        "target": "def",
                        "ptarget": ["Gangster5"],
                        "trailing": "before",
                        "receivers": [{ "EP": 14, "HP": 80, "id": "Gangster5", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 13, "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" }, "caster": { "id": "Gangster5" }, "target": "atk", "ptarget": ["Gangster6"], "trailing": "current", "receivers": [{ "EP": 32, "HP": 26, "id": "Gangster6", "critical": false, "customValue": 7 }], "actionType": "damageAction" }, {
                        "group": 14,
                        "skill": null,
                        "caster": { "id": "Gangster2" },
                        "target": "atk",
                        "ptarget": ["Gangster2"],
                        "trailing": "before",
                        "receivers": [{ "EP": 14, "HP": 40, "id": "Gangster2", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 14, "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" }, "caster": { "id": "Gangster2" }, "target": "def", "ptarget": ["Gangster11"], "trailing": "current", "receivers": [{ "EP": null, "HP": 0, "id": "Gangster11", "critical": false, "customValue": 47 }], "actionType": "damageAction" }, {
                        "group": 15,
                        "skill": null,
                        "caster": { "id": "Gangster4" },
                        "target": "def",
                        "ptarget": ["Gangster4"],
                        "trailing": "before",
                        "receivers": [{ "EP": 32, "HP": 123, "id": "Gangster4", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 15, "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" }, "caster": { "id": "Gangster4" }, "target": "atk", "ptarget": ["Gangster6"], "trailing": "current", "receivers": [{ "EP": 32, "HP": 20, "id": "Gangster6", "critical": false, "customValue": 6 }], "actionType": "damageAction" }, {
                        "group": 16,
                        "skill": null,
                        "caster": { "id": "Gangster1" },
                        "target": "atk",
                        "ptarget": ["Gangster1"],
                        "trailing": "before",
                        "receivers": [{ "EP": 32, "HP": 96, "id": "Gangster1", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 16, "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" }, "caster": { "id": "Gangster1" }, "target": "def", "ptarget": ["Gangster5"], "trailing": "current", "receivers": [{ "EP": 14, "HP": 56, "id": "Gangster5", "critical": false, "customValue": 24 }], "actionType": "damageAction" }, {
                        "group": 17,
                        "skill": null,
                        "caster": { "id": "Gangster8" },
                        "target": "def",
                        "ptarget": ["Gangster8"],
                        "trailing": "before",
                        "receivers": [{ "EP": 14, "HP": 77, "id": "Gangster8", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 17, "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" }, "caster": { "id": "Gangster8" }, "target": "atk", "ptarget": ["Gangster6"], "trailing": "current", "receivers": [{ "EP": 32, "HP": 14, "id": "Gangster6", "critical": false, "customValue": 6 }], "actionType": "damageAction" }, {
                        "group": 18,
                        "skill": null,
                        "caster": { "id": "Gangster7" },
                        "target": "def",
                        "ptarget": ["Gangster5"],
                        "trailing": "current",
                        "receivers": [{ "EP": 14, "HP": 40, "id": "Gangster5", "critical": false, "customValue": 16 }],
                        "actionType": "damageAction"
                    }, { "group": 19, "skill": null, "caster": { "id": "Gangster5" }, "target": "def", "ptarget": ["Gangster5"], "trailing": "before", "receivers": [{ "EP": 21, "HP": 40, "id": "Gangster5", "critical": false }], "actionType": "energy" }, {
                        "group": 19,
                        "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" },
                        "caster": { "id": "Gangster5" },
                        "target": "atk",
                        "ptarget": ["Gangster6"],
                        "trailing": "current",
                        "receivers": [{ "EP": 32, "HP": 8, "id": "Gangster6", "critical": false, "customValue": 6 }],
                        "actionType": "damageAction"
                    }, { "group": 20, "skill": null, "caster": { "id": "Gangster9" }, "target": "def", "ptarget": ["Gangster5"], "trailing": "current", "receivers": [{ "EP": 21, "HP": 37, "id": "Gangster5", "critical": false, "customValue": 3 }], "actionType": "damageAction" }, {
                        "group": 21,
                        "skill": null,
                        "caster": { "id": "Gangster4" },
                        "target": "def",
                        "ptarget": ["Gangster4"],
                        "trailing": "before",
                        "receivers": [{ "EP": 48, "HP": 123, "id": "Gangster4", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 21, "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" }, "caster": { "id": "Gangster4" }, "target": "atk", "ptarget": ["Gangster6"], "trailing": "current", "receivers": [{ "EP": 32, "HP": 2, "id": "Gangster6", "critical": false, "customValue": 6 }], "actionType": "damageAction" }, {
                        "group": 22,
                        "skill": null,
                        "caster": { "id": "Gangster6" },
                        "target": "atk",
                        "ptarget": ["Gangster6"],
                        "trailing": "before",
                        "receivers": [{ "EP": 48, "HP": 2, "id": "Gangster6", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 22, "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" }, "caster": { "id": "Gangster6" }, "target": "def", "ptarget": ["Gangster5"], "trailing": "current", "receivers": [{ "EP": 21, "HP": 13, "id": "Gangster5", "critical": false, "customValue": 24 }], "actionType": "damageAction" }, {
                        "group": 23,
                        "skill": null,
                        "caster": { "id": "Gangster8" },
                        "target": "def",
                        "ptarget": ["Gangster8"],
                        "trailing": "before",
                        "receivers": [{ "EP": 21, "HP": 77, "id": "Gangster8", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 23, "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" }, "caster": { "id": "Gangster8" }, "target": "atk", "ptarget": ["Gangster6"], "trailing": "current", "receivers": [{ "EP": 48, "HP": 0, "id": "Gangster6", "critical": false, "customValue": 6 }], "actionType": "damageAction" }, {
                        "group": 24,
                        "skill": null,
                        "caster": { "id": "Gangster2" },
                        "target": "atk",
                        "ptarget": ["Gangster2"],
                        "trailing": "before",
                        "receivers": [{ "EP": 21, "HP": 40, "id": "Gangster2", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 24, "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" }, "caster": { "id": "Gangster2" }, "target": "def", "ptarget": ["Gangster5"], "trailing": "current", "receivers": [{ "EP": 21, "HP": 0, "id": "Gangster5", "critical": false, "customValue": 48 }], "actionType": "damageAction" }, {
                        "group": 25,
                        "skill": null,
                        "caster": { "id": "Gangster4" },
                        "target": "def",
                        "ptarget": ["Gangster4"],
                        "trailing": "before",
                        "receivers": [{ "EP": 8, "HP": 123, "id": "Gangster4", "critical": false }],
                        "actionType": "energy"
                    }, {
                        "group": 25,
                        "skill": { "id": "ExplosifsSkill", "key": 4, "type": "SPEC", "picture": "/images/gangsters/skills/skill_s_2.png" },
                        "caster": { "id": "Gangster4" },
                        "target": "atk",
                        "ptarget": ["Gangster2"],
                        "trailing": "current",
                        "receivers": [{ "EP": 21, "HP": 28, "id": "Gangster2", "critical": false, "customValue": 12 }, { "EP": 32, "HP": 84, "id": "Gangster1", "critical": false, "customValue": 12 }, { "EP": 0, "HP": 98, "id": "Gangster7", "critical": false, "customValue": 12 }],
                        "actionType": "damageAction"
                    }, { "group": 26, "skill": null, "caster": { "id": "Gangster1" }, "target": "atk", "ptarget": ["Gangster1"], "trailing": "before", "receivers": [{ "EP": 48, "HP": 84, "id": "Gangster1", "critical": false }], "actionType": "energy" }, {
                        "group": 26,
                        "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" },
                        "caster": { "id": "Gangster1" },
                        "target": "def",
                        "ptarget": ["Gangster4"],
                        "trailing": "current",
                        "receivers": [{ "EP": 8, "HP": 93, "id": "Gangster4", "critical": false, "customValue": 30 }],
                        "actionType": "damageAction"
                    }, { "group": 27, "skill": null, "caster": { "id": "Gangster8" }, "target": "def", "ptarget": ["Gangster8"], "trailing": "before", "receivers": [{ "EP": 28, "HP": 77, "id": "Gangster8", "critical": false }], "actionType": "energy" }, {
                        "group": 27,
                        "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" },
                        "caster": { "id": "Gangster8" },
                        "target": "atk",
                        "ptarget": ["Gangster2"],
                        "trailing": "current",
                        "receivers": [{ "EP": 21, "HP": 22, "id": "Gangster2", "critical": false, "customValue": 6 }],
                        "actionType": "damageAction"
                    }, { "group": 28, "skill": null, "caster": { "id": "Gangster7" }, "target": "def", "ptarget": ["Gangster4"], "trailing": "current", "receivers": [{ "EP": 8, "HP": 70, "id": "Gangster4", "critical": true, "customValue": 23 }], "actionType": "damageAction" }, {
                        "group": 29,
                        "skill": null,
                        "caster": { "id": "Gangster4" },
                        "target": "def",
                        "ptarget": ["Gangster4"],
                        "trailing": "before",
                        "receivers": [{ "EP": 24, "HP": 70, "id": "Gangster4", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 29, "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" }, "caster": { "id": "Gangster4" }, "target": "atk", "ptarget": ["Gangster2"], "trailing": "current", "receivers": [{ "EP": 21, "HP": 17, "id": "Gangster2", "critical": false, "customValue": 5 }], "actionType": "damageAction" }, {
                        "group": 30,
                        "skill": null,
                        "caster": { "id": "Gangster9" },
                        "target": "def",
                        "ptarget": ["Gangster4"],
                        "trailing": "current",
                        "receivers": [{ "EP": 24, "HP": 66, "id": "Gangster4", "critical": false, "customValue": 4 }],
                        "actionType": "damageAction"
                    }, { "group": 31, "skill": null, "caster": { "id": "Gangster8" }, "target": "def", "ptarget": ["Gangster8"], "trailing": "before", "receivers": [{ "EP": 35, "HP": 77, "id": "Gangster8", "critical": false }], "actionType": "energy" }, {
                        "group": 31,
                        "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" },
                        "caster": { "id": "Gangster8" },
                        "target": "atk",
                        "ptarget": ["Gangster2"],
                        "trailing": "current",
                        "receivers": [{ "EP": 21, "HP": 7, "id": "Gangster2", "critical": false, "customValue": 10 }],
                        "actionType": "damageAction"
                    }, { "group": 32, "skill": null, "caster": { "id": "Gangster2" }, "target": "atk", "ptarget": ["Gangster2"], "trailing": "before", "receivers": [{ "EP": 28, "HP": 7, "id": "Gangster2", "critical": false }], "actionType": "energy" }, {
                        "group": 32,
                        "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" },
                        "caster": { "id": "Gangster2" },
                        "target": "def",
                        "ptarget": ["Gangster4"],
                        "trailing": "current",
                        "receivers": [{ "EP": 24, "HP": 28, "id": "Gangster4", "critical": false, "customValue": 38 }],
                        "actionType": "damageAction"
                    }, { "group": 33, "skill": null, "caster": { "id": "Gangster4" }, "target": "def", "ptarget": ["Gangster4"], "trailing": "before", "receivers": [{ "EP": 40, "HP": 28, "id": "Gangster4", "critical": false }], "actionType": "energy" }, {
                        "group": 33,
                        "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" },
                        "caster": { "id": "Gangster4" },
                        "target": "atk",
                        "ptarget": ["Gangster2"],
                        "trailing": "current",
                        "receivers": [{ "EP": 28, "HP": 1, "id": "Gangster2", "critical": false, "customValue": 6 }],
                        "actionType": "damageAction"
                    }, { "group": 34, "skill": null, "caster": { "id": "Gangster1" }, "target": "atk", "ptarget": ["Gangster1"], "trailing": "before", "receivers": [{ "EP": 8, "HP": 84, "id": "Gangster1", "critical": false }], "actionType": "energy" }, {
                        "group": 34,
                        "skill": { "id": "BallePerforanteSkill", "key": 3, "type": "SPEC", "picture": "/images/gangsters/skills/skill_s_1.png" },
                        "caster": { "id": "Gangster1" },
                        "target": "def",
                        "ptarget": ["Gangster4"],
                        "trailing": "current",
                        "receivers": [{ "EP": 40, "HP": 0, "id": "Gangster4", "critical": false, "customValue": 81 }],
                        "actionType": "damageAction"
                    }, { "group": 35, "skill": null, "caster": { "id": "Gangster8" }, "target": "def", "ptarget": ["Gangster8"], "trailing": "before", "receivers": [{ "EP": 42, "HP": 77, "id": "Gangster8", "critical": false }], "actionType": "energy" }, {
                        "group": 35,
                        "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" },
                        "caster": { "id": "Gangster8" },
                        "target": "atk",
                        "ptarget": ["Gangster2"],
                        "trailing": "current",
                        "receivers": [{ "EP": 28, "HP": 0, "id": "Gangster2", "critical": true, "customValue": 11 }],
                        "actionType": "damageAction"
                    }, { "group": 36, "skill": null, "caster": { "id": "Gangster7" }, "target": "def", "ptarget": ["Gangster8"], "trailing": "current", "receivers": [{ "EP": 42, "HP": 61, "id": "Gangster8", "critical": false, "customValue": 16 }], "actionType": "damageAction" }, {
                        "group": 37,
                        "skill": null,
                        "caster": { "id": "Gangster8" },
                        "target": "def",
                        "ptarget": ["Gangster8"],
                        "trailing": "before",
                        "receivers": [{ "EP": 2, "HP": 61, "id": "Gangster8", "critical": false }],
                        "actionType": "energy"
                    }, { "group": 37, "skill": { "id": "BallePerforanteSkill", "key": 3, "type": "SPEC", "picture": "/images/gangsters/skills/skill_s_1.png" }, "caster": { "id": "Gangster8" }, "target": "atk", "ptarget": ["Gangster1"], "trailing": "current", "receivers": [{ "EP": 8, "HP": 60, "id": "Gangster1", "critical": false, "customValue": 24 }], "actionType": "damageAction" }, {
                        "group": 38,
                        "skill": null,
                        "caster": { "id": "Gangster9" },
                        "target": "def",
                        "ptarget": ["Gangster8"],
                        "trailing": "current",
                        "receivers": [{ "EP": 2, "HP": 57, "id": "Gangster8", "critical": false, "customValue": 4 }],
                        "actionType": "damageAction"
                    }, { "group": 39, "skill": null, "caster": { "id": "Gangster8" }, "target": "def", "ptarget": ["Gangster8"], "trailing": "before", "receivers": [{ "EP": 9, "HP": 57, "id": "Gangster8", "critical": false }], "actionType": "energy" }, {
                        "group": 39,
                        "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" },
                        "caster": { "id": "Gangster8" },
                        "target": "atk",
                        "ptarget": ["Gangster1"],
                        "trailing": "current",
                        "receivers": [{ "EP": 8, "HP": 52, "id": "Gangster1", "critical": false, "customValue": 8 }],
                        "actionType": "damageAction"
                    }, { "group": 40, "skill": null, "caster": { "id": "Gangster1" }, "target": "atk", "ptarget": ["Gangster1"], "trailing": "before", "receivers": [{ "EP": 24, "HP": 52, "id": "Gangster1", "critical": false }], "actionType": "energy" }, {
                        "group": 40,
                        "skill": { "id": "TirRafaleSkill", "key": 1, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_1.png" },
                        "caster": { "id": "Gangster1" },
                        "target": "def",
                        "ptarget": ["Gangster8"],
                        "trailing": "current",
                        "receivers": [{ "EP": 9, "HP": 10, "id": "Gangster8", "critical": true, "customValue": 47 }],
                        "actionType": "damageAction"
                    }, { "group": 41, "skill": null, "caster": { "id": "Gangster8" }, "target": "def", "ptarget": ["Gangster8"], "trailing": "before", "receivers": [{ "EP": 16, "HP": 10, "id": "Gangster8", "critical": false }], "actionType": "energy" }, {
                        "group": 41,
                        "skill": { "id": "CoupParCoupSkill", "key": 5, "type": "BASE", "picture": "/images/gangsters/skills/skill_b_2.png" },
                        "caster": { "id": "Gangster8" },
                        "target": "atk",
                        "ptarget": ["Gangster1"],
                        "trailing": "current",
                        "receivers": [{ "EP": 24, "HP": 42, "id": "Gangster1", "critical": false, "customValue": 10 }],
                        "actionType": "damageAction"
                    }, { "group": 42, "skill": null, "caster": { "id": "Gangster7" }, "target": "def", "ptarget": ["Gangster8"], "trailing": "current", "receivers": [{ "EP": 16, "HP": 0, "id": "Gangster8", "critical": false, "customValue": 17 }], "actionType": "damageAction" }],
                "intial": [{
                        "ep": 0,
                        "hp": 96,
                        "id": "Gangster1",
                        "row": 1,
                        "look": [{ "id": 17, "empty": true }, { "id": 22, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 32, "empty": true }, { "id": 19, "name": "/bodyparts/19/IFbQkrr8a4FbP0pufdk4.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 18 }, { "id": 7, "name": "/bodyparts/7/0NaMEEYvFug43df0DrSr.svg", "pivot_x": 0.39, "pivot_y": 0.51, "z_order": 2 }, {
                                "id": 8,
                                "name": "/bodyparts/8/Yd4tATZCN2tuCOk9eyZx.svg",
                                "pivot_x": 0.38,
                                "pivot_y": 0.52,
                                "z_order": 1
                            }, { "id": 6, "name": "/bodyparts/6/AVmvZ5Ou1R1MOGP5QtLG.svg", "pivot_x": 0.48, "pivot_y": 0.36, "z_order": 23 }, { "id": 0, "name": "/bodyparts/0/Ub2GLWNgpk7QNuDgK4HI.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 6 }, { "id": 3, "name": "/bodyparts/3/jxSBxkqShuztEor4724l.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, { "id": 2, "name": "/bodyparts/2/BXvjqgQXprp5iNcyTHp8.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, {
                                "id": 1,
                                "name": "/bodyparts/1/E3xFxU6rHmcJPY6L5A2M.svg",
                                "pivot_x": 0.45,
                                "pivot_y": 0.3,
                                "z_order": 7
                            }, { "id": 13, "name": "/bodyparts/13/9191a1nzKFJnhck1C8kC.svg", "pivot_x": 0.4, "pivot_y": 0.18, "z_order": 24 }, { "id": 11, "name": "/bodyparts/11/WQZvwR7HOtqtFvFKEazl.svg", "pivot_x": 0.42, "pivot_y": 0.29, "z_order": 22 }, { "id": 15, "name": "/bodyparts/15/2BJnab5Mf8mojlky6i1b.svg", "pivot_x": 0.51, "pivot_y": 0.24, "z_order": 21 }, {
                                "id": 14,
                                "name": "/bodyparts/14/QJ2AD8kDDWL6HVvBdoKV.svg",
                                "pivot_x": 0.49,
                                "pivot_y": 0.29,
                                "z_order": 19
                            }, { "id": 16, "name": "/bodyparts/16/8krWNFrv1V86dETQTqIe.svg", "pivot_x": 0.5, "pivot_y": 0.18, "z_order": 20 }, { "id": 12, "name": "/bodyparts/12/9YLEH46ejM0jhihipipf.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, { "id": 21, "name": "/bodyparts/21/3g4zVLD1O9swi5gMvgek.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 14 }, {
                                "id": 28,
                                "name": "/bodyparts/28/78XUVg2rjgghHtuwNOzM.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 13
                            }, { "id": 25, "name": "/bodyparts/25/ZMYXQtkQaKFYdeFATwcc.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 17 }, { "id": 20, "name": "/bodyparts/20/5DZdv1t2lAfGYWJ0Nx8r.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 15 }, { "id": 23, "name": "/bodyparts/23/qKjnkHWwBiHmxZoUiK1M.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, {
                                "id": 18,
                                "name": "/bodyparts/18/jzn6Ie9QngTBJ4c4bqYK.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 12
                            }, { "id": 26, "name": "/bodyparts/26/u8xQGh7i4DHACI2WPPGL.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 11 }, { "id": 29, "name": "/bodyparts/29/auUnRcERm8zDbFWmoPgW.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 30, "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, {
                                "id": 9,
                                "name": "/bodyparts/9/3hM6VBqcXSaSU3imEZ6U.svg",
                                "pivot_x": 0.52,
                                "pivot_y": 0.35,
                                "z_order": 4
                            }, { "id": 4, "name": "/bodyparts/4/n5ubUcVCMXvar2dJmpyj.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 5, "name": "/bodyparts/5/SPffjzwAfWtvYeMLPPbu.svg", "pivot_x": 0.43, "pivot_y": 0.34, "z_order": 27 }, { "id": 4, "name": "/bodyparts/4/wpfG0B35YM7CcptGzvAM.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, {
                                "id": 10,
                                "name": "/bodyparts/10/y716WW5pz6jw6PdUuk4o.svg",
                                "pivot_x": 0.58,
                                "pivot_y": 0.34,
                                "z_order": 5
                            }, { "id": 9, "name": "/bodyparts/9/A2YEfgrKO2qt6ACVo9t0.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 31, "name": "/bodyparts/31/Rw9c0BLEx0saHSBjqFNh.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "shea_wick",
                        "column": 1,
                        "skills": [],
                        "total_ep": 73,
                        "total_hp": 153,
                        "boardSide": "atk",
                        "full_name": "Shea Wick",
                        "skill_spec_ep": 40
                    }, {
                        "ep": 0,
                        "hp": 110,
                        "id": "Gangster7",
                        "row": 1,
                        "look": [{ "id": 8, "empty": true }, { "id": 7, "empty": true }, { "id": 17, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 6, "name": "/bodyparts/6/AVmvZ5Ou1R1MOGP5QtLG.svg", "pivot_x": 0.48, "pivot_y": 0.36, "z_order": 23 }, { "id": 0, "name": "/bodyparts/0/Ub2GLWNgpk7QNuDgK4HI.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 6 }, {
                                "id": 3,
                                "name": "/bodyparts/3/jxSBxkqShuztEor4724l.svg",
                                "pivot_x": 0.5,
                                "pivot_y": 0.41,
                                "z_order": 3
                            }, { "id": 2, "name": "/bodyparts/2/BXvjqgQXprp5iNcyTHp8.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, { "id": 19, "name": "/bodyparts/19/G3DeVqrmNOV3a0hCs0Og.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 18 }, { "id": 22, "name": "/bodyparts/22/y1DcP9jOle05TQLrDlmj.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 9 }, {
                                "id": 21,
                                "name": "/bodyparts/21/eTfBbF6BAvYZDKt2k60Y.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 14
                            }, { "id": 23, "name": "/bodyparts/23/goAULZBeO4BXgzta6hnq.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, { "id": 32, "empty": true }, { "id": 28, "name": "/bodyparts/28/A7jka8fGKAGcNX5itpj4.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 13 }, { "id": 26, "name": "/bodyparts/26/RcHQCKLBcbK7h5ewZ6x3.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 11 }, {
                                "id": 25,
                                "name": "/bodyparts/25/MR4kZblfIvHqKr1W0CNX.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 17
                            }, { "id": 20, "name": "/bodyparts/20/QdqHVoiPY05Dq0s6fgFk.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 15 }, { "id": 18, "name": "/bodyparts/18/jzn6Ie9QngTBJ4c4bqYK.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 12 }, { "id": 29, "name": "/bodyparts/29/auUnRcERm8zDbFWmoPgW.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, {
                                "id": 30,
                                "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": -1
                            }, { "id": 9, "name": "/bodyparts/9/3hM6VBqcXSaSU3imEZ6U.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 4, "name": "/bodyparts/4/n5ubUcVCMXvar2dJmpyj.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 5, "name": "/bodyparts/5/SPffjzwAfWtvYeMLPPbu.svg", "pivot_x": 0.43, "pivot_y": 0.34, "z_order": 27 }, { "id": 1, "name": "/bodyparts/1/oQYfr9ft33JpquIzBxYc.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 7 }, {
                                "id": 11,
                                "name": "/bodyparts/11/TQq6wRfgFuiVAbukbXte.svg",
                                "pivot_x": 0.42,
                                "pivot_y": 0.29,
                                "z_order": 22
                            }, { "id": 13, "name": "/bodyparts/13/G2m5hGZeNPKgG2OYh86g.svg", "pivot_x": 0.4, "pivot_y": 0.18, "z_order": 24 }, { "id": 15, "name": "/bodyparts/15/6LKeVUUhhjuJooRH1MeN.svg", "pivot_x": 0.51, "pivot_y": 0.24, "z_order": 21 }, { "id": 4, "name": "/bodyparts/4/wpfG0B35YM7CcptGzvAM.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, {
                                "id": 16,
                                "name": "/bodyparts/16/dx6oVhnalBxoeSjVF9qH.svg",
                                "pivot_x": 0.5,
                                "pivot_y": 0.18,
                                "z_order": 20
                            }, { "id": 10, "name": "/bodyparts/10/y716WW5pz6jw6PdUuk4o.svg", "pivot_x": 0.58, "pivot_y": 0.34, "z_order": 5 }, { "id": 14, "name": "/bodyparts/14/ND0tUiRRFbLRPkIVfhXx.svg", "pivot_x": 0.49, "pivot_y": 0.29, "z_order": 19 }, { "id": 12, "name": "/bodyparts/12/24PTAV0KFIH0zOkcoNeO.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, {
                                "id": 9,
                                "name": "/bodyparts/9/A2YEfgrKO2qt6ACVo9t0.svg",
                                "pivot_x": 0.52,
                                "pivot_y": 0.35,
                                "z_order": 4
                            }, { "id": 31, "name": "/bodyparts/31/Rw9c0BLEx0saHSBjqFNh.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "dylan_villa",
                        "column": 2,
                        "skills": [],
                        "total_ep": 71,
                        "total_hp": 113,
                        "boardSide": "atk",
                        "full_name": "Dylan Villa",
                        "skill_spec_ep": 999
                    }, {
                        "ep": 0,
                        "hp": 66,
                        "id": "Gangster6",
                        "row": 0,
                        "look": [{ "id": 8, "empty": true }, { "id": 7, "empty": true }, { "id": 17, "empty": true }, { "id": 22, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 32, "empty": true }, { "id": 6, "name": "/bodyparts/6/AVmvZ5Ou1R1MOGP5QtLG.svg", "pivot_x": 0.48, "pivot_y": 0.36, "z_order": 23 }, { "id": 19, "name": "/bodyparts/19/plvzMPgX00CVNrMGxR56.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 18 }, {
                                "id": 0,
                                "name": "/bodyparts/0/Ub2GLWNgpk7QNuDgK4HI.svg",
                                "pivot_x": 0.45,
                                "pivot_y": 0.3,
                                "z_order": 6
                            }, { "id": 3, "name": "/bodyparts/3/jxSBxkqShuztEor4724l.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, { "id": 2, "name": "/bodyparts/2/BXvjqgQXprp5iNcyTHp8.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, { "id": 12, "name": "/bodyparts/12/RG0hriRvnPBnjfJEZIeo.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, {
                                "id": 11,
                                "name": "/bodyparts/11/iHAeiHTQzgEE26WEnc0U.svg",
                                "pivot_x": 0.42,
                                "pivot_y": 0.29,
                                "z_order": 22
                            }, { "id": 16, "name": "/bodyparts/16/EU5ohMSje3sbyWVlPUOg.svg", "pivot_x": 0.5, "pivot_y": 0.18, "z_order": 20 }, { "id": 14, "name": "/bodyparts/14/N88uKmiEoeCXwBL3AU9x.svg", "pivot_x": 0.49, "pivot_y": 0.29, "z_order": 19 }, { "id": 13, "name": "/bodyparts/13/Aj7uvmtjP8dwm5Yp89Ys.svg", "pivot_x": 0.4, "pivot_y": 0.18, "z_order": 24 }, {
                                "id": 15,
                                "name": "/bodyparts/15/qalOlNtmSvKWceWTUHNv.svg",
                                "pivot_x": 0.51,
                                "pivot_y": 0.24,
                                "z_order": 21
                            }, { "id": 1, "name": "/bodyparts/1/ZeML7Sq4bKKXoRxuROAj.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 7 }, { "id": 21, "name": "/bodyparts/21/2cWgZhpMRPEuBP65dXre.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 14 }, { "id": 26, "name": "/bodyparts/26/UKGnDvTA8xEAfMfYcypb.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 11 }, {
                                "id": 28,
                                "name": "/bodyparts/28/zzmwlHma6NFUeXEzumuP.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 13
                            }, { "id": 20, "name": "/bodyparts/20/avQeTDnjFsT8cZIfdCHz.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 15 }, { "id": 23, "name": "/bodyparts/23/Hi0NQefwdTPndtogluth.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, { "id": 18, "name": "/bodyparts/18/ywkpaJdO6pY9GwQzwXCm.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 12 }, {
                                "id": 25,
                                "name": "/bodyparts/25/wTTR1jBHNEiClohaMeMV.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 17
                            }, { "id": 29, "name": "/bodyparts/29/dcTC9ZFF5OF1eGvJvePZ.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 30, "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 9, "name": "/bodyparts/9/C97mUAkNtWGed7rjK20z.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, {
                                "id": 4,
                                "name": "/bodyparts/4/QYC8EhUrJkXLQ64FiErB.svg",
                                "pivot_x": 0.36,
                                "pivot_y": 0.36,
                                "z_order": 26
                            }, { "id": 5, "name": "/bodyparts/5/hiG5kNaBauBv02zUSn42.svg", "pivot_x": 0.43, "pivot_y": 0.34, "z_order": 27 }, { "id": 4, "name": "/bodyparts/4/vgTmJEB7GQG0hdsAvkYy.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 10, "name": "/bodyparts/10/7x6E6hLD1euRHcWlSQni.svg", "pivot_x": 0.58, "pivot_y": 0.34, "z_order": 5 }, {
                                "id": 9,
                                "name": "/bodyparts/9/7POxjzmHbanZpY3WmeAJ.svg",
                                "pivot_x": 0.52,
                                "pivot_y": 0.35,
                                "z_order": 4
                            }, { "id": 31, "name": "/bodyparts/31/d3jhD0dEw0bFATsW7Ir1.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "agustin_colbert",
                        "column": 1,
                        "skills": [],
                        "total_ep": 70,
                        "total_hp": 183,
                        "boardSide": "atk",
                        "full_name": "Agustin Colbert",
                        "skill_spec_ep": 40
                    }, {
                        "ep": null,
                        "hp": 40,
                        "id": "Gangster2",
                        "row": 0,
                        "look": [{ "id": 8, "empty": true }, { "id": 7, "empty": true }, { "id": 17, "empty": true }, { "id": 22, "empty": true }, { "id": 25, "empty": true }, { "id": 6, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 32, "empty": true }, { "id": 0, "name": "/bodyparts/0/Ub2GLWNgpk7QNuDgK4HI.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 6 }, {
                                "id": 3,
                                "name": "/bodyparts/3/jxSBxkqShuztEor4724l.svg",
                                "pivot_x": 0.5,
                                "pivot_y": 0.41,
                                "z_order": 3
                            }, { "id": 2, "name": "/bodyparts/2/BXvjqgQXprp5iNcyTHp8.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, { "id": 12, "name": "/bodyparts/12/RG0hriRvnPBnjfJEZIeo.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, { "id": 11, "name": "/bodyparts/11/iHAeiHTQzgEE26WEnc0U.svg", "pivot_x": 0.42, "pivot_y": 0.29, "z_order": 22 }, {
                                "id": 16,
                                "name": "/bodyparts/16/EU5ohMSje3sbyWVlPUOg.svg",
                                "pivot_x": 0.5,
                                "pivot_y": 0.18,
                                "z_order": 20
                            }, { "id": 14, "name": "/bodyparts/14/N88uKmiEoeCXwBL3AU9x.svg", "pivot_x": 0.49, "pivot_y": 0.29, "z_order": 19 }, { "id": 13, "name": "/bodyparts/13/Aj7uvmtjP8dwm5Yp89Ys.svg", "pivot_x": 0.4, "pivot_y": 0.18, "z_order": 24 }, { "id": 15, "name": "/bodyparts/15/qalOlNtmSvKWceWTUHNv.svg", "pivot_x": 0.51, "pivot_y": 0.24, "z_order": 21 }, {
                                "id": 1,
                                "name": "/bodyparts/1/ZeML7Sq4bKKXoRxuROAj.svg",
                                "pivot_x": 0.45,
                                "pivot_y": 0.3,
                                "z_order": 7
                            }, { "id": 19, "name": "/bodyparts/19/7futGFASp1HCbAqZqNAU.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 18 }, { "id": 18, "name": "/bodyparts/18/iMn50TjgR12uIgjzHy5K.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 12 }, { "id": 21, "name": "/bodyparts/21/JHW1LYR9l17gaC6Gmmjl.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 14 }, {
                                "id": 26,
                                "name": "/bodyparts/26/ogGrmZduHItGR8rN0aUy.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 11
                            }, { "id": 28, "name": "/bodyparts/28/bvzXNTMqbb77nYgUzC2S.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 13 }, { "id": 20, "name": "/bodyparts/20/Qk4MlB8tfRO44ZYmFspl.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 15 }, { "id": 23, "name": "/bodyparts/23/GUNhfRmolDnLAwJ9WAo6.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, {
                                "id": 29,
                                "name": "/bodyparts/29/qKYJZoJeiI1lEYkBMcPI.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": -1
                            }, { "id": 30, "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 9, "name": "/bodyparts/9/E9b4ZKFQZpTqYeQmNLpt.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 4, "name": "/bodyparts/4/80EW6QrK5B17nRpS9QYU.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, {
                                "id": 5,
                                "name": "/bodyparts/5/2vUnUgtTIZkZtjo9jxv7.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.34,
                                "z_order": 27
                            }, { "id": 4, "name": "/bodyparts/4/HMtlT6feT8oGi3RjjROq.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 10, "name": "/bodyparts/10/a7ZeJpHOmgoTtasmCvaP.svg", "pivot_x": 0.58, "pivot_y": 0.34, "z_order": 5 }, { "id": 9, "name": "/bodyparts/9/n4qcVDltHI3FHWEy02f4.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 31, "name": "/bodyparts/31/UJivjTLu1xmXz5g3wLFF.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "ushi_zhu",
                        "column": 2,
                        "skills": [],
                        "total_ep": 96,
                        "total_hp": 147,
                        "boardSide": "atk",
                        "full_name": "Ushi Zhu",
                        "skill_spec_ep": 40
                    }, {
                        "ep": null,
                        "hp": 88,
                        "id": "Gangster9",
                        "row": 2,
                        "look": [{ "id": 8, "empty": true }, { "id": 7, "empty": true }, { "id": 17, "empty": true }, { "id": 22, "empty": true }, { "id": 19, "empty": true }, { "id": 6, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 32, "empty": true }, { "id": 18, "name": "/bodyparts/18/iMn50TjgR12uIgjzHy5K.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 12 }, {
                                "id": 21,
                                "name": "/bodyparts/21/72mlY0ArjvTuhXTkSMAh.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 14
                            }, { "id": 23, "name": "/bodyparts/23/B0N5RXzJsjEcSRntSRiD.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, { "id": 28, "name": "/bodyparts/28/qSWkGhhHBdOijmYpJk9a.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 13 }, { "id": 26, "name": "/bodyparts/26/Csm2XMZ4w7aykkVGUYT5.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 11 }, {
                                "id": 25,
                                "name": "/bodyparts/25/LP5ht323rgoQyC0YYyrK.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 17
                            }, { "id": 20, "name": "/bodyparts/20/TRqxyfyFHTitZshlPxMA.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 15 }, { "id": 29, "name": "/bodyparts/29/auUnRcERm8zDbFWmoPgW.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 30, "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, {
                                "id": 2,
                                "name": "/bodyparts/2/IwW38qxUcz0NLKZM57Vz.svg",
                                "pivot_x": 0.41,
                                "pivot_y": 0.4,
                                "z_order": 10
                            }, { "id": 9, "name": "/bodyparts/9/3hM6VBqcXSaSU3imEZ6U.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 0, "name": "/bodyparts/0/KcXod8P721p0MBHmxrRB.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 6 }, { "id": 4, "name": "/bodyparts/4/n5ubUcVCMXvar2dJmpyj.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 3, "name": "/bodyparts/3/EjY7ALICXHIvxGt6IFQY.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, {
                                "id": 0,
                                "name": "/bodyparts/0/OHKi5PsiRzAmwsaCnFoH.svg",
                                "pivot_x": 0.45,
                                "pivot_y": 0.3,
                                "z_order": 6
                            }, { "id": 5, "name": "/bodyparts/5/SPffjzwAfWtvYeMLPPbu.svg", "pivot_x": 0.43, "pivot_y": 0.34, "z_order": 27 }, { "id": 2, "name": "/bodyparts/2/Bp86bItCBm5QD3RMQSFt.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, { "id": 1, "name": "/bodyparts/1/oQYfr9ft33JpquIzBxYc.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 7 }, { "id": 11, "name": "/bodyparts/11/TQq6wRfgFuiVAbukbXte.svg", "pivot_x": 0.42, "pivot_y": 0.29, "z_order": 22 }, {
                                "id": 13,
                                "name": "/bodyparts/13/G2m5hGZeNPKgG2OYh86g.svg",
                                "pivot_x": 0.4,
                                "pivot_y": 0.18,
                                "z_order": 24
                            }, { "id": 15, "name": "/bodyparts/15/6LKeVUUhhjuJooRH1MeN.svg", "pivot_x": 0.51, "pivot_y": 0.24, "z_order": 21 }, { "id": 4, "name": "/bodyparts/4/wpfG0B35YM7CcptGzvAM.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 16, "name": "/bodyparts/16/dx6oVhnalBxoeSjVF9qH.svg", "pivot_x": 0.5, "pivot_y": 0.18, "z_order": 20 }, {
                                "id": 10,
                                "name": "/bodyparts/10/y716WW5pz6jw6PdUuk4o.svg",
                                "pivot_x": 0.58,
                                "pivot_y": 0.34,
                                "z_order": 5
                            }, { "id": 14, "name": "/bodyparts/14/ND0tUiRRFbLRPkIVfhXx.svg", "pivot_x": 0.49, "pivot_y": 0.29, "z_order": 19 }, { "id": 3, "name": "/bodyparts/3/7MsNbkkq6ZzSuDX9pkLW.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, { "id": 12, "name": "/bodyparts/12/24PTAV0KFIH0zOkcoNeO.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, {
                                "id": 9,
                                "name": "/bodyparts/9/A2YEfgrKO2qt6ACVo9t0.svg",
                                "pivot_x": 0.52,
                                "pivot_y": 0.35,
                                "z_order": 4
                            }, { "id": 31, "name": "/bodyparts/31/Rw9c0BLEx0saHSBjqFNh.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "filat_prokofiev",
                        "column": 1,
                        "skills": [],
                        "total_ep": 73,
                        "total_hp": 102,
                        "boardSide": "atk",
                        "full_name": "Filat Prokofiev",
                        "skill_spec_ep": 999
                    }, {
                        "ep": 0,
                        "hp": 80,
                        "id": "Gangster5",
                        "row": 1,
                        "look": [{ "id": 8, "empty": true }, { "id": 7, "empty": true }, { "id": 17, "empty": true }, { "id": 22, "empty": true }, { "id": 19, "empty": true }, { "id": 6, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 32, "empty": true }, { "id": 21, "name": "/bodyparts/21/ebsDTPq9NZgzZLCEyHpH.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 14 }, {
                                "id": 28,
                                "name": "/bodyparts/28/1RDb1FY8kS8Zt8jdKs6E.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 13
                            }, { "id": 26, "name": "/bodyparts/26/KvHtHzHhg5drM8WpSFNX.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 11 }, { "id": 20, "name": "/bodyparts/20/Qk4MlB8tfRO44ZYmFspl.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 15 }, { "id": 23, "name": "/bodyparts/23/EpcruTJ4hYU1iCIJTy9m.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, {
                                "id": 25,
                                "name": "/bodyparts/25/8kKyaHfB3IKtuXtKhiNq.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 17
                            }, { "id": 18, "name": "/bodyparts/18/WbHweQnq7SnQrzHjyzAO.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 12 }, { "id": 29, "name": "/bodyparts/29/qKYJZoJeiI1lEYkBMcPI.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 30, "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, {
                                "id": 2,
                                "name": "/bodyparts/2/pHDuIjGUhnzTZaisqow3.svg",
                                "pivot_x": 0.41,
                                "pivot_y": 0.4,
                                "z_order": 10
                            }, { "id": 9, "name": "/bodyparts/9/E9b4ZKFQZpTqYeQmNLpt.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 0, "name": "/bodyparts/0/MrEp8v3MTaMquUsZ1V45.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 6 }, { "id": 4, "name": "/bodyparts/4/80EW6QrK5B17nRpS9QYU.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 3, "name": "/bodyparts/3/kXUBA97qiSUgCIZNL5rA.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, {
                                "id": 0,
                                "name": "/bodyparts/0/NsDMnL9IAIW0VABewZDT.svg",
                                "pivot_x": 0.45,
                                "pivot_y": 0.3,
                                "z_order": 6
                            }, { "id": 5, "name": "/bodyparts/5/2vUnUgtTIZkZtjo9jxv7.svg", "pivot_x": 0.43, "pivot_y": 0.34, "z_order": 27 }, { "id": 2, "name": "/bodyparts/2/leHxfPOIhqIBBZPXqkNt.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, { "id": 1, "name": "/bodyparts/1/oQYfr9ft33JpquIzBxYc.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 7 }, { "id": 11, "name": "/bodyparts/11/IhemukJVfD6ZzTKlGjWP.svg", "pivot_x": 0.42, "pivot_y": 0.29, "z_order": 22 }, {
                                "id": 13,
                                "name": "/bodyparts/13/9Yh5nOERIp5tqkm6Z1lB.svg",
                                "pivot_x": 0.4,
                                "pivot_y": 0.18,
                                "z_order": 24
                            }, { "id": 15, "name": "/bodyparts/15/KHVCgpwxTVH49fXn5t32.svg", "pivot_x": 0.51, "pivot_y": 0.24, "z_order": 21 }, { "id": 4, "name": "/bodyparts/4/HMtlT6feT8oGi3RjjROq.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 16, "name": "/bodyparts/16/ITFMkcxCYbiRHoIYUsUt.svg", "pivot_x": 0.5, "pivot_y": 0.18, "z_order": 20 }, {
                                "id": 10,
                                "name": "/bodyparts/10/a7ZeJpHOmgoTtasmCvaP.svg",
                                "pivot_x": 0.58,
                                "pivot_y": 0.34,
                                "z_order": 5
                            }, { "id": 14, "name": "/bodyparts/14/wZvi4SdCwEjMfsFx1XAD.svg", "pivot_x": 0.49, "pivot_y": 0.29, "z_order": 19 }, { "id": 3, "name": "/bodyparts/3/GzwO4GmpG2mSWLvFm2TI.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, { "id": 12, "name": "/bodyparts/12/jhRGM8UjIoIagRQ2QxVN.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, {
                                "id": 9,
                                "name": "/bodyparts/9/n4qcVDltHI3FHWEy02f4.svg",
                                "pivot_x": 0.52,
                                "pivot_y": 0.35,
                                "z_order": 4
                            }, { "id": 31, "name": "/bodyparts/31/UJivjTLu1xmXz5g3wLFF.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "tao_rung",
                        "column": 1,
                        "skills": [],
                        "total_ep": 86,
                        "total_hp": 87,
                        "boardSide": "def",
                        "full_name": "Tao Rûng",
                        "skill_spec_ep": 40
                    }, {
                        "ep": 0,
                        "hp": 123,
                        "id": "Gangster4",
                        "row": 1,
                        "look": [{ "id": 8, "empty": true }, { "id": 7, "empty": true }, { "id": 17, "empty": true }, { "id": 19, "empty": true }, { "id": 6, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 32, "empty": true }, { "id": 28, "name": "/bodyparts/28/4oYr2q8wRwW5cUgCl3q4.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 13 }, { "id": 25, "name": "/bodyparts/25/ZMYXQtkQaKFYdeFATwcc.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 17 }, {
                                "id": 20,
                                "name": "/bodyparts/20/AqRcadnheH5DSiL70Qkk.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 15
                            }, { "id": 23, "name": "/bodyparts/23/ivn8koyMC9i3WsZnZdMP.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, { "id": 22, "name": "/bodyparts/22/o60wQTKCwAfzcF1daZFn.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 9 }, { "id": 21, "name": "/bodyparts/21/XmA7BDZUQXy2w4XvXjdk.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 14 }, {
                                "id": 18,
                                "name": "/bodyparts/18/O6JJXrCTbIa1Pn7hvKM0.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 12
                            }, { "id": 26, "name": "/bodyparts/26/YpoRH47pjt5Obk5Vqu14.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 11 }, { "id": 29, "name": "/bodyparts/29/auUnRcERm8zDbFWmoPgW.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 30, "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, {
                                "id": 2,
                                "name": "/bodyparts/2/IwW38qxUcz0NLKZM57Vz.svg",
                                "pivot_x": 0.41,
                                "pivot_y": 0.4,
                                "z_order": 10
                            }, { "id": 9, "name": "/bodyparts/9/3hM6VBqcXSaSU3imEZ6U.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 0, "name": "/bodyparts/0/KcXod8P721p0MBHmxrRB.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 6 }, { "id": 4, "name": "/bodyparts/4/n5ubUcVCMXvar2dJmpyj.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 3, "name": "/bodyparts/3/EjY7ALICXHIvxGt6IFQY.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, {
                                "id": 0,
                                "name": "/bodyparts/0/OHKi5PsiRzAmwsaCnFoH.svg",
                                "pivot_x": 0.45,
                                "pivot_y": 0.3,
                                "z_order": 6
                            }, { "id": 5, "name": "/bodyparts/5/SPffjzwAfWtvYeMLPPbu.svg", "pivot_x": 0.43, "pivot_y": 0.34, "z_order": 27 }, { "id": 2, "name": "/bodyparts/2/Bp86bItCBm5QD3RMQSFt.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, { "id": 1, "name": "/bodyparts/1/oQYfr9ft33JpquIzBxYc.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 7 }, { "id": 11, "name": "/bodyparts/11/TQq6wRfgFuiVAbukbXte.svg", "pivot_x": 0.42, "pivot_y": 0.29, "z_order": 22 }, {
                                "id": 13,
                                "name": "/bodyparts/13/G2m5hGZeNPKgG2OYh86g.svg",
                                "pivot_x": 0.4,
                                "pivot_y": 0.18,
                                "z_order": 24
                            }, { "id": 15, "name": "/bodyparts/15/6LKeVUUhhjuJooRH1MeN.svg", "pivot_x": 0.51, "pivot_y": 0.24, "z_order": 21 }, { "id": 4, "name": "/bodyparts/4/wpfG0B35YM7CcptGzvAM.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 16, "name": "/bodyparts/16/dx6oVhnalBxoeSjVF9qH.svg", "pivot_x": 0.5, "pivot_y": 0.18, "z_order": 20 }, {
                                "id": 10,
                                "name": "/bodyparts/10/y716WW5pz6jw6PdUuk4o.svg",
                                "pivot_x": 0.58,
                                "pivot_y": 0.34,
                                "z_order": 5
                            }, { "id": 14, "name": "/bodyparts/14/ND0tUiRRFbLRPkIVfhXx.svg", "pivot_x": 0.49, "pivot_y": 0.29, "z_order": 19 }, { "id": 3, "name": "/bodyparts/3/7MsNbkkq6ZzSuDX9pkLW.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, { "id": 12, "name": "/bodyparts/12/24PTAV0KFIH0zOkcoNeO.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, {
                                "id": 9,
                                "name": "/bodyparts/9/A2YEfgrKO2qt6ACVo9t0.svg",
                                "pivot_x": 0.52,
                                "pivot_y": 0.35,
                                "z_order": 4
                            }, { "id": 31, "name": "/bodyparts/31/Rw9c0BLEx0saHSBjqFNh.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "aleksey_ukhar",
                        "column": 2,
                        "skills": [],
                        "total_ep": 54,
                        "total_hp": 108,
                        "boardSide": "def",
                        "full_name": "Aleksey Ukhar",
                        "skill_spec_ep": 40
                    }, {
                        "ep": 0,
                        "hp": 77,
                        "id": "Gangster8",
                        "row": 2,
                        "look": [{ "id": 8, "empty": true }, { "id": 7, "empty": true }, { "id": 17, "empty": true }, { "id": 22, "empty": true }, { "id": 19, "empty": true }, { "id": 6, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 32, "empty": true }, { "id": 28, "name": "/bodyparts/28/w5rVt6yvW5On6SIp1TeN.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 13 }, {
                                "id": 20,
                                "name": "/bodyparts/20/AqRcadnheH5DSiL70Qkk.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 15
                            }, { "id": 25, "name": "/bodyparts/25/MR4kZblfIvHqKr1W0CNX.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 17 }, { "id": 18, "name": "/bodyparts/18/wOdaHESMu5DjIkJKN2aV.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 12 }, { "id": 23, "name": "/bodyparts/23/LvcBzMp16eGEdpqAGner.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, {
                                "id": 21,
                                "name": "/bodyparts/21/wVJLYtyb43EI4bCylnTP.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 14
                            }, { "id": 26, "name": "/bodyparts/26/u8xQGh7i4DHACI2WPPGL.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 11 }, { "id": 29, "name": "/bodyparts/29/auUnRcERm8zDbFWmoPgW.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 30, "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, {
                                "id": 2,
                                "name": "/bodyparts/2/IwW38qxUcz0NLKZM57Vz.svg",
                                "pivot_x": 0.41,
                                "pivot_y": 0.4,
                                "z_order": 10
                            }, { "id": 9, "name": "/bodyparts/9/3hM6VBqcXSaSU3imEZ6U.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 0, "name": "/bodyparts/0/KcXod8P721p0MBHmxrRB.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 6 }, { "id": 4, "name": "/bodyparts/4/n5ubUcVCMXvar2dJmpyj.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 3, "name": "/bodyparts/3/EjY7ALICXHIvxGt6IFQY.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, {
                                "id": 0,
                                "name": "/bodyparts/0/OHKi5PsiRzAmwsaCnFoH.svg",
                                "pivot_x": 0.45,
                                "pivot_y": 0.3,
                                "z_order": 6
                            }, { "id": 5, "name": "/bodyparts/5/SPffjzwAfWtvYeMLPPbu.svg", "pivot_x": 0.43, "pivot_y": 0.34, "z_order": 27 }, { "id": 2, "name": "/bodyparts/2/Bp86bItCBm5QD3RMQSFt.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, { "id": 1, "name": "/bodyparts/1/oQYfr9ft33JpquIzBxYc.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 7 }, { "id": 11, "name": "/bodyparts/11/TQq6wRfgFuiVAbukbXte.svg", "pivot_x": 0.42, "pivot_y": 0.29, "z_order": 22 }, {
                                "id": 13,
                                "name": "/bodyparts/13/G2m5hGZeNPKgG2OYh86g.svg",
                                "pivot_x": 0.4,
                                "pivot_y": 0.18,
                                "z_order": 24
                            }, { "id": 15, "name": "/bodyparts/15/6LKeVUUhhjuJooRH1MeN.svg", "pivot_x": 0.51, "pivot_y": 0.24, "z_order": 21 }, { "id": 4, "name": "/bodyparts/4/wpfG0B35YM7CcptGzvAM.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 16, "name": "/bodyparts/16/dx6oVhnalBxoeSjVF9qH.svg", "pivot_x": 0.5, "pivot_y": 0.18, "z_order": 20 }, {
                                "id": 10,
                                "name": "/bodyparts/10/y716WW5pz6jw6PdUuk4o.svg",
                                "pivot_x": 0.58,
                                "pivot_y": 0.34,
                                "z_order": 5
                            }, { "id": 14, "name": "/bodyparts/14/ND0tUiRRFbLRPkIVfhXx.svg", "pivot_x": 0.49, "pivot_y": 0.29, "z_order": 19 }, { "id": 3, "name": "/bodyparts/3/7MsNbkkq6ZzSuDX9pkLW.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, { "id": 12, "name": "/bodyparts/12/24PTAV0KFIH0zOkcoNeO.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, {
                                "id": 9,
                                "name": "/bodyparts/9/A2YEfgrKO2qt6ACVo9t0.svg",
                                "pivot_x": 0.52,
                                "pivot_y": 0.35,
                                "z_order": 4
                            }, { "id": 31, "name": "/bodyparts/31/Rw9c0BLEx0saHSBjqFNh.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "shea_donaldson",
                        "column": 2,
                        "skills": [],
                        "total_ep": 80,
                        "total_hp": 114,
                        "boardSide": "def",
                        "full_name": "Shea Donaldson",
                        "skill_spec_ep": 40
                    }, {
                        "ep": null,
                        "hp": 80,
                        "id": "Gangster10",
                        "row": 0,
                        "look": [{ "id": 8, "empty": true }, { "id": 7, "empty": true }, { "id": 17, "empty": true }, { "id": 22, "empty": true }, { "id": 19, "empty": true }, { "id": 6, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 32, "empty": true }, { "id": 18, "name": "/bodyparts/18/iMn50TjgR12uIgjzHy5K.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 12 }, {
                                "id": 21,
                                "name": "/bodyparts/21/H5y8fK61fthpUbasDp2C.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 14
                            }, { "id": 28, "name": "/bodyparts/28/1RDb1FY8kS8Zt8jdKs6E.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 13 }, { "id": 20, "name": "/bodyparts/20/Qk4MlB8tfRO44ZYmFspl.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 15 }, { "id": 23, "name": "/bodyparts/23/EpcruTJ4hYU1iCIJTy9m.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, {
                                "id": 25,
                                "name": "/bodyparts/25/xq4a5kG9NxxPDIi7BHLw.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 17
                            }, { "id": 26, "name": "/bodyparts/26/sGa55ccgvgtxhFMlECoR.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 11 }, { "id": 29, "name": "/bodyparts/29/qKYJZoJeiI1lEYkBMcPI.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 30, "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, {
                                "id": 2,
                                "name": "/bodyparts/2/pHDuIjGUhnzTZaisqow3.svg",
                                "pivot_x": 0.41,
                                "pivot_y": 0.4,
                                "z_order": 10
                            }, { "id": 9, "name": "/bodyparts/9/E9b4ZKFQZpTqYeQmNLpt.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 0, "name": "/bodyparts/0/MrEp8v3MTaMquUsZ1V45.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 6 }, { "id": 4, "name": "/bodyparts/4/80EW6QrK5B17nRpS9QYU.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 3, "name": "/bodyparts/3/kXUBA97qiSUgCIZNL5rA.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, {
                                "id": 0,
                                "name": "/bodyparts/0/NsDMnL9IAIW0VABewZDT.svg",
                                "pivot_x": 0.45,
                                "pivot_y": 0.3,
                                "z_order": 6
                            }, { "id": 5, "name": "/bodyparts/5/2vUnUgtTIZkZtjo9jxv7.svg", "pivot_x": 0.43, "pivot_y": 0.34, "z_order": 27 }, { "id": 2, "name": "/bodyparts/2/leHxfPOIhqIBBZPXqkNt.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, { "id": 1, "name": "/bodyparts/1/oQYfr9ft33JpquIzBxYc.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 7 }, { "id": 11, "name": "/bodyparts/11/IhemukJVfD6ZzTKlGjWP.svg", "pivot_x": 0.42, "pivot_y": 0.29, "z_order": 22 }, {
                                "id": 13,
                                "name": "/bodyparts/13/9Yh5nOERIp5tqkm6Z1lB.svg",
                                "pivot_x": 0.4,
                                "pivot_y": 0.18,
                                "z_order": 24
                            }, { "id": 15, "name": "/bodyparts/15/KHVCgpwxTVH49fXn5t32.svg", "pivot_x": 0.51, "pivot_y": 0.24, "z_order": 21 }, { "id": 4, "name": "/bodyparts/4/HMtlT6feT8oGi3RjjROq.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 16, "name": "/bodyparts/16/ITFMkcxCYbiRHoIYUsUt.svg", "pivot_x": 0.5, "pivot_y": 0.18, "z_order": 20 }, {
                                "id": 10,
                                "name": "/bodyparts/10/a7ZeJpHOmgoTtasmCvaP.svg",
                                "pivot_x": 0.58,
                                "pivot_y": 0.34,
                                "z_order": 5
                            }, { "id": 14, "name": "/bodyparts/14/wZvi4SdCwEjMfsFx1XAD.svg", "pivot_x": 0.49, "pivot_y": 0.29, "z_order": 19 }, { "id": 3, "name": "/bodyparts/3/GzwO4GmpG2mSWLvFm2TI.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, { "id": 12, "name": "/bodyparts/12/jhRGM8UjIoIagRQ2QxVN.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, {
                                "id": 9,
                                "name": "/bodyparts/9/n4qcVDltHI3FHWEy02f4.svg",
                                "pivot_x": 0.52,
                                "pivot_y": 0.35,
                                "z_order": 4
                            }, { "id": 31, "name": "/bodyparts/31/UJivjTLu1xmXz5g3wLFF.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "jing_yu_wen_bkh",
                        "column": 1,
                        "skills": [],
                        "total_ep": 92,
                        "total_hp": 113,
                        "boardSide": "def",
                        "full_name": "Jing Yu Wèn",
                        "skill_spec_ep": 999
                    }, {
                        "ep": null,
                        "hp": 92,
                        "id": "Gangster11",
                        "row": 0,
                        "look": [{ "id": 8, "empty": true }, { "id": 7, "empty": true }, { "id": 17, "empty": true }, { "id": 22, "empty": true }, { "id": 19, "empty": true }, { "id": 6, "empty": true }, { "id": 24, "empty": true }, { "id": 27, "empty": true }, { "id": 32, "empty": true }, { "id": 21, "name": "/bodyparts/21/WBBxXEnivzbxpPsBFCRD.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 14 }, {
                                "id": 26,
                                "name": "/bodyparts/26/1FVjZObgFuuL9z0lqjOv.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 11
                            }, { "id": 28, "name": "/bodyparts/28/4oYr2q8wRwW5cUgCl3q4.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 13 }, { "id": 20, "name": "/bodyparts/20/E525ktUJocrZd3nyh0JT.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 15 }, { "id": 18, "name": "/bodyparts/18/ywkpaJdO6pY9GwQzwXCm.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 12 }, {
                                "id": 25,
                                "name": "/bodyparts/25/vdV1sTFwZeHyXXxrLAzi.svg",
                                "pivot_x": 0.43,
                                "pivot_y": 0.43,
                                "z_order": 17
                            }, { "id": 23, "name": "/bodyparts/23/MpXB7ug5qbUeNP7u0srr.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": 16 }, { "id": 29, "name": "/bodyparts/29/auUnRcERm8zDbFWmoPgW.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, { "id": 30, "name": "/bodyparts/30/j9CVuj5qg6tK5po2A71n.svg", "pivot_x": 0.43, "pivot_y": 0.43, "z_order": -1 }, {
                                "id": 2,
                                "name": "/bodyparts/2/IwW38qxUcz0NLKZM57Vz.svg",
                                "pivot_x": 0.41,
                                "pivot_y": 0.4,
                                "z_order": 10
                            }, { "id": 9, "name": "/bodyparts/9/3hM6VBqcXSaSU3imEZ6U.svg", "pivot_x": 0.52, "pivot_y": 0.35, "z_order": 4 }, { "id": 0, "name": "/bodyparts/0/KcXod8P721p0MBHmxrRB.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 6 }, { "id": 4, "name": "/bodyparts/4/n5ubUcVCMXvar2dJmpyj.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 3, "name": "/bodyparts/3/EjY7ALICXHIvxGt6IFQY.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, {
                                "id": 0,
                                "name": "/bodyparts/0/OHKi5PsiRzAmwsaCnFoH.svg",
                                "pivot_x": 0.45,
                                "pivot_y": 0.3,
                                "z_order": 6
                            }, { "id": 5, "name": "/bodyparts/5/SPffjzwAfWtvYeMLPPbu.svg", "pivot_x": 0.43, "pivot_y": 0.34, "z_order": 27 }, { "id": 2, "name": "/bodyparts/2/Bp86bItCBm5QD3RMQSFt.svg", "pivot_x": 0.41, "pivot_y": 0.4, "z_order": 10 }, { "id": 1, "name": "/bodyparts/1/oQYfr9ft33JpquIzBxYc.svg", "pivot_x": 0.45, "pivot_y": 0.3, "z_order": 7 }, { "id": 11, "name": "/bodyparts/11/TQq6wRfgFuiVAbukbXte.svg", "pivot_x": 0.42, "pivot_y": 0.29, "z_order": 22 }, {
                                "id": 13,
                                "name": "/bodyparts/13/G2m5hGZeNPKgG2OYh86g.svg",
                                "pivot_x": 0.4,
                                "pivot_y": 0.18,
                                "z_order": 24
                            }, { "id": 15, "name": "/bodyparts/15/6LKeVUUhhjuJooRH1MeN.svg", "pivot_x": 0.51, "pivot_y": 0.24, "z_order": 21 }, { "id": 4, "name": "/bodyparts/4/wpfG0B35YM7CcptGzvAM.svg", "pivot_x": 0.36, "pivot_y": 0.36, "z_order": 26 }, { "id": 16, "name": "/bodyparts/16/dx6oVhnalBxoeSjVF9qH.svg", "pivot_x": 0.5, "pivot_y": 0.18, "z_order": 20 }, {
                                "id": 10,
                                "name": "/bodyparts/10/y716WW5pz6jw6PdUuk4o.svg",
                                "pivot_x": 0.58,
                                "pivot_y": 0.34,
                                "z_order": 5
                            }, { "id": 14, "name": "/bodyparts/14/ND0tUiRRFbLRPkIVfhXx.svg", "pivot_x": 0.49, "pivot_y": 0.29, "z_order": 19 }, { "id": 3, "name": "/bodyparts/3/7MsNbkkq6ZzSuDX9pkLW.svg", "pivot_x": 0.5, "pivot_y": 0.41, "z_order": 3 }, { "id": 12, "name": "/bodyparts/12/24PTAV0KFIH0zOkcoNeO.svg", "pivot_x": 0.4, "pivot_y": 0.24, "z_order": 25 }, {
                                "id": 9,
                                "name": "/bodyparts/9/A2YEfgrKO2qt6ACVo9t0.svg",
                                "pivot_x": 0.52,
                                "pivot_y": 0.35,
                                "z_order": 4
                            }, { "id": 31, "name": "/bodyparts/31/Rw9c0BLEx0saHSBjqFNh.svg", "pivot_x": 0.51, "pivot_y": 0.3, "z_order": -1 }],
                        "alias": "lancillotto_zorzin_ojn",
                        "column": 2,
                        "skills": [],
                        "total_ep": 65,
                        "total_hp": 83,
                        "boardSide": "def",
                        "full_name": "Lancillotto Zorzin",
                        "skill_spec_ep": 999
                    }],
                "maxRows": 3,
                "winningBoard": "atk"
            };
            // ===============================================================
            // HELP ITEM (book image)
            // ===============================================================
            this._item = new Phaser.Sprite(this.game, 0, 0, "Item");
            this._item.anchor.set(0.5, 0.95);
            this._item.exists = false;
            this.world.add(this._item);
            this.world.game.time.advancedTiming = true;
            // ===============================================================
            // BASIC SETUP
            // ===============================================================
            // create Spriter loader - class that can change Spriter file into internal structure
            var spriterLoader = new Spriter.Loader(this.game, 'assets/Gangster/bodyparts');
            // create Spriter file object - it wraps XML/JSON loaded with Phaser Loader
            //var spriterFile = new Spriter.SpriterXml(this.cache.getXML("TESTXml"));
            for (var j = 0; j < battleSummary.intial.length; j++) {
                var gangster = battleSummary.intial[j];
                var json = this.cache.getJSON("TESTJson");
                json.folder[0].file = gangster.look;
                var spriterFile = new Spriter.SpriterJSON(json, { imageNameType: Spriter.eImageNameType.FULL_PATH_NO_EXTENSION });
                var spriterData = spriterLoader.load(spriterFile);
                this._spriterData[j] = spriterData;
            }
            spriterLoader._loader.onLoadComplete.add(function () {
                _this._spriterGroup = [];
                for (var i = 0; i < _this._spriterData.length; i++) {
                    // create actual renderable object - it is extension of Phaser.Group
                    _this._spriterGroup[i] = new Spriter.SpriterGroup(_this.game, _this._spriterData[i], null, "Soldier0", 'Walk', 100);
                    _this._spriterGroup[i].position.setTo(100 + (i * 20), 400);
                    _this._spriterGroup[i].scale.setTo(.5, .5);
                    // adds SpriterGroup to Phaser.World to appear on screen
                    _this.world.add(_this._spriterGroup[i]);
                }
                // ===============================================================
                // REST OF THE EXAMPLE - change animations, change charmaps
                // ===============================================================
                // cycle animations
                var animation = 0;
                var key = _this.game.input.keyboard.addKey(Phaser.Keyboard.A);
                key.onDown.add(function () {
                    animation = (animation + 1) % this._spriterGroup[0].animationsCount;
                    for (var i = 0; i < this._spriterGroup.length; i++) {
                        this._spriterGroup[i].playAnimationById(animation);
                    }
                }, _this);
                // change char maps
                var charMaps = ["Green", "Brush"];
                var charmapID = 0;
                // on I key show / hide item attached to point
                key = _this.game.input.keyboard.addKey(Phaser.Keyboard.I);
                key.onDown.add(function () {
                    this._item.exists = !this._item.exists;
                }, _this);
            });
        };
        // -------------------------------------------------------------------------
        Test.prototype.update = function () {
            for (var i = 0; i < this._spriterGroup.length; i++) {
                this._spriterGroup[i].updateAnimation();
            }
        };
        // -------------------------------------------------------------------------
        Test.prototype.render = function () {
            this.game.debug.text("Press C to cycle charmaps", 50, 46, "rgb(255, 255, 255)");
            this.game.debug.text("Press I to show / hide attached item (book)", 50, 62, "rgb(255, 255, 255)");
            this.game.debug.text(this._text, 80, 232, "rgb(255, 255, 255)");
            this.game.debug.text(this.world.game.time.fps.toString(), 2, 14, "#00ff00");
        };
        return Test;
    }(Phaser.State));
    SpriterExample.Test = Test;
})(SpriterExample || (SpriterExample = {}));
//# sourceMappingURL=test.js.map