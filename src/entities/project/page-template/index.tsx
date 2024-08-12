import { ReactNode } from 'react';

import PageTemplate from '^/shared/page-template';

interface Props {
  mostRecentlyEdited: Date;
  children?: ReactNode;
}

export default function ProjectPageTemplate({
  children,
  mostRecentlyEdited,
}: Props) {
  return (
    <PageTemplate
      mostRecentlyEdited={mostRecentlyEdited}
      customClassName="px-8 py-24 gap-16 sm:px-24"
    >
      {children}
    </PageTemplate>
  );
}
