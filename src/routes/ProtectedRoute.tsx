import { Navigate } from 'react-router-dom';
import { useLoggedUser } from '../store/hooks';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const loggedUser = useLoggedUser();

  return loggedUser ? children : <Navigate to={'/login'} />;
};
