import jwt_decode from 'jwt-decode';

export const useJwtDecode = <T>(token: string | null): T | null => {
  if (!token) return null;

  let result: T | null = null;

  try {
    result = jwt_decode(token) as T | null;

    return result;
  } catch {
    return null;
  }
};
