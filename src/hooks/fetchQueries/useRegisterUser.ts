/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { api } from '../../services/api';
import { CreateUserData } from '../../pages/UserForm';
import { AxiosError } from 'axios';

export const useRegisterUser = (data: {
  onSuccessFn?: () => unknown;
  onErrorFn?: (err: AxiosError) => unknown;
}) => {
  const mutation = useMutation({
    mutationFn: (createUserData: CreateUserData) => {
      return api
        .post(`users`, createUserData)
        .then((response) => response.data);
    },
    onSuccess: () => {
      if (!data?.onSuccessFn) return;

      data.onSuccessFn();
    },
    onError: (err: AxiosError<any, any>) => {
      if (!data?.onErrorFn) return;

      data.onErrorFn(err);
    },
  });

  return {
    onRegisterUser: (createUserData: CreateUserData) => {
      return mutation.mutate(createUserData);
    },
    isLoading: mutation.isLoading,
  };
};
