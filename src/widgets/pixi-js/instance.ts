import { Application, Renderer } from 'pixi.js';

export class PixiJsAppSingleton {
  static #pixiJsApp: Application<Renderer> | null;

  static async getPixiJsApp() {
    let isInit = false;
    if (!PixiJsAppSingleton.#pixiJsApp) {
      console.log('Initiating PixiJS app');
      PixiJsAppSingleton.#pixiJsApp = new Application();
      isInit = true;
    }

    return {
      instance: PixiJsAppSingleton.#pixiJsApp,
      isInit,
    };
  }

  static destroyPixiJsApp() {
    if (!PixiJsAppSingleton.#pixiJsApp) {
      return;
    }
    PixiJsAppSingleton.#pixiJsApp.destroy();
  }
}
