import { Sprite } from 'pixi.js';

export interface IconComet {
  sprite: Sprite;
  scale: number;
  speed: number;
}

export interface CanvasSize {
  canvasWidth: number;
  canvasHeight: number;
}

export interface RandomizeIconCometPositionParams extends CanvasSize {
  icon: IconComet;
  isInitial: boolean;
}
