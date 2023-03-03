export interface ISearchRequestParams {
  query?: string;
  filters?: string[];
  sort?: string;
  group_by_pack?: boolean;
  weights?: string;
}
