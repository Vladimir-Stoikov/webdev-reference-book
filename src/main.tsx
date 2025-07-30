import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFoundPage from './pages/NotFoundPage.tsx';
import JavaScriptPage from './pages/JavaScriptPage.tsx';
import HomePage from './pages/HomePage.tsx';
import TypeScriptPage from './pages/TypeScriptPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
      { path: '/javascript', element: <JavaScriptPage /> },
      { path: '/typescript', element: <TypeScriptPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
