import { useQuery } from 'react-query';
import { SearchQueryParams, SearchResultProps, UserEntity } from '../../@types';
import { getUsers } from '../../services/users';

export const useUsersQuery = (queryParams: SearchQueryParams) => {
  return useQuery<SearchResultProps<Partial<UserEntity>>>({
    queryKey: ['listUsers', queryParams?.page, queryParams?.perPage],
    queryFn: () => {
      return getUsers(queryParams);
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};
