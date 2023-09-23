import { useLocalStorage } from '../storage';

export const useSetTokenOnLocalStorage = (token: string): void => {
  const { set } = useLocalStorage();
  set('accessToken', token);
};
