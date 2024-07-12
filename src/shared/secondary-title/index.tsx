import { SecondaryTitleProps } from './types';

export default function SecondaryTitle({
  customClassName,
  children,
}: SecondaryTitleProps) {
  return (
    <h2 className={`text-bold text-4xl ${customClassName}`}>{children}</h2>
  );
}
