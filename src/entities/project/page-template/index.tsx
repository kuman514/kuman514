import { ReactNode } from 'react';

import MostRecentlyEdited from '^/shared/most-recently-edited';
import { MOST_RECENTLY_EDITED_DATE } from '^/shared/most-recently-edited/date';
import PageTemplate from '^/shared/page-template';

interface Props {
  children?: ReactNode;
}

export default function ProjectPageTemplate({ children }: Props) {
  return (
    <PageTemplate customClassName="px-8 py-24 gap-16 sm:px-24 max-w-6xl">
      <MostRecentlyEdited editedDate={MOST_RECENTLY_EDITED_DATE} />
      {children}
    </PageTemplate>
  );
}
