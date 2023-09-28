import { useMutation } from 'react-query';
import { api } from '../../services/api';

export const useDeleteUser = (data: {
  onSuccessFn?: () => unknown;
  onErrorFn?: () => unknown;
}) => {
  const mutation = useMutation({
    mutationKey: ['listUsers'],
    mutationFn: (userId: string) => {
      return api.delete(`users/${userId}`).then((response) => response.data);
    },
    onSuccess: () => {
      if (!data?.onSuccessFn) return;

      data.onSuccessFn();
    },
    onError: () => {
      if (!data?.onErrorFn) return;

      data.onErrorFn();
    },
  });

  return {
    onDeleteUser: (userId: string) => mutation.mutate(userId),
    isLoading: mutation.isLoading,
  };
};
