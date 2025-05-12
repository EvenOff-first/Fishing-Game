import { Sprite, Texture } from "pixi.js";


interface IFish {
    update: () => void;
}

export class Fish implements IFish {
    public sprite: Sprite;
    private speed: number;

    constructor(x: number, y: number) {
        this.sprite = new Sprite(Texture.from('fish'));
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.scale.set(0.5);
        this.speed = 1 + Math.random();
    }

    update() {
        this.sprite.x += this.speed;
        if (this.sprite.x > 800) {
            this.sprite.x = -this.sprite.width;
        }
    }
}