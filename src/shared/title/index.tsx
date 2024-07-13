import { ReactNode } from 'react';

import { TitleProps } from './types';

export default function Title({ customClassName, children }: TitleProps) {
  return <h1 className={`text-bold ${customClassName}`}>{children}</h1>;
}
