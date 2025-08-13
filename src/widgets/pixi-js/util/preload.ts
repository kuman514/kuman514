import { Assets } from 'pixi.js';

import HanmogmPng from '^/entities/pixi-icon/assets/hanmogm.png';
import HoshinoPng from '^/entities/pixi-icon/assets/hoshino.png';
import JavaScriptPng from '^/entities/pixi-icon/assets/javascript.png';
import KoishiPng from '^/entities/pixi-icon/assets/koishi.png';
import ReactPng from '^/entities/pixi-icon/assets/react.png';
import TypeScriptPng from '^/entities/pixi-icon/assets/typescript.png';
import YsoPng from '^/entities/pixi-icon/assets/yso.png';

export async function preload() {
  const assets = [
    {
      alias: 'koishi',
      src: KoishiPng.src,
    },
    {
      alias: 'hoshino',
      src: HoshinoPng.src,
    },
    {
      alias: 'react',
      src: ReactPng.src,
    },
    {
      alias: 'javascript',
      src: JavaScriptPng.src,
    },
    {
      alias: 'typescript',
      src: TypeScriptPng.src,
    },
    {
      alias: 'hanmogm',
      src: HanmogmPng.src,
    },
    {
      alias: 'yso',
      src: YsoPng.src,
    },
  ];

  await Assets.load(assets);
}
