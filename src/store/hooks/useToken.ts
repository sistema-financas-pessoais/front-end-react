import { useLocalStorageToken } from '../../hooks/token';
import { changeToken } from '../reducers';
import { useAppDispatch, useAppSelector } from './index';

export const useToken = () => {
  const dispatch = useAppDispatch();
  const selectedToken = useAppSelector((state) => state.token.value);
  const token = useLocalStorageToken();

  if (selectedToken) return selectedToken;

  if (token) {
    dispatch(changeToken(token));
  }

  return selectedToken;
};
