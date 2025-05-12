import { Application, Assets } from "pixi.js";

export class App {
    public static app: Application;

    static async init(): Promise<void> {
        App.app = new Application();
        (globalThis as any).__PIXI_APP__ = App.app;
        await App.app.init({
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            antialias: true,
            resizeTo: window,
            background: '#1099bb',
        });

        document.body.appendChild(App.app.canvas);
    }

    static async preload(): Promise<void> {
        await Assets.load([
            // {
            //     alias: '',
            //     src: ''
            // },
        ])
    }
}