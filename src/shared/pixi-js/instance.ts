import { Application, Assets, Renderer } from 'pixi.js';

import HanmogmPng from './assets/hanmogm.png';
import HoshinoPng from './assets/hoshino.png';
import JavaScriptPng from './assets/javascript.png';
import KoishiPng from './assets/koishi.png';
import ReactPng from './assets/react.png';
import TypeScriptPng from './assets/typescript.png';

export class PixiJsAppSingleton {
  static #pixiJsApp: Application<Renderer> | null;

  static async #preload() {
    const assets = [
      {
        alias: 'koishi',
        src: KoishiPng.src,
      },
      {
        alias: 'hoshino',
        src: HoshinoPng.src,
      },
      {
        alias: 'react',
        src: ReactPng.src,
      },
      {
        alias: 'javascript',
        src: JavaScriptPng.src,
      },
      {
        alias: 'typescript',
        src: TypeScriptPng.src,
      },
      {
        alias: 'hanmogm',
        src: HanmogmPng.src,
      },
    ];

    await Assets.load(assets);
  }

  static async getPixiJsApp() {
    if (!PixiJsAppSingleton.#pixiJsApp) {
      console.log('Initiating PixiJS app');
      PixiJsAppSingleton.#pixiJsApp = new Application();
      await this.#preload();
    }
    return PixiJsAppSingleton.#pixiJsApp;
  }

  static destroyPixiJsApp() {
    if (!PixiJsAppSingleton.#pixiJsApp) {
      return;
    }
    PixiJsAppSingleton.#pixiJsApp.destroy();
  }
}
