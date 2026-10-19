import { Outlet } from 'react-router-dom';

import { navNodes } from '^/app/header/nodes';
import Header from '^/shared/header';

export default function App() {
  return (
    <>
      <Header navNodes={navNodes} />
      <Outlet />
    </>
  );
}
