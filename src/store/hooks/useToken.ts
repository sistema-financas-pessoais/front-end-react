/* eslint-disable react-hooks/rules-of-hooks */
import { useLocalStorageToken } from '../../hooks/token';
import { changeToken } from '../reducers';
import { useAppDispatch, useAppSelector } from './index';

export const useToken = () => {
  const dispatch = useAppDispatch();
  const selectedToken = useAppSelector((state) => state.token.value);

  if (selectedToken) return selectedToken;

  const token = useLocalStorageToken();

  if (token) {
    dispatch(changeToken(token));

    return selectedToken;
  }

  return selectedToken;
};
