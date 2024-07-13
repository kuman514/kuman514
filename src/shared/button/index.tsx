import { ReactNode } from 'react';

interface Props {
  isDisabled?: boolean;
  customClassName?: string;
  children?: ReactNode;
  onClick: () => void;
}

export default function Button({
  isDisabled,
  customClassName,
  children,
  onClick,
}: Props) {
  return (
    <button
      disabled={isDisabled}
      className={`bg-green-600 hover:bg-green-400 text-white px-6 py-4 rounded-lg transition hover:-translate-y-1 hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] ${customClassName}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
