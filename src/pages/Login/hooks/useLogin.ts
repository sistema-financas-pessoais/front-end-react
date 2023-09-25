import { useMutation } from 'react-query';
import { CreateLoginData } from '../index';
import { api } from '../../../services/api';
import { LoggedUser } from '../../../@types/LoggedUser';
import { useSetTokenOnLocalStorage } from '../../../hooks/token';
import { useJwtDecode } from '../../../hooks/auth/useJwtDecode';
import { changeLoggedUser } from '../../../store/reducers';
import { useAppDispatch } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setTokenOnLocalStorage } = useSetTokenOnLocalStorage();
  const { jwtDecode } = useJwtDecode<LoggedUser | null>();

  const mutation = useMutation({
    mutationFn: (data: CreateLoginData) => {
      return api.post('sign-in', data).then((response) => response.data);
    },
    onSuccess: (res: { access_token: string }) => {
      const loggedUser = jwtDecode(res.access_token);
      dispatch(changeLoggedUser(loggedUser));
      navigate('/');
      setTokenOnLocalStorage(res.access_token);
    },
  });

  return {
    onLogin: (data: CreateLoginData) => mutation.mutate(data),
    isLoading: mutation.isLoading,
  };
};
