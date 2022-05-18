import * as PIXI from 'pixi.js'
import fishImage from "./images/shark.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import smokeImage from "./images/smog.png"
import { Smog } from './smog'
import { Graphics } from 'pixi.js'


class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader
    s: Smog
    graphics: Graphics
    

    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 450, backgroundColor: 0x000000})
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
            .add('bubbleTexture', bubbleImage)
            .add('waterTexture', waterImage)
            .add('smogTexture', smokeImage)
        this.loader.load(() => this.loadCompleted())
    }

    loadCompleted() {
        this.s = new Smog(this.pixi.screen.width/2,this.pixi.screen.height/2,100)
        let graphics = new PIXI.Graphics()
            .beginFill(0xFFFFFF)
            .drawCircle(this.s.x, this.s.y, this.s.radius)
            .endFill()
        this.pixi.stage.addChild(graphics)
        
        
        this.pixi.ticker.add((delta) => this.update(delta))
    }

    update(delta: number) {
        //console.log("Updating...")
        this.s.update()
        
        
    }
}
let g = new Game