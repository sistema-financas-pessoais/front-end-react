import { useLoggedUser } from '../../store/hooks';

interface IsAdminWapperProps {
  children: JSX.Element;
}

export const IsAdminWapper = ({ children }: IsAdminWapperProps) => {
  const loggedUser = useLoggedUser();

  return loggedUser?.isAdmin && children;
};
