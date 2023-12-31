import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DefaultPage from '../pages/DefaultPage';
import Login from '../pages/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { NoLoggedRoute } from './NoLoggedRoute';
import UsersList from '../pages/UsersList';
import Home from '../pages/Home';
import { UserForm } from '../pages/UserForm';
import { OnlyAdminRoute } from './OnlyAdminRoute';

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
            <OnlyAdminRoute>
              <UsersList />
            </OnlyAdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/users/new',
        element: (
          <ProtectedRoute>
            <OnlyAdminRoute>
              <UserForm />
            </OnlyAdminRoute>
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
