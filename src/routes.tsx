import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DefaultPage } from './pages/DefaultPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultPage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
