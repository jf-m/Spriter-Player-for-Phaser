module Spriter {

    export class SpriterGroup {

        private _spriter: Spriter;
        private _textureKey: string;

        private _entity: Entity;
        private _entityName: string;
        private _animation: Animation;
        private _animationName: string;
        private _animationSpeed: number;

        private _mainlineStepper: LineStepper = new LineStepper();
        private _lineSteppers: LineStepper[] = [];
        private _lineSteppersCount: number = 0;

        private _bones: SpriterBone[] = [];
        private _objects: SpriterObject[] = [];
        private _tags: number = 0;  // up to 32 tags - 1 per bit
        private _vars: Variable[] = [];

        private _charMapStack: CharMapStack;

        private _time: number;
        private _timeElapsed: number;

        private _root: SpatialInfo;

        private _paused: boolean = false;
        private _finished: boolean;
        private _isUsingAtlas: boolean;

        // -------------------------------------------------------------------------
        constructor(spriter: Spriter, texutreKey: string, entityName: string,
                    animation?: string | number, animationSpeedPercent?: number, isUsingAtlas?: boolean) {
            this._spriter = spriter;
            this._entityName = entityName;
            this._entity = spriter.getEntityByName(entityName);
            this._textureKey = texutreKey;
            this._isUsingAtlas = isUsingAtlas ? isUsingAtlas : false;

            this._root = new SpatialInfo();

            // clone variables
            for (var i = 0; i < this._entity.variablesLength; i++) {
                this._vars[i] = this._entity.getVariableById(i).clone();
            }

            // create charmap stack
            this._charMapStack = new CharMapStack(this._entity);

            // set animation speed
            if (animationSpeedPercent === undefined) {
                animationSpeedPercent = 100;
            }

            this.setAnimationSpeedPercent(animationSpeedPercent);

            // set animation
            if (animation === undefined || animation === null) {
                // set first animation
                this.playAnimationById(0);
            } else if (typeof animation === "number") {
                this.playAnimationById(animation);
            } else {
                this.playAnimationByName(animation);
            }
        }

        // -------------------------------------------------------------------------
        public get spriter(): Spriter {
            return this._spriter;
        }

        // -------------------------------------------------------------------------
        public get entity(): Entity {
            return this._entity;
        }

        // -------------------------------------------------------------------------
        public get charMapStack(): CharMapStack {
            return this._charMapStack;
        }

        // -------------------------------------------------------------------------
        public get paused(): boolean {
            return this._paused;
        }

        // -------------------------------------------------------------------------
        public set paused(paused: boolean) {
            this._paused = paused;
        }

        // -------------------------------------------------------------------------
        public get animationsCount(): number {
            return this._entity.animationsLength;
        }

        // -------------------------------------------------------------------------
        public get currentAnimationName(): string {
            return this._animationName;
        }

        // -------------------------------------------------------------------------
        public pushCharMap(charMapName: string): void {
            this._charMapStack.push(charMapName);
            this.resetSprites();
        }

        // -------------------------------------------------------------------------
        public removeCharMap(charMapName: string): void {
            this._charMapStack.remove(charMapName);
            this.resetSprites();
        }

        // -------------------------------------------------------------------------
        public clearCharMaps(): void {
            this._charMapStack.reset();
            this.resetSprites();
        }

        // -------------------------------------------------------------------------
        private resetSprites(): void {
            for (var i = 0; i < this._objects.length; i++) {
                this._objects[i].resetFile();
            }
        }

        // -------------------------------------------------------------------------
        public isTagOn(tagName: string): boolean {
            return this.isTagOnById(this._spriter.getTagByName(tagName).id);
        }

        // -------------------------------------------------------------------------
        public isTagOnById(tagId: number): boolean {
            return (this._tags & (1 << tagId)) > 0;
        }

        // -------------------------------------------------------------------------
        public getVariable(varName: string): Variable {
            return this.getVariableById(this._entity.getVariableByName(varName).id);
        }

        // -------------------------------------------------------------------------
        public getVariableById(varId: number): Variable {
            return this._vars[varId];
        }

        // -------------------------------------------------------------------------
        public getObject(objectName: string): SpriterObject {
            for (var i = 0; i < this._objects.length; i++) {
                var object = this._objects[i];

                if (object.name === objectName) {
                    return object;
                }
            }

            return null;
        }

        // -------------------------------------------------------------------------
        public setAnimationSpeedPercent(animationSpeedPercent: number = 100): void {
            this._animationSpeed = animationSpeedPercent / 100;
        }

        // -------------------------------------------------------------------------
        public playAnimationById(animationId: number): void {
            var animation = this._entity.getAnimationById(animationId);

            if (animation === undefined || animation === null) {
                console.warn("Animation " + animationId + " for entity " + this._entityName + " does not exist!");
                return;
            }

            this.playAnimation(animation);
        }

        // -------------------------------------------------------------------------
        public playAnimationByName(animationName: string): void {
            var animation = this._entity.getAnimationByName(animationName);

            if (animation === undefined || animation === null) {
                console.warn("Animation " + animationName + " for entity " + this._entityName + " does not exist!");
                return;
            }

            this.playAnimation(animation);
        }

        // -------------------------------------------------------------------------
        private playAnimation(animation: Animation): void {
            this._animationName = animation.name;
            this._animation = animation

            this._finished = false;

            // reset time to beginning of animation and find first from and to keys
            this._mainlineStepper.reset();
            this._mainlineStepper.line = this._animation.mainline;
            this._time = 0;

            // reset all additional time lines (soundline, varline, tagline, eventline)
            this.resetLines();

            // reset tags
            this._tags = 0;

            // reset variables to defaults
            for (var i = 0; i < this._vars.length; i++) {
                this._vars[i].reset();
            }

            // create bones and sprites - based on data in mainLine key 0
            this.loadKeys(<KeyMainline>this._animation.mainline.at(0), true);
            // first update - to set correct positions
            this.updateCharacter();
        }

        // -------------------------------------------------------------------------
        private resetLines(): void {
            // reset steppers
            this._lineSteppersCount = 0;

            // go through all lines (sounds, events, tags, vars)
            for (var i = 0; i < this._animation.linesLength; i++) {
                var line = this._animation.getLineById(i);

                // if not enough line steppers in array, add new one
                if (this._lineSteppersCount >= this._lineSteppers.length) {
                    this._lineSteppers[this._lineSteppersCount] = new LineStepper();
                }

                // get free stepper
                var stepper = this._lineSteppers[this._lineSteppersCount++];
                stepper.reset();
                stepper.line = line;
            }
        }

        // -------------------------------------------------------------------------
        private setBones(bones: Ref[], force: boolean = false): void {
            // switch off all existing bones
            for (var i = 0; i < this._bones.length; i++) {
                if (this._bones[i] !== undefined) {
                    this._bones[i].setOn(false);
                }
            }

            // go through all bones and add new ones if necessary and activate used ones
            for (var i = 0; i < bones.length; i++) {
                var ref = bones[i];

                // if bone does not exist add it and make active, else make it active only
                if (this._bones[ref.id] === undefined) {
                    var newBone = new SpriterBone();
                    newBone.type = eObjectType.BONE;
                    this._bones[ref.id] = newBone;
                }

                var bone = this._bones[ref.id];

                bone.setOn(true);
                bone.parent = ref.parent;

                if (bone.timelineKey !== ref.key || bone.timeline !== ref.timeline || force) {
                    bone.setKey(this._entity, this._animation, ref.timeline, ref.key);
                }
            }
        }

        // -------------------------------------------------------------------------
        private setObjects(objects: Ref[], force: boolean = false): void {
            // switch off (kill) all existing sprites
            for (var i = 0; i < this._objects.length; i++) {
                if (this._objects[i] !== undefined) {
                    this._objects[i].setOn(false);
                }
            }

            // go through all objects/sprites and add new ones if necessary and activate used ones
            var zChange = false;
            for (var i = 0; i < objects.length; i++) {
                var ref = objects[i];

                var object: SpriterObject = null;
                var sprite: Object = null;

                // if sprite does not exist add it and make active, else make it active only
                if (this._objects[ref.id] === undefined) {
                    sprite = {
                        image: '',
                        display: 'block',
                        zIndex: 0
                    };
                    object = new SpriterObject(this, sprite, this._isUsingAtlas);
                    this._objects[ref.id] = object;
                } else {
                    object = this._objects[ref.id];
                    sprite = object.sprite;
                }

                object.parent = ref.parent;
                object.type = this._animation.getTimelineById(ref.timeline).objectType;

                // is it sprite or any other type of object? (box / point)
                if (object.type === eObjectType.SPRITE) {
                    object.setOn(true);

                    if (parseInt(object.sprite.zIndex) !== ref.z) {
                        object.sprite.zIndex = "" + ref.z;
                        zChange = true;
                    }
                } else {
                    object.setOn(true, true);

                    // TODO remove - debug
                    //if (object.type === eObjectType.POINT) {
                    //    object.setOn(true);
                    //    object.sprite.frameName = "DebugPoint";
                    //    object.sprite.anchor.set(0.5, 0.5);
                    //} else if (object.type === eObjectType.BOX) {
                    //    object.setOn(true);
                    //    object.sprite.frameName = "DebugBox";
                    //}
                }


                if (object.timelineKey !== ref.key || object.timeline !== ref.timeline || force) {
                    object.setKey(this._entity, this._animation, ref.timeline, ref.key);
                }
            }
        }

        // -------------------------------------------------------------------------
        private loadKeys(keyMainline: KeyMainline, force: boolean = false): void {
            this.setBones(keyMainline.boneRefs, force);
            this.setObjects(keyMainline.objectRefs, force);
        }

        public generate() {
            const exportData = {
                "animations": []
            };
            for (let a = 0; a < this._entity.animationsLength; a++) {
                let animation = this._entity.getAnimationById(a);
                this._animationName = animation.name;
                this._animation = animation;
                this._finished = false;
                // reset time to beginning of animation and find first from and to keys
                this._mainlineStepper.reset();
                this._mainlineStepper.line = this._animation.mainline;
                this._time = 0;
                // reset all additional time lines (soundline, varline, tagline, eventline)
                this.resetLines();
                // reset tags
                this._tags = 0;
                const exportAnimation = {
                    "name": this._animationName,
                    "duration": animation.length,
                    "loop": animation.loopType,
                    "timeline": []
                };
                // reset variables to defaults
                for (var i = 0; i < this._vars.length; i++) {
                    this._vars[i].reset();
                }
                var keyLoop = 0;
                let totalTime = 0;
                var key: KeyMainline = <KeyMainline>this._animation.mainline.at(i);
                while (key._id === keyLoop && keyLoop < 20) {
                    const exportKey = this.generateKeyExportData(key, key._time - totalTime);
                    totalTime = key._time;
                    exportAnimation.timeline.push(exportKey);
                    keyLoop++;
                    key = <KeyMainline>this._animation.mainline.at(keyLoop);
                }
                if (totalTime <= animation.length && exportAnimation.timeline.length >= 2) {
                    exportAnimation.timeline.push(this.generateKeyExportData(<KeyMainline>this._animation.mainline.at(0), animation.length - totalTime));
                }
                exportData.animations.push(exportAnimation);
            }
            return exportData;
        }

        public generateKeyExportData(key: KeyMainline, forceTime: number = null): Object {
            // create bones and sprites - based on data in mainLine key 0
            this.loadKeys(key, true);
            // first update - to set correct positions
            this.updateCharacter();
            const exportKey = {
                "time": (forceTime != null ? forceTime : key._time),
                "transforms": []
            };
            for (var i = 0; i < this._objects.length; i++) {
                var object = this._objects[i];
                if (object.on) {
                    var parentSpatial = (object.parent === -1) ? this._root : this._bones[object.parent].transformed;
                    object.tween(this._time);
                    object.update(parentSpatial);
                    if (object.type === 0 /* SPRITE */) {
                        object.updateSprite();
                    }
                    else if (object.type === 2 /* BOX */) {
                        //this.onBoxUpdated.dispatch(this, object);
                    }
                    else if (object.type === 3 /* POINT */) {
                        //this.onPointUpdated.dispatch(this, object);
                    }
                    const t = object.transformed;
                    if (object.getFile()) {
                        exportKey.transforms.push({
                            id: object.getFile().id,
                            uuid: object.timeline,
                            display: object.sprite.display,
                            zIndex: object.sprite.zIndex,
                            transform: {
                                x: t.x,
                                y: t.y,
                                rotation: t.angle,
                                opacity: t.alpha,
                                scaleX: t.scaleX,
                                scaleY: t.scaleY,
                                transformOrigin: (t.pivotX * 100).toFixed(2) + "% " + (t.pivotY * 100).toFixed(2) + "%",
                            }
                        });
                    } else {
                        exportKey.transforms.push({
                            name: object.name,
                            uuid: object.timeline,
                            display: object.sprite.display,
                            zIndex: object.sprite.zIndex,
                            transform: {
                                x: t.x,
                                y: t.y,
                                rotation: t.angle,
                                opacity: t.alpha,
                                scaleX: t.scaleX,
                                scaleY: t.scaleY,
                                transformOrigin: (t.pivotX * 100).toFixed(2) + "% " + (t.pivotY * 100).toFixed(2) + "%",
                            }
                        });
                    }
                } else {
                    if (object.getFile()) {
                        exportKey.transforms.push({
                            id: object.getFile().id,
                            name: object.name,
                            display: 'none'
                        });
                    } else {
                        exportKey.transforms.push({
                            name: object.name,
                            display: 'none'
                        });
                    }
                }
            }
            return exportKey;
        }

        // -------------------------------------------------------------------------
        public updateAnimation(event): void {
            if (this._paused || this._finished) {
                return;
            }

            var mainlineStepper = this._mainlineStepper;

            // check if in the end of animation and whether to loop or not
            if (this._time > this._animation.length) {
                if (this._animation.loopType === eAnimationLooping.NO_LOOPING) {
                    this._time = this._animation.length;
                    this._finished = true;
                } else {
                    this._time -= this._animation.length;
                    //this.onLoop.dispatch(this);
                }
            }


            // consume all new keys
            var key: KeyMainline;
            while ((key = <KeyMainline>mainlineStepper.step(this._time)) !== null) {
                //console.log("got key at: " + key.time + " time: " + this._time);
                this.loadKeys(key);
                mainlineStepper.lastTime = key.time;
            }


            this.updateCharacter();
            this.updateLines();

            if (this._finished) {
                //this.onFinish.dispatch(this);
            }

            if (this._timeElapsed == null) {
                this._timeElapsed = new Date().getTime();
            }
            const curr = new Date().getTime();
            this._time += ((curr - this._timeElapsed) * this._animationSpeed);
            this._timeElapsed = curr;
        }

        // -------------------------------------------------------------------------
        private updateCharacter(): void {
            for (var i = 0; i < this._bones.length; i++) {
                var bone = this._bones[i];
                if (bone.on) {
                    var parentSpatial = (bone.parent === -1) ? this._root : this._bones[bone.parent].transformed;
                    bone.tween(this._time);
                    bone.update(parentSpatial);
                }
            }

            for (var i = 0; i < this._objects.length; i++) {
                var object = this._objects[i];
                if (object.on) {
                    var parentSpatial = (object.parent === -1) ? this._root : this._bones[object.parent].transformed;
                    object.tween(this._time);
                    object.update(parentSpatial);

                    if (object.type === eObjectType.SPRITE) {
                        object.updateSprite();
                    } else if (object.type === eObjectType.BOX) {
                        //this.onBoxUpdated.dispatch(this, object);
                    } else if (object.type === eObjectType.POINT) {
                        //this.onPointUpdated.dispatch(this, object);
                    }
                }
            }
        }

        // -------------------------------------------------------------------------
        private updateLines(): void {
            for (var i = this._lineSteppersCount - 1; i >= 0; i--) {
                var lineStepper = this._lineSteppers[i];
                var line = lineStepper.line;
                var key: Key;

                while ((key = lineStepper.step(this._time)) !== null) {
                    switch (line.type) {
                        case eTimelineType.SOUND_LINE:
                            //console.log("sound: " + line.name + " - key: " + key.id + ", time: " + key.time);
                            //this.onSound.dispatch(this, line.name);
                            break;

                        case eTimelineType.EVENT_LINE:
                            //console.log("event: " + line.name + " - key: " + key.id + ", time: " + key.time);
                            //this.onEvent.dispatch(this, line.name);
                            break;

                        case eTimelineType.TAG_LINE:
                            var tagsOn = (<KeyTag>key).tagsOn;
                            var tagChanges = this._tags ^ tagsOn;
                            this._tags = tagsOn;
                            // go through all changes
                            for (var j = 0; j < this._spriter.tagsLength; j++) {
                                var mask = 1 << j;
                                if (tagChanges & mask) {
                                    //console.log("tag change: " + this._spriter.getTagById(j).name + " value: " + ((tagsOn & mask) > 0) + " - key: " + key.id + ", time: " + key.time);
                                    //this.onTagChange.dispatch(this, this._spriter.getTagById(j).name, (tagsOn & mask) > 0);
                                }
                            }
                            break;

                        case eTimelineType.VAR_LINE:
                            var newVal = (<KeyVariable>key).value;
                            var variable = this._vars[(<Varline>line).varDefId];
                            variable.value = newVal;
                            //console.log("var set: " + variable.name + " value: " + variable.value + " - key: " + key.id + ", time: " + key.time);
                            //this.onVariableSet.dispatch(this, variable);
                            break;
                    }

                    lineStepper.lastTime = key.time;
                }
            }
        }
    }
}
