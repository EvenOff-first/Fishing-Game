import { Sprite, Texture } from "pixi.js";


interface IFisher {

}

export class Fisher implements IFisher {
    public sprite: Sprite;

    constructor() {
        this.sprite = new Sprite(Texture.from('fisher'));
        this.sprite.x = 350;
        this.sprite.y = 200;
    }
}