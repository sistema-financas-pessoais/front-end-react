import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DefaultPage from '../pages/DefaultPage';
import Login from '../pages/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { NoLoggedRoute } from './NoLoggedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DefaultPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <NoLoggedRoute>
        <Login />
      </NoLoggedRoute>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
