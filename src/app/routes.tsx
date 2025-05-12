import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './layout/AppLayout';
import DetailPage from './pages/DetailPage';

const HomePage = lazy(() => import("./pages/HomePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: ":name", element: <DetailPage /> },
    ],
  },
]);
