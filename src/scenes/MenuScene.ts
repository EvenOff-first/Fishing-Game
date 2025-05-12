import { sound } from '@pixi/sound';
import { BaseScene } from "./BaseScene";
import { SceneManager } from '../core/SceneManager';
import { GameScene } from './GameScene';
import { FactoryButton } from '../game/components/FactoryButton';
import { Sprite, Texture } from 'pixi.js';

export class MenuScene extends BaseScene {
    private background: Sprite;

    constructor() {
        super(0x81ecec);

        this.background = new Sprite(Texture.from('bg_menu'));
        this.addChild(this.background);

        const buttonStart = new FactoryButton({
            label: 'Start Game',
            type: 'textButton',
            onClick: () => {
                SceneManager.changeScene(new GameScene());
                sound.stop('menu-sound');
            },
        });
        buttonStart.position.set(window.innerWidth / 2, window.innerHeight / 2);
        this.addChild(buttonStart);

        this.addChild(buttonStart);
        this.backgroundSound();
    }

    backgroundSound() {
        sound.play('menu-sound', {
            loop: true
        });
    }
}