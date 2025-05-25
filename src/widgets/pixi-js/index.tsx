'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

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
      divRef.current?.appendChild(pixiJsApp.canvas);
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
