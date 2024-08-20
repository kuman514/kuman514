import { ReactNode } from 'react';

import PageTemplate from '^/shared/page-template';

interface Props {
  children?: ReactNode;
}

export default function ProjectPageTemplate({ children }: Props) {
  return (
    <PageTemplate customClassName="px-8 py-24 gap-16 sm:px-24 mt-24">
      {children}
    </PageTemplate>
  );
}
