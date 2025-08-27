import { notFound } from 'next/navigation';

import HanmogmPage from '^/pages/hanmogm';
import ViteMinesweeperPage from '^/pages/vite-minesweeper';
import YSOArcadeRecordsPage from '^/pages/yso-arcade-records';
import { MOST_RECENTLY_EDITED_DATE } from '^/shared/most-recently-edited/date';

interface Props {
  params: Promise<{
    projectName: string;
  }>;
}

export default async function ProjectArticlePage({ params }: Props) {
  const { projectName } = await params;

  switch (projectName) {
    case 'Hanmogm':
      return <HanmogmPage editedDate={MOST_RECENTLY_EDITED_DATE} />;
    case 'YSOArcadeRecords':
      return <YSOArcadeRecordsPage editedDate={MOST_RECENTLY_EDITED_DATE} />;
    case 'ViteMinesweeper':
      return <ViteMinesweeperPage editedDate={MOST_RECENTLY_EDITED_DATE} />;
    default:
      notFound();
  }
}
