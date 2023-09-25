import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DefaultPage from '../pages/DefaultPage';
import Login from '../pages/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { NoLoggedRoute } from './NoLoggedRoute';
import Users from '../pages/Users';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DefaultPage />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/home',
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: '/users',
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
    ],
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
