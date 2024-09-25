import { ReactNode } from 'react';

import MostRecentlyEdited from '^/shared/most-recently-edited';
import { MOST_RECENTLY_EDITED_DATE } from '^/shared/most-recently-edited/date';
import PageTemplate from '^/shared/page-template';

interface Props {
  children?: ReactNode;
}

export default function ProjectPageTemplate({ children }: Props) {
  return (
    <PageTemplate customClassName="w-full flex flex-col items-center">
      <div className="bg-red-500 w-full h-80"></div>
      <div className="flex flex-col px-8 pb-24 gap-16 sm:px-24 max-w-6xl">
        <MostRecentlyEdited editedDate={MOST_RECENTLY_EDITED_DATE} />
        {children}
      </div>
    </PageTemplate>
  );
}
