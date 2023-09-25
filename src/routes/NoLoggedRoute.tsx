import { Navigate } from 'react-router-dom';
import { useLoggedUser } from '../store/hooks';

interface NoLoggedRouteProps {
  children: JSX.Element;
}

export const NoLoggedRoute = ({ children }: NoLoggedRouteProps) => {
  const loggedUser = useLoggedUser();

  return !loggedUser ? children : <Navigate to={'/home'} />;
};
