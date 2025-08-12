'use client';

import { usePathname } from 'next/navigation';
import { Assets } from 'pixi.js';
import { useEffect, useRef } from 'react';

import HanmogmPng from '^/entities/pixi-icon/assets/hanmogm.png';
import HoshinoPng from '^/entities/pixi-icon/assets/hoshino.png';
import JavaScriptPng from '^/entities/pixi-icon/assets/javascript.png';
import KoishiPng from '^/entities/pixi-icon/assets/koishi.png';
import ReactPng from '^/entities/pixi-icon/assets/react.png';
import TypeScriptPng from '^/entities/pixi-icon/assets/typescript.png';
import YsoPng from '^/entities/pixi-icon/assets/yso.png';

import { generatePixiIcon } from '^/entities/pixi-icon';
import { generateIconComet } from './icon-comet';
import { IconComet } from './icon-comet/types';
import { generateIconTracker } from './icon-tracker';
import { PixiJsAppSingleton } from './instance';

export default function PixiJsApp() {
  const divRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName !== '/') {
      return;
    }

    (async () => {
      const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();
      if (pixiJsApp.isInit) {
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
          {
            alias: 'yso',
            src: YsoPng.src,
          },
        ];

        await Assets.load(assets);

        await pixiJsApp.instance.init({
          backgroundAlpha: 0,
          resizeTo: divRef.current!,
        });

        // This is needed for interaction
        pixiJsApp.instance.stage.eventMode = 'static';
        pixiJsApp.instance.stage.hitArea = pixiJsApp.instance.screen;

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
            x: pixiJsApp.instance.screen.width / 2,
            y: pixiJsApp.instance.screen.height / 2,
          },
        });

        const cloudSpriteNames = [
          'react',
          'hanmogm',
          'javascript',
          'typescript',
          'yso',
        ];
        const background = await generateIconComet({
          icons: Array.from(
            { length: 20 },
            (_, i) =>
              ({
                sprite: generatePixiIcon({
                  spriteName: cloudSpriteNames[i % cloudSpriteNames.length],
                  x: 0,
                  y: 0,
                }),
                scale: 0.4 + 0.2 * Math.random(),
                speed: 800 + 400 * Math.random(),
              } satisfies IconComet)
          ),
        });

        pixiJsApp.instance.stage.addChild(background);
        pixiJsApp.instance.stage.addChild(iconTracker);
      }
      divRef.current?.appendChild(pixiJsApp.instance.canvas);
    })();
  }, [pathName]);

  return (
    <div
      ref={divRef}
      id="pixiJsArea"
      className="fixed x-0 y-0 w-full h-full opacity-50"
    />
  );
}
