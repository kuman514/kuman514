import HanmogmPage from '^/pages/hanmogm';
import NotFoundPage from '^/pages/not-found';
import ViteMinesweeperPage from '^/pages/vite-minesweeper';
import YSOShmupRecordsPage from '^/pages/yso-shmup-records';

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
    case 'YSOShmupRecords':
      return <YSOShmupRecordsPage />;
    case 'ViteMinesweeper':
      return <ViteMinesweeperPage />;
    default:
      return <NotFoundPage />;
  }
}
