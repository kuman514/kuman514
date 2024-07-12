import { ReactNode } from 'react';

interface Props {
  customClassName?: string;
  children?: ReactNode;
}

export default function Title({ customClassName, children }: Props) {
  return (
    <h1 className={`text-bold text-6xl ${customClassName}`}>{children}</h1>
  );
}
