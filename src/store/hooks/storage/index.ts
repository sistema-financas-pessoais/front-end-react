import { encryptStorage } from '../../../config/storage';

export const useLocalStorage = () => {
  return {
    get: (key: string) => encryptStorage.getItem(key),
    set: <T>(key: string, value: T) =>
      encryptStorage.setItem(key, JSON.stringify(value)),
    remove: (key: string) => encryptStorage.removeItem(key),
  };
};
