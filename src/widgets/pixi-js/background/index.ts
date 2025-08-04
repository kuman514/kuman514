import { Container } from 'pixi.js';

import { PixiJsAppSingleton } from '../instance';
import { COS_60_DEG, SIN_60_DEG, TAN_30_DEG } from './constants';
import { IconComet } from './types';

interface InitParams {
  icons: IconComet[];
}

export async function generateBackground({ icons }: InitParams) {
  const container = new Container();
  const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();

  function randomize({
    icon,
    isInitial,
  }: {
    icon: IconComet;
    isInitial: boolean;
  }) {
    if (isInitial) {
      icon.sprite.scale.set(icon.scale);
    }

    icon.sprite.x =
      pixiJsApp.renderer.screen.height * TAN_30_DEG +
      pixiJsApp.renderer.screen.width * Math.random();
    icon.sprite.y =
      -(0.1 + 1.4 * Math.random()) * pixiJsApp.renderer.screen.height;
  }

  icons.forEach((icon) => {
    randomize({ icon, isInitial: true });
  });
  icons.sort((left, right) => left.sprite.scale.x - right.sprite.scale.x);
  icons.forEach((icon) => {
    container.addChild(icon.sprite);
  });

  pixiJsApp.ticker.add((time) => {
    icons.forEach((icon) => {
      if (icon.sprite.y > pixiJsApp.renderer.height * 1.3) {
        randomize({ icon, isInitial: false });
      }
      const moveAmount = 0.001 * time.deltaMS * icon.speed;
      const moveX = moveAmount * COS_60_DEG;
      const moveY = moveAmount * SIN_60_DEG;
      icon.sprite.x -= moveX;
      icon.sprite.y += moveY;
    });
  });

  return container;
}
