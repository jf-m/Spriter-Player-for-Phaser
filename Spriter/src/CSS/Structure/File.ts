/// <reference path="Item.ts" />

module Spriter {

    export class File extends Item {

        private _pivotX: number;
        private _pivotY: number;
        private _isEmpty: boolean;

        // -------------------------------------------------------------------------
        constructor(id: number, name: string, pivotX: number, pivotY: number, isEmpty: boolean = false) {
            super(id, name);

            this._pivotX = pivotX;
            this._pivotY = pivotY;
            this._isEmpty = isEmpty;
        }

        // -------------------------------------------------------------------------
        public get pivotX(): number {
            return this._pivotX;
        }

        // -------------------------------------------------------------------------
        public get isEmpty(): boolean {
            return this._isEmpty;
        }

        // -------------------------------------------------------------------------
        public get pivotY(): number {
            return this._pivotY;
        }
    }
}