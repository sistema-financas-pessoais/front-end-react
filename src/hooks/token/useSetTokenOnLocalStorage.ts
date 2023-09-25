import { useAppDispatch } from '../../store/hooks';
import { changeToken } from '../../store/reducers';
import { useLocalStorage } from '../storage';

interface UseSetTokenOnLocalStorageReturn {
  setTokenOnLocalStorage: (token: string) => void;
}

export const useSetTokenOnLocalStorage =
  (): UseSetTokenOnLocalStorageReturn => {
    const { set } = useLocalStorage();
    const dispatch = useAppDispatch();

    return {
      setTokenOnLocalStorage: (token: string) => {
        set('accessToken', token);
        dispatch(changeToken(token));
      },
    };
  };
