import { Texture, TilingSprite } from 'pixi.js';

import { PixiJsAppSingleton } from '../instance';

interface InitParams {
  textureName: string;
}

export async function generateBackground({ textureName }: InitParams) {
  const texture = Texture.from(textureName);

  const pixiJsApp = await PixiJsAppSingleton.getPixiJsApp();
  const tilingSprite = new TilingSprite({
    texture,
    width: pixiJsApp.screen.width,
    height: pixiJsApp.screen.height,
  });

  pixiJsApp.ticker.add((time) => {
    tilingSprite.width = pixiJsApp.renderer.width;
    tilingSprite.height = pixiJsApp.renderer.height;
    tilingSprite.tilePosition.y += 1 * time.deltaTime;
  });

  return tilingSprite;
}
