import { Sprite } from 'pixi.js';

interface InitParams {
  spriteName: string;
  x: number;
  y: number;
}

export function generatePixiIcon({ spriteName, x, y }: InitParams) {
  const sprite = Sprite.from(spriteName);
  sprite.anchor.set(0.5);
  sprite.x = x;
  sprite.y = y;
  return sprite;
}
