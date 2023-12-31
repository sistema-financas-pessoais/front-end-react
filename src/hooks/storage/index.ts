import { encryptStorage } from '../../config/storage';

interface UseLocalStorageReturn {
  get: <T>(key: string) => T;
  set: <T>(key: string, value: T) => void;
  remove: (key: string) => void;
}

export const useLocalStorage = (): UseLocalStorageReturn => {
  return {
    get: (key: string) => {
      const data = encryptStorage.getItem(key);
      return data;
    },
    set: <T>(key: string, value: T) =>
      encryptStorage.setItem(key, JSON.stringify(value)),
    remove: (key: string) => encryptStorage.removeItem(key),
  };
};
