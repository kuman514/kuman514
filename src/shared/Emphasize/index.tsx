import { ReactNode } from 'react';

interface Props {
  customClassName?: string;
  children?: ReactNode;
}

export default function Emphasize({ customClassName, children }: Props) {
  return (
    <strong
      className={`bg-emphasize-underline from-transparent from-50% to-green-600 to-50% ${customClassName}`}
    >
      {children}
    </strong>
  );
}
