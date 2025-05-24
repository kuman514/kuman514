'use client';

import { usePathname } from 'next/navigation';
import { Application, Assets, Sprite } from 'pixi.js';
import { useEffect, useRef } from 'react';

export default function PixiJsApp() {
  const parentRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName !== '/' || !parentRef.current) {
      return;
    }

    const pixiJsApp = new Application();
    (async () => {
      if (!parentRef.current) {
        return;
      }

      await pixiJsApp.init({
        backgroundAlpha: 0,
        resizeTo: parentRef.current,
      });
      parentRef.current.appendChild(pixiJsApp.canvas);

      await Assets.load({
        alias: 'bunny-sprite',
        src: 'https://pixijs.com/assets/bunny.png',
      });
      const sprite = Sprite.from('bunny-sprite');
      sprite.anchor.set(0.5);
      sprite.x = 100;
      sprite.y = 100;
      pixiJsApp.stage.addChild(sprite);
    })();
  }, [pathName]);

  return (
    <div
      ref={parentRef}
      className="fixed x-0 y-0 w-full h-full opacity-50"
    ></div>
  );
}
