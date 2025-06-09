import { ReactNode } from 'react';

interface Props {
  customClassName?: string;
  children?: ReactNode;
}

export default function Tag({ customClassName, children }: Props) {
  return (
    <span
      className={`font-mono bg-gray-300 text-red-700 text-sm px-1 py-0.5 rounded-sm ${customClassName}`}
    >
      {children}
    </span>
  );
}
