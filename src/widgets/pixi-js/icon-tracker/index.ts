import { Container, Sprite } from 'pixi.js';

import { PixiJsAppSingleton } from '../instance';

interface InitParams {
  initIcons: Sprite[];
  initPosition: { x: number; y: number };
}

export async function generateIconTracker({
  initIcons,
  initPosition,
}: InitParams) {
  const container = new Container();

  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

  container.addChild(...initIcons);

  container.position.copyFrom(initPosition);

  const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();
  pixiJsApp.ticker.add((time) => {
    const deltaMs = time.deltaMS;

    container.scale.set(Math.abs(Math.sin(container.rotation / 4)));
    container.rotation += (deltaMs / 1000) * 1.25 * Math.PI;
    container.children.forEach((icon) => {
      icon.rotation -= (deltaMs / 1000) * 1.25 * Math.PI;
    });
  });

  pixiJsApp.stage.on('mousemove', (event) => {
    container.position.copyFrom(event.global);
  });
  pixiJsApp.stage.on('pointermove', (event) => {
    container.position.copyFrom(event.global);
  });

  return container;
}
