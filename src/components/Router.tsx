import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import HakkimizdaPage from '@/components/pages/HakkimizdaPage';
import HizmetlerPage from '@/components/pages/HizmetlerPage';
import ProjelerPage from '@/components/pages/ProjelerPage';
import IletisimPage from '@/components/pages/IletisimPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "hakkimizda",
        element: <HakkimizdaPage />,
        routeMetadata: {
          pageIdentifier: 'hakkimizda',
        },
      },
      {
        path: "hizmetler",
        element: <HizmetlerPage />,
        routeMetadata: {
          pageIdentifier: 'hizmetler',
        },
      },
      {
        path: "projeler",
        element: <ProjelerPage />,
        routeMetadata: {
          pageIdentifier: 'projeler',
        },
      },
      {
        path: "iletisim",
        element: <IletisimPage />,
        routeMetadata: {
          pageIdentifier: 'iletisim',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
