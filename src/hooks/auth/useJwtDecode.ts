import jwt_decode from 'jwt-decode';

interface UseJwtDecodeReturn<T> {
  jwtDecode: (token: string | null) => T | null;
}

export const useJwtDecode = <T>(): UseJwtDecodeReturn<T> => {
  return {
    jwtDecode: (token: string | null): T | null => {
      if (!token) return null;

      let result: T | null = null;

      try {
        result = jwt_decode(token) as T | null;

        return result;
      } catch {
        return null;
      }
    },
  };
};
