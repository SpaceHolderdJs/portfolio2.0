import { Preview } from "modules/pages/Preview/Preview";
import { Me } from "modules/pages/Me/Me";
import { MyJobs } from "modules/pages/MyJobs/MyJobs";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ReachMe } from "modules/pages/ReachMe/ReachMe";

export const routes = [
  { path: "/", element: <Navigate to="preview" /> },
  { path: "preview", element: <Preview /> },
  { path: "me", element: <Me /> },
  { path: "myJobs", element: <MyJobs /> },
  { path: "reachMe", element: <ReachMe /> },
];

const router = createBrowserRouter(routes);

export default router;
