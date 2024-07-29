import { ReactNode } from 'react';

import SecondaryTitle from '^/shared/secondary-title';

interface Props {
  mainSectionClassName?: string;
  subsectionClassName?: string;

  title: ReactNode;
  children?: ReactNode;
}

export default function Section({
  mainSectionClassName,
  subsectionClassName,
  title,
  children,
}: Props) {
  return (
    <section className={mainSectionClassName}>
      <SecondaryTitle customClassName="text-2xl sm:text-3xl md:text-4xl">
        {title}
      </SecondaryTitle>
      <section className={subsectionClassName}>{children}</section>
    </section>
  );
}
