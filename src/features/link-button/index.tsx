'use client';

import { ReactNode } from 'react';

import Button from '^/shared/button';

interface Props {
  href: string;
  isDisabled?: boolean;
  customClassName?: string;
  children?: ReactNode;
}

export default function LinkButton({
  href,
  isDisabled,
  customClassName,
  children,
}: Props) {
  return (
    <Button
      isDisabled={isDisabled}
      customClassName={customClassName}
      onClick={() => {
        window.open(href, '_blank');
      }}
    >
      {children}
    </Button>
  );
}
