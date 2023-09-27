import { LoggedUser } from '../../@types';
import { useJwtDecode } from '../../hooks/auth/useJwtDecode';
import { changeLoggedUser } from '../reducers';
import { useAppDispatch, useAppSelector, useToken } from './index';

export const useLoggedUser = () => {
  const dispatch = useAppDispatch();
  const selectedLoggedUser = useAppSelector((state) => state.loggedUser.value);
  const selectedToken = useToken();
  const { jwtDecode } = useJwtDecode<LoggedUser | ''>();

  if (selectedLoggedUser) {
    return selectedLoggedUser;
  }

  const loggedUser = jwtDecode(selectedToken || '');
  if (loggedUser) {
    dispatch(changeLoggedUser(loggedUser));
  }

  return selectedLoggedUser;
};
