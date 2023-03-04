import { ISearchRequestParams } from "./search.d";
export interface ISound {
  id: number;
  url: string;
  name: string;
  username: string;
  tags: string[];
  description: string;
  type: string;
  previews: Record<string, string>;
  images: Record<string, string>;
  avg_rating: number;
  duration: number;
}

export interface ISearchResult {
  count: number;
  previous: string | null;
  next: string | null;
  results: ISound[];
}

export interface ISoundStore {
  loading: boolean;
  sounds: ISound[];
  count: number;
  page: number;
  prev: number;
  next: number;
  totPages: number;
  params: ISearchRequestParams;
  setPage: (p: number) => void;
  searchSounds: (params?: ISearchRequestParams) => void;
}
