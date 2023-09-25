/* eslint-disable react-hooks/rules-of-hooks */
import { LoggedUser } from '../../@types/LoggedUser';
import { useJwtDecode } from '../../hooks/auth/useJwtDecode';
import { changeLoggedUser } from '../reducers';
import { useAppDispatch, useAppSelector, useToken } from './index';

export const useLoggedUser = () => {
  const dispatch = useAppDispatch();
  const selectedLoggedUser = useAppSelector((state) => state.loggedUser.value);
  const { jwtDecode } = useJwtDecode<LoggedUser | ''>();

  if (selectedLoggedUser) {
    return selectedLoggedUser;
  }

  const loggedUser = jwtDecode(useToken() || '');
  if (loggedUser) {
    dispatch(changeLoggedUser(loggedUser));
  }

  return selectedLoggedUser;
};
