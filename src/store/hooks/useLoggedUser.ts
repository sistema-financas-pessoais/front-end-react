/* eslint-disable react-hooks/rules-of-hooks */
import { LoggedUser } from '../../@types/LoggedUser';
import { changeLoggedUser } from '../reducers';
import { useAppDispatch, useAppSelector, useToken } from './index';
import jwt_decode from 'jwt-decode';

export const useLoggedUser = () => {
  let loggedUser = null;

  loggedUser = useAppSelector((state) => state.loggedUser.value);
  if (loggedUser) return loggedUser;

  try {
    loggedUser = jwt_decode(useToken() || '') as LoggedUser | '';
    if (loggedUser) {
      const dispatch = useAppDispatch();
      dispatch(changeLoggedUser(loggedUser));

      return useAppSelector((state) => state.loggedUser.value);
    }
  } catch {
    return loggedUser;
  }
};
