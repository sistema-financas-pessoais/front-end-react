import { useQuery } from 'react-query';
import { SearchQueryParams, SearchResultProps, UserEntity } from '../../@types';
import { getUsers } from '../../services/users';

export const useUsersQuery = (queryParams: SearchQueryParams) => {
  const { data, isLoading, isSuccess, refetch } = useQuery<
    SearchResultProps<Partial<UserEntity>>
  >({
    queryKey: ['listUsers'],
    queryFn: () => {
      return getUsers(queryParams);
    },
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isSuccess, refetch };
};
