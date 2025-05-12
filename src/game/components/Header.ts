import { Container, Texture } from 'pixi.js';
import { FactoryButton } from './FactoryButton';

export class Header extends Container {
    constructor(onMenuClick: () => void, onHelpClick: () => void) {
        super();

        const menuBtn = new FactoryButton(
            {
                label: '',
                type: 'spriteButton',
                onClick: onMenuClick,
                texture: Texture.from('menu-btn'),
            }
        );
        menuBtn.position.set(20, 16);
        this.addChild(menuBtn);

        const helpBtn = new FactoryButton(
            {
                label: '',
                type: 'spriteButton',
                onClick: onHelpClick,
                texture: Texture.from('help-btn'),
            }
        );

        helpBtn.position.set(window.innerWidth - 20 - helpBtn.width, 16);
        this.addChild(helpBtn);
    }
}