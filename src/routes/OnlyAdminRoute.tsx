import { Navigate } from 'react-router-dom';
import { useLoggedUser } from '../store/hooks';

interface OnlyAdminRouteProps {
  children: JSX.Element;
  redirectLink?: string;
}

export const OnlyAdminRoute = ({
  children,
  redirectLink = '/home',
}: OnlyAdminRouteProps) => {
  const loggedUser = useLoggedUser();

  return loggedUser?.isAdmin ? children : <Navigate to={redirectLink} />;
};
