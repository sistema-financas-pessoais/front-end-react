import { useLocalStorage } from '../storage';

export const useLocalStorageToken = (): string | null => {
  const { get } = useLocalStorage();
  const token = get('accessToken') as string;

  return token ? token : null;
};
