import { ReactNode } from 'react';

interface Props {
  customClassName?: string;
  children?: ReactNode;
}

export default function PageTemplate({ customClassName, children }: Props) {
  return (
    <main className={`min-h-screen flex flex-col ${customClassName}`}>
      {children}
    </main>
  );
}
