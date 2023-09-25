import { useNavigate } from 'react-router-dom';
import { clearLoggedUser, clearToken } from '../../store/reducers';
import { useAppDispatch } from '../../store/hooks';
import { useLocalStorage } from '../storage';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const { remove } = useLocalStorage();
  const navigate = useNavigate();

  return {
    logoutFn: () => {
      dispatch(clearLoggedUser());
      dispatch(clearToken());

      remove('accessToken');

      navigate('/login');
    },
  };
};
