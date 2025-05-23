'use client';

import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite } from 'pixi.js';
import { ReactNode, useRef } from 'react';

// extend tells @pixi/react what Pixi.js components are available
extend({
  Container,
  Graphics,
  Sprite,
});

interface Props {
  children?: ReactNode;
}

export default function PixiJsApp({ children }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);

  // We'll wrap our components with an <Application> component to provide
  // the Pixi.js Application context
  return (
    <div ref={parentRef} className="fixed x-0 y-0 w-full h-full opacity-25">
      <Application resizeTo={parentRef}>{children}</Application>
    </div>
  );
}
