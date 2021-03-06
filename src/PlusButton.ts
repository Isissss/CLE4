import * as PIXI from 'pixi.js'
import { Button } from './Button';
import { Game } from './game';
import { Slider } from './Slider';

export class PlusButton extends Button {

    parent: Slider
    increments: number

    constructor(game: Game, parent: Slider, increments: number, texture: PIXI.Texture) {
        super(game, [texture])
        this.parent = parent
        this.increments = increments
    }

    public buttonClicked() {
        if(this.parent.value < 100){
        this.parent.value = this.parent.value + this.increments
        this.parent.update()
        }
    }
}