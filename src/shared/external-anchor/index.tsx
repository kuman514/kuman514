import { ReactNode } from 'react';

interface Props {
  href: string;
  children?: ReactNode;
  customClassName?: string;
  customTarget?: string;
}

export default function ExternalAnchor({
  href,
  children,
  customClassName,
  customTarget,
}: Props) {
  return (
    <a
      className={`text-blue-500 hover:text-purple-500 ${customClassName}`}
      href={href}
      target={customTarget ?? '_blank'}
    >
      {children}
    </a>
  );
}
