import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DefaultPage } from './pages/DefaultPage';
import { Login } from './pages/Login';
import { useCurrentTheme } from './hooks/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const Routes = () => {
  useCurrentTheme();
  return <RouterProvider router={router} />;
};

export default Routes;
