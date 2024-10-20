import HanmogmPage from '^/pages/hanmogm';
import NotFoundPage from '^/pages/not-found';
import ViteMinesweeperPage from '^/pages/vite-minesweeper';
import YSOShmupRecordsPage from '^/pages/yso-shmup-records';

interface Props {
  params: {
    projectName: string;
  };
}

export default function ProjectArticlePage({ params: { projectName } }: Props) {
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
