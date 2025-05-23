import { notFound } from 'next/navigation';

import HanmogmPage from '^/pages/hanmogm';
import ViteMinesweeperPage from '^/pages/vite-minesweeper';
import YSOArcadeRecordsPage from '^/pages/yso-arcade-records';

interface Props {
  params: Promise<{
    projectName: string;
  }>;
}

export default async function ProjectArticlePage({ params }: Props) {
  const { projectName } = await params;

  switch (projectName) {
    case 'Hanmogm':
      return <HanmogmPage />;
    case 'YSOArcadeRecords':
      return <YSOArcadeRecordsPage />;
    case 'ViteMinesweeper':
      return <ViteMinesweeperPage />;
    default:
      notFound();
  }
}
