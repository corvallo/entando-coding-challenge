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

export interface ISoundStore {
  loading: boolean;
  searchSoundsResults: {
    count: number;
    previous: string | null;
    next: string | null;
    results: ISound[];
  } | null;
  searchSounds: (params?: ISearchRequestParams) => void;
}
