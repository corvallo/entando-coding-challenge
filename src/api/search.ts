import { DEFAULT_PAGE_SIZE } from "./../constants/search_fields";
import { ISearchRequestParams } from "../@typings/search";
import { ISearchResult } from "../@typings/sound";
import { DEFAULT_SEARCH_FIELDS } from "../constants/search_fields";

const search = async (params?: ISearchRequestParams) => {
  try {
    const searchParams = {
      fields: [...DEFAULT_SEARCH_FIELDS, ...(params?.fields || [])],
      page_size: params?.page_size || DEFAULT_PAGE_SIZE,
      ...((params?.query && { query: params?.query }) || {}),
      ...((params?.page && { page: params?.page }) || {}),
    };
    const searchData = await fetch(`${import.meta.env.VITE_FREESOUND_API_SEARCH_ENDPOINT}?${new URLSearchParams(searchParams as unknown as string)}`, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_FREESOUND_API_KEY}`,
      },
    });
    if (searchData.status === 200) {
      const searchResults: ISearchResult = await searchData.json();
      return searchResults;
    } else {
      throw new Error();
    }
  } catch (e) {
    throw new Error();
  }
};
export default search;
