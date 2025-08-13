import { Container } from 'pixi.js';

import { PixiJsAppSingleton } from '../instance';
import { randomizeIconCometPosition } from '../util/icon-comet';
import { COS_60_DEG, SIN_60_DEG } from './constants';
import { IconComet } from './types';

interface InitParams {
  icons: IconComet[];
}

export async function generateIconComet({ icons }: InitParams) {
  const container = new Container();
  const pixiJsApp = (await PixiJsAppSingleton.getPixiJsApp()).instance;

  icons.forEach((icon) => {
    randomizeIconCometPosition({
      icon,
      isInitial: true,
      width: pixiJsApp.renderer.width,
      height: pixiJsApp.renderer.height,
    });
  });
  icons.sort((left, right) => left.sprite.scale.x - right.sprite.scale.x);
  icons.forEach((icon) => {
    container.addChild(icon.sprite);
  });

  pixiJsApp.ticker.add((time) => {
    icons.forEach((icon) => {
      if (icon.sprite.y > pixiJsApp.renderer.height * 1.3) {
        randomizeIconCometPosition({
          icon,
          isInitial: false,
          width: pixiJsApp.renderer.width,
          height: pixiJsApp.renderer.height,
        });
      }
      const moveAmount = (time.deltaMS / 1000) * icon.speed;
      const moveX = moveAmount * COS_60_DEG;
      const moveY = moveAmount * SIN_60_DEG;
      icon.sprite.x -= moveX;
      icon.sprite.y += moveY;
    });
  });

  return container;
}
