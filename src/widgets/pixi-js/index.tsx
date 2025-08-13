'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { generatePixiIcon } from '^/entities/pixi-icon';

import { generateIconComet } from './icon-comet';
import { COS_60_DEG, SIN_60_DEG } from './icon-comet/constants';
import { IconComet } from './icon-comet/types';
import { generateIconTracker } from './icon-tracker';
import { PixiJsAppSingleton } from './instance';
import { preload } from './util/preload';

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
        await preload();
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

        pixiJsApp.instance.ticker.add((time) => {
          const deltaMs = time.deltaMS;
          iconTracker.scale.set(Math.abs(Math.sin(iconTracker.rotation / 4)));
          iconTracker.rotation += (deltaMs / 1000) * 1.25 * Math.PI;
          iconTracker.children.forEach((icon) => {
            icon.rotation -= (deltaMs / 1000) * 1.25 * Math.PI;
          });
        });
        pixiJsApp.instance.stage.on('mousemove', (event) => {
          iconTracker.position.copyFrom(event.global);
        });
        pixiJsApp.instance.stage.on('pointermove', (event) => {
          iconTracker.position.copyFrom(event.global);
        });

        const cometSpriteNames = [
          'react',
          'hanmogm',
          'javascript',
          'typescript',
          'yso',
        ];
        const cometIcons = Array.from(
          { length: 20 },
          (_, i) =>
            ({
              sprite: generatePixiIcon({
                spriteName: cometSpriteNames[i % cometSpriteNames.length],
                x: 0,
                y: 0,
              }),
              scale: 0.4 + 0.2 * Math.random(),
              speed: 800 + 400 * Math.random(),
            } satisfies IconComet)
        );
        const background = await generateIconComet({
          icons: cometIcons,
        });

        background.initializeIconComet({
          canvasWidth: pixiJsApp.instance.renderer.width,
          canvasHeight: pixiJsApp.instance.renderer.height,
        });

        pixiJsApp.instance.ticker.add((time) => {
          cometIcons.forEach((icon) => {
            if (icon.sprite.y > pixiJsApp.instance.renderer.height * 1.3) {
              background.randomizeIconCometPosition({
                icon,
                isInitial: false,
                canvasWidth: pixiJsApp.instance.renderer.width,
                canvasHeight: pixiJsApp.instance.renderer.height,
              });
            }
            const moveAmount = (time.deltaMS / 1000) * icon.speed;
            const moveX = moveAmount * COS_60_DEG;
            const moveY = moveAmount * SIN_60_DEG;
            icon.sprite.x -= moveX;
            icon.sprite.y += moveY;
          });
        });

        pixiJsApp.instance.stage.addChild(background.container);
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
