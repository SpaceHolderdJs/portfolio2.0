import { Preview } from 'modules/pages/Preview/Preview';
import { Me } from 'modules/pages/Me/Me';
import { MyJobs } from 'modules/pages/MyJobs/MyJobs';
import {
  createBrowserRouter,
  Navigate,
  createHashRouter,
} from 'react-router-dom';
import { ReachMe } from 'modules/pages/ReachMe/ReachMe';

export const routes = [
  { path: '/', element: <Preview /> },
  { path: 'preview', element: <Preview /> },
  { path: 'me', element: <Me /> },
  { path: 'myJobs', element: <MyJobs /> },
  { path: 'reachMe', element: <ReachMe /> },
];

const router = createHashRouter(routes);

export default router;
