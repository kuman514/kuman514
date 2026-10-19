import { createBrowserRouter } from 'react-router-dom';

import HanmogmPage from '^/pages/hanmogm';
import IntroPage from '^/pages/intro';
import NotFoundPage from '^/pages/not-found';
import ProjectListPage from '^/pages/projects';
import ViteMinesweeperPage from '^/pages/vite-minesweeper';
import WhoAmIPage from '^/pages/whoami';
import YSOArcadeRecordsPage from '^/pages/yso-arcade-records';
import ContactPage from '^/pages/contact';

import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <IntroPage /> },
      { path: 'whoami', element: <WhoAmIPage /> },
      { path: 'projects', element: <ProjectListPage /> },
      { path: 'projects/Hanmogm', element: <HanmogmPage /> },
      { path: 'projects/ViteMinesweeper', element: <ViteMinesweeperPage /> },
      { path: 'projects/YSOArcadeRecords', element: <YSOArcadeRecordsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
