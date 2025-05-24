'use client';

import { usePathname } from 'next/navigation';
import { Sprite } from 'pixi.js';
import { useEffect, useRef } from 'react';

import { PixiJsAppSingleton } from './instance';

export default function PixiJsApp() {
  const parentRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName !== '/' || !parentRef.current) {
      return;
    }

    (async () => {
      if (!parentRef.current) {
        return;
      }

      const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();

      try {
        await pixiJsApp.init({
          backgroundAlpha: 0,
          resizeTo: parentRef.current,
        });

        const sprite = Sprite.from('koishi');
        sprite.anchor.set(0.5);
        sprite.x = 100 + Math.random() * 300;
        sprite.y = 100 + Math.random() * 300;
        pixiJsApp.stage.addChild(sprite);
      } catch {}

      parentRef.current.appendChild(pixiJsApp.canvas);
    })();

    return () => {
      if (pathName === '/') {
        return;
      }
      PixiJsAppSingleton.destroyPixiJsApp();
    };
  }, [pathName]);

  return (
    <div ref={parentRef} className="fixed x-0 y-0 w-full h-full opacity-50" />
  );
}
