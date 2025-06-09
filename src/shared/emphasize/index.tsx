import { ReactNode } from 'react';

interface Props {
  customClassName?: string;
  children?: ReactNode;
}

export default function Emphasize({ customClassName, children }: Props) {
  return (
    <strong
      className={`bg-linear-180 from-transparent from-70% to-green-500 dark:to-green-600 to-70% ${customClassName}`}
    >
      {children}
    </strong>
  );
}
