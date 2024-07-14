import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function UnorderedBulletList({ children }: Props) {
  return <ul className="list-disc pl-8">{children}</ul>;
}
