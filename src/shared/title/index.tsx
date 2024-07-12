import { ReactNode } from 'react';

import { TitleProps } from './types';

export default function Title({ customClassName, children }: TitleProps) {
  return (
    <h1 className={`text-bold text-6xl ${customClassName}`}>{children}</h1>
  );
}
