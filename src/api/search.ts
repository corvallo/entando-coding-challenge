import { ISearchRequestParams } from "../@typings/search";
import { DEFAULT_SEARCH_FIELDS } from "../constants/search_fields";

const search = async (params?: ISearchRequestParams) => {
  try {
    const searchParams = { fields: [...DEFAULT_SEARCH_FIELDS, ...(params?.fields || [])], query: params?.query };
    const searchData = await fetch(`${import.meta.env.VITE_FREESOUND_API_SEARCH_ENDPOINT}?${new URLSearchParams(searchParams as unknown as string)}`, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_FREESOUND_API_KEY}`,
      },
    });
    if (searchData.status === 200) {
      const searchResults = await searchData.json();
      return searchResults;
    } else {
      console.log("ERRORE");
    }
  } catch (e) {
    console.log("ECATCH", e);
  }
};
export default search;
