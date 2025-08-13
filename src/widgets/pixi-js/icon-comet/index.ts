import { Container } from 'pixi.js';

import { TAN_30_DEG } from './constants';
import {
  CanvasSize,
  IconComet,
  RandomizeIconCometPositionParams,
} from './types';

interface InitParams {
  icons: IconComet[];
}

export async function generateIconComet({ icons }: InitParams) {
  const container = new Container();

  function randomizeIconCometPosition({
    icon,
    canvasWidth,
    canvasHeight,
    isInitial,
  }: RandomizeIconCometPositionParams) {
    if (isInitial) {
      icon.sprite.scale.set(icon.scale);
    }

    icon.sprite.x = canvasHeight * TAN_30_DEG + canvasWidth * Math.random();
    icon.sprite.y = -(0.1 + 1.4 * Math.random()) * canvasHeight;
  }

  function initializeIconComet({ canvasWidth, canvasHeight }: CanvasSize) {
    icons.forEach((icon) => {
      randomizeIconCometPosition({
        icon,
        isInitial: true,
        canvasWidth,
        canvasHeight,
      });
    });
    icons.sort((left, right) => left.sprite.scale.x - right.sprite.scale.x);
    icons.forEach((icon) => {
      container.addChild(icon.sprite);
    });
  }

  return { container, randomizeIconCometPosition, initializeIconComet };
}
