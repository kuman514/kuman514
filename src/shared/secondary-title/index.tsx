import { ReactNode } from 'react';

interface Props {
  customClassName?: string;
  children?: ReactNode;
}

export default function SecondaryTitle({ customClassName, children }: Props) {
  return (
    <h2 className={`text-bold text-4xl ${customClassName}`}>{children}</h2>
  );
}
