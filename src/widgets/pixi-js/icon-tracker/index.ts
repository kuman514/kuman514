import { Container, Sprite } from 'pixi.js';

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

  return container;
}
