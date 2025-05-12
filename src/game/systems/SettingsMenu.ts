import { Container, Text } from "pixi.js";
import { Modal } from "../components/Modal";

interface ISettingsMenuConstructor {
    toggleMenu: () => void;

}

export class SettingsMenu extends Container {
    private modal: Modal;

    constructor({ }: ISettingsMenuConstructor) {
        super();

        this.modal = new Modal();

        const title = new Text({
            text: 'Settings',
            style: { fontSize: 48, fill: 0xffffff, align: 'center' },
        });



        this.modal.addContent(title);

    }
}