export type SearchResultProps<E, Filter = string> = {
  items: E[];
  total: number;
  currentPage: number;
  perPage: number;
  sort: string | null;
  sortDir: string | null;
  filter: Filter | null;
  lastPage: number;
};
