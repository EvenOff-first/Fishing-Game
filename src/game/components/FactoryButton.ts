import { Container, Graphics, Sprite, Text, TextStyle, Texture } from "pixi.js";

interface IOptionsButton {
    label: string;
    width?: number;
    height?: number;
    onClick: () => void;
    fillColor?: number;
    textColor?: number;
    type?: string;
    texture?: Texture;
}


class TextButton extends Container {
    constructor(
        {
            label,
            width = 200,
            height = 50,
            onClick,
            fillColor,
            textColor
        }: IOptionsButton
    ) {
        super();

        const background = new Graphics()
            .fill(fillColor)
            .rect(0, 0, width, height)

        const text = new Text({
            text: label,
            style: new TextStyle({
                fill: textColor,
                fontSize: 20,
                fontWeight: 'bold',
            }),
        });

        this.addChild(background, text);

        this.eventMode = 'static';
        this.cursor = 'pointer';
        this.on('pointertap', onClick);
    }
}

class SpriteButton extends Container {
    public sprite: Sprite;

    constructor(
        {
            width = 32,
            height = 32,
            onClick,
            texture
        }: IOptionsButton
    ) {
        super();

        this.sprite = new Sprite(texture);
        this.sprite.eventMode = 'static';
        this.sprite.cursor = 'pointer';
        this.sprite.interactive = true;
        this.sprite.width = width;
        this.sprite.height = height;
        this.sprite.on('pointertap', onClick);

        this.addChild(this.sprite);
    }
}

export class FactoryButton extends Container {

    constructor(
        {
            label,
            width = 200,
            height = 50,
            onClick,
            fillColor = 0x3a3a3c,
            textColor = 0xffffff,
            type = 'textButton',
            texture = new Texture(),
        }: IOptionsButton
    ) {
        super();

        this.createButton(type, {
            label,
            width,
            height,
            onClick,
            fillColor,
            textColor,
            texture
        });
    }

    private createButton(type: string, options: IOptionsButton) {
        switch (type) {
            case 'textButton':
                return new TextButton({
                    label: options.label,
                    onClick: options.onClick,
                    width: options.width,
                    height: options.height,
                    fillColor: options.fillColor,
                    textColor: options.textColor,
                });
            case 'spriteButton':
                return new SpriteButton({
                    label: options.label,
                    onClick: options.onClick,
                    width: options.width,
                    height: options.height,
                    fillColor: options.fillColor,
                    textColor: options.textColor,
                    texture: options.texture,
                });
            default:
                return;
        }
    }
}