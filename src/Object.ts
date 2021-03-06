import * as PIXI from 'pixi.js'
import { Game } from './game' 

export class Object extends PIXI.Sprite{
    public speed: number 
    game: Game
    pickupSound: HTMLAudioElement
    constructor(texture: PIXI.Texture, game: Game) {
        super(texture)
        this.game  = game
        this.x = Math.random() * (window.innerWidth * 2) - (window.innerWidth / 2)
        this.y = Math.random() * (window.innerHeight * 2) - (window.innerHeight / 2)
        this.speed = 4;
        this.anchor.set(0.5);

        this.pickupSound = this.game.loader.resources["pickupsoundFile"].data!
}

    public update() {
        this.x += this.speed
    }

    pickedUp(){
        this.game.ObjectPickupSound.volume = this.game.soundFXVolume
        this.game.ObjectPickupSound.play()
    }
}