import { Application, Assets, Renderer } from 'pixi.js';

import { generatePixiIcon } from '^/entities/pixi-icon';
import { generateIconCloud } from '^/widgets/pixi-js/icon-cloud';
import { generateIconTracker } from '^/widgets/pixi-js/icon-tracker';

import HanmogmPng from '^/entities/pixi-icon/assets/hanmogm.png';
import HoshinoPng from '^/entities/pixi-icon/assets/hoshino.png';
import JavaScriptPng from '^/entities/pixi-icon/assets/javascript.png';
import KoishiPng from '^/entities/pixi-icon/assets/koishi.png';
import ReactPng from '^/entities/pixi-icon/assets/react.png';
import TypeScriptPng from '^/entities/pixi-icon/assets/typescript.png';

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

      const targetElement = document.querySelector('#pixiJsArea');
      if (!targetElement || !(targetElement instanceof HTMLElement)) {
        throw new Error(
          'There should be an HTML element with "pixiJsArea" as its ID.'
        );
      }
      await PixiJsAppSingleton.#pixiJsApp.init({
        backgroundAlpha: 0,
        resizeTo: targetElement,
      });

      // This is needed for interaction
      PixiJsAppSingleton.#pixiJsApp.stage.eventMode = 'static';
      PixiJsAppSingleton.#pixiJsApp.stage.hitArea =
        PixiJsAppSingleton.#pixiJsApp.screen;

      const iconTracker = await generateIconTracker({
        initIcons: [
          generatePixiIcon({
            spriteName: 'koishi',
            x: -120,
            y: -120,
          }),
          generatePixiIcon({
            spriteName: 'hoshino',
            x: 120,
            y: -120,
          }),
          generatePixiIcon({
            spriteName: 'hoshino',
            x: -120,
            y: 120,
          }),
          generatePixiIcon({
            spriteName: 'koishi',
            x: 120,
            y: 120,
          }),
        ],
        initPosition: {
          x: PixiJsAppSingleton.#pixiJsApp.screen.width / 2,
          y: PixiJsAppSingleton.#pixiJsApp.screen.height / 2,
        },
      });

      const cloudSpriteNames = ['react', 'hanmogm', 'javascript', 'typescript'];
      const iconCloud = await generateIconCloud({
        initIcons: Array.from({ length: 40 }, (_, i) =>
          generatePixiIcon({
            spriteName: cloudSpriteNames[i % cloudSpriteNames.length],
            x: 0,
            y: 0,
          })
        ),
      });
      PixiJsAppSingleton.#pixiJsApp.stage.addChild(iconCloud);
      PixiJsAppSingleton.#pixiJsApp.stage.addChild(iconTracker);
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
