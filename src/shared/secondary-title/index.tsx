import { SecondaryTitleProps } from './types';

export default function SecondaryTitle({
  customClassName,
  children,
}: SecondaryTitleProps) {
  return <h2 className={`text-bold ${customClassName}`}>{children}</h2>;
}
