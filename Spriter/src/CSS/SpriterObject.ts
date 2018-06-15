/// <reference path="SpriterBone.ts" />
module Spriter {

    export class SpriterObject extends SpriterBone {

        private _spriter: Spriter;
        private _charMapStack: CharMapStack;
        private _sprite: Object;

        private _file: File;
        private _hide: boolean;
        private _isUsingAtlas: boolean;

        // -------------------------------------------------------------------------
        constructor(parent: SpriterGroup, sprite: Object, isUsingAtlas: boolean) {
            super();

            this._spriter = parent.spriter;
            this._charMapStack = parent.charMapStack;
            this._sprite = sprite;
            this._isUsingAtlas = isUsingAtlas;
        }

        // -------------------------------------------------------------------------
        public get sprite(): Object {
            return this._sprite;
        }

        // -------------------------------------------------------------------------
        public setOn(on: boolean, hideSprite: boolean = false): void {
            super.setOn(on);

            // hide sprite for non-sprite objects
            this._sprite.display = (on && !this._hide && !hideSprite) ? 'block' : 'none';
        }

        // -------------------------------------------------------------------------
        public setKey(entity: Entity, animation: Animation, timelineId: number, keyId: number): void {
            super.setKey(entity, animation, timelineId, keyId);

            // set sprite - skip invisible objects - boxes, points
            if (this.type === eObjectType.SPRITE) {
                var spriteKey = (<KeyObject>this.key);
                var file = this._spriter.getFolderById(spriteKey.folder).getFileById(spriteKey.file);
                this._file = file;
                this.setFile(file);
            } else {
                this._file = null;
            }
        }

        // -------------------------------------------------------------------------
        public resetFile(): void {
            if (this.type === eObjectType.SPRITE) {
                this.setFile(this._file);
            }
        }

        // -------------------------------------------------------------------------
        private setFile(file: File): void {
            file = this._charMapStack.getFile(file);

            if (file !== null && file.isEmpty !== true) {
                this._hide = false;
                this._sprite.image = 'url(/storage/bodyparts/' + file.name + ')';
            } else {
                this._hide = true;
                this._sprite.display = 'none';
            }
        }

        public getFile(): File {
            return this._file;
        }

        // -------------------------------------------------------------------------
        public updateSprite(): void {
            var t = this.transformed;
            var s = this.sprite;
            /*
            TweenMax.set(s, {
                x: t.x,
                y: t.y,
                rotation: t.angle,
                opacity: t.alpha,
                scaleX: t.scaleX,
                scaleY: t.scaleY,
                transformOrigin: (t.pivotX * 100) + "% " + (t.pivotY * 100) + "%",
            });
            */
        }
    }
}
