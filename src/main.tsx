import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFoundPage from './pages/NotFoundPage.tsx';
import JavaScriptPage from './pages/JavaScriptPage.tsx';

// const router = createBrowserRouter([
//   { path: '/', element: <App /> },
//   { path: '*', element: <NotFoundPage /> },
//   { path: '/javascript', element: <JavaScriptPage /> },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <App /> },
      { path: '*', element: <NotFoundPage /> },
      { path: '/javascript', element: <JavaScriptPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
