/* eslint-disable react-hooks/rules-of-hooks */
import { useLocalStorageToken } from '../../hooks/token';
import { changeToken } from '../reducers';
import { useAppDispatch, useAppSelector } from './index';

export const useToken = () => {
  let token = null;

  token = useAppSelector((state) => state.token.value);
  if (token) return token;

  token = useLocalStorageToken();
  if (token) {
    const dispatch = useAppDispatch();
    dispatch(changeToken(token));

    return token;
  }

  return token;
};
