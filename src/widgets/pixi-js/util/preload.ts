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
      src: KoishiPng,
    },
    {
      alias: 'hoshino',
      src: HoshinoPng,
    },
    {
      alias: 'react',
      src: ReactPng,
    },
    {
      alias: 'javascript',
      src: JavaScriptPng,
    },
    {
      alias: 'typescript',
      src: TypeScriptPng,
    },
    {
      alias: 'hanmogm',
      src: HanmogmPng,
    },
    {
      alias: 'yso',
      src: YsoPng,
    },
  ];

  await Assets.load(assets);
}
