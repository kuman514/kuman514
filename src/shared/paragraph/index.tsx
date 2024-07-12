import { ReactNode } from 'react';

interface Props {
  customClassName?: string;
  children?: ReactNode;
}

export default function Paragraph({ customClassName, children }: Props) {
  return (
    <p className={`text-base font-normal indent-4 mb-4 ${customClassName}`}>
      {children}
    </p>
  );
}
