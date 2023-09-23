/* eslint-disable react-hooks/rules-of-hooks */
import { LoggedUser } from '../../@types/LoggedUser';
import { useLocalStorageToken } from '../../hooks/token';
import { changeLoggedUser } from '../reducers';
import { useAppDispatch, useAppSelector } from './index';
import jwt_decode from 'jwt-decode';

export const useLoggedUser = () => {
  let loggedUser = null;

  loggedUser = useAppSelector((state) => state.loggedUser.value);
  if (loggedUser) return loggedUser;

  loggedUser = jwt_decode(useLocalStorageToken() || '') as LoggedUser | '';
  if (loggedUser) {
    const dispatch = useAppDispatch();
    dispatch(changeLoggedUser(loggedUser));

    return useAppSelector((state) => state.loggedUser.value);
  }

  return loggedUser;
};
