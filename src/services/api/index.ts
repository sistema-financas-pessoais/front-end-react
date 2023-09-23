/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useToken } from '../../store/hooks';

interface Api {
  get: <T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D> | undefined,
  ) => Promise<R>;
  post: <T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    data?: D | undefined,
    config?: AxiosRequestConfig<D> | undefined,
  ) => Promise<R>;
  put: <T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    data?: D | undefined,
    config?: AxiosRequestConfig<D> | undefined,
  ) => Promise<R>;
  patch: <T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    data?: D | undefined,
    config?: AxiosRequestConfig<D> | undefined,
  ) => Promise<R>;
  delete: <T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D> | undefined,
  ) => Promise<R>;
}

const token = useToken();
const Authorization = token ? `Bearer ${token}` : null;
export const axiosInstace = axios.create({
  baseURL: '',
  headers: {
    Authorization,
  },
});

export const api: Api = {
  get: axiosInstace.get,
  post: axiosInstace.post,
  put: axiosInstace.put,
  patch: axiosInstace.patch,
  delete: axiosInstace.delete,
};
