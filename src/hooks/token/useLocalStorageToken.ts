import { useLocalStorage } from '../storage';

export const useLocalStorageToken = (): string | null => {
  const { get } = useLocalStorage();
  const token = get<string | null>('accessToken');

  return token ? token : null;
};
