import { Container, Sprite, Texture } from 'pixi.js';

export class MenuBackground extends Container {
    private forestDay: Sprite;
    private forestNight: Sprite;
    private water: Sprite;

    constructor() {
        super();

        const forestDayTexture = Texture.from('forest-day');
        const forestNightTexture = Texture.from('forest-night');
        const waterTexture = Texture.from('water');

        this.forestDay = new Sprite(forestDayTexture);
        this.forestNight = new Sprite(forestNightTexture);
        this.water = new Sprite(waterTexture);

        this.forestDay.position.set(0, 0);
        this.forestNight.position.set(0, 0);
        this.water.position.set(0, this.forestDay.height);

        this.addChild(this.forestDay);
        this.addChild(this.forestNight);
        this.addChild(this.water);

        this.setDayMode();
    }

    public setDayMode(): void {
        this.forestDay.visible = true;
        this.forestNight.visible = false;
    }

    public setNightMode(): void {
        this.forestDay.visible = false;
        this.forestNight.visible = true;
    }
}
