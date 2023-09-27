import { SearchQueryParams } from '../@types';

export const creteSearchParams = (
  queryParamsInput: SearchQueryParams,
): string => {
  let queryParams: string = '';

  for (const key in queryParamsInput) {
    if (queryParamsInput[key] === 0 || queryParamsInput[key]) {
      if (!queryParams) {
        queryParams += `?${key}=${queryParamsInput[key]}`;
      } else {
        queryParams += `&${key}=${queryParamsInput[key]}`;
      }
    }
  }

  return queryParams;
};
