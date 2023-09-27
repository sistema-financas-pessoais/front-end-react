export type SortDirection = 'asc' | 'desc';

export interface SearchQueryParams {
  page?: number;
  perPage?: number;
  sort?: string;
  sortDir?: SortDirection;
  filter?: string;
  field?: string;
  selectFields?: string;
}
