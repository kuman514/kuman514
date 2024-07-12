import { ParagraphProps } from './types';

export default function Paragraph({
  customClassName,
  children,
}: ParagraphProps) {
  return (
    <p className={`text-base font-normal indent-4 mb-4 ${customClassName}`}>
      {children}
    </p>
  );
}
