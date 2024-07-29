import { ReactNode } from 'react';

import SecondaryTitle from '^/shared/secondary-title';

interface Props {
  mainSectionCustomClassName?: string;
  subsectionClassName?: string;

  title: ReactNode;
  children?: ReactNode;
}

export default function Section({
  mainSectionCustomClassName,
  subsectionClassName,
  title,
  children,
}: Props) {
  return (
    <section className={`flex flex-col gap-8 ${mainSectionCustomClassName}`}>
      <SecondaryTitle customClassName="text-2xl sm:text-3xl md:text-4xl">
        {title}
      </SecondaryTitle>
      <section className={subsectionClassName}>{children}</section>
    </section>
  );
}
