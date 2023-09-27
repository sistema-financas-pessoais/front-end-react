import { api } from '../../config/api';
import { creteSearchParams } from '../../utils';
import { SearchQueryParams, SearchResultProps, UserEntity } from '../../@types';

export const getUsers = (queryParamsInput: SearchQueryParams) => {
  const queryParams = creteSearchParams(queryParamsInput);

  return api
    .get<SearchResultProps<Partial<UserEntity>>>(`users${queryParams}`)
    .then((response) => response.data);
};
