import { TAN_30_DEG } from '../icon-comet/constants';
import { IconComet } from '../icon-comet/types';

export function randomizeIconCometPosition({
  icon,
  width,
  height,
  isInitial,
}: {
  icon: IconComet;
  isInitial: boolean;
  width: number;
  height: number;
}) {
  if (isInitial) {
    icon.sprite.scale.set(icon.scale);
  }

  icon.sprite.x = height * TAN_30_DEG + width * Math.random();
  icon.sprite.y = -(0.1 + 1.4 * Math.random()) * height;
}
