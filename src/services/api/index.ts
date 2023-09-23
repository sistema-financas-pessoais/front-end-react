/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useToken } from '../../store/hooks';

const token = useToken();
const Authorization = token ? `Bearer ${token}` : null;
export const axiosInstace = axios.create({
  baseURL: '',
  headers: {
    Authorization,
  },
});

export const api = {
  get: axiosInstace.get,
  post: axiosInstace.post,
  put: axiosInstace.put,
  patch: axiosInstace.patch,
  delete: axiosInstace.delete,
};
