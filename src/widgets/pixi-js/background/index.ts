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
  tilingSprite.anchor.set(0.5);

  pixiJsApp.ticker.add((time) => {
    tilingSprite.width = pixiJsApp.renderer.width;
    tilingSprite.height = pixiJsApp.renderer.height;
    tilingSprite.tilePosition.y += 1 * time.deltaTime;

    tilingSprite.position.set(
      pixiJsApp.renderer.width / 2,
      pixiJsApp.renderer.height / 2
    );
  });

  return tilingSprite;
}
