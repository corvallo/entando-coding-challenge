import { ISearchRequestParams } from "../@typings/search";

const search = async (params: ISearchRequestParams) => {
  try {
    const searchData = await fetch(`${import.meta.env.VITE_FREESOUND_API_SEARCH_ENDPOINT}?${new URLSearchParams(params as string)}`, {
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
