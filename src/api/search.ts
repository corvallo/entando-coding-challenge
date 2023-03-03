import { ISearchRequestParams } from "../@typings/search";

const search = async (params?: ISearchRequestParams) => {
  try {
    const searchData = await fetch(
      "https://freesound.org/apiv2/search/text/?query=cannabis-cookie-monster&fields=id,name,duration,type,previews,images,description,tags,avg_rating&page_size=10",
      {
        headers: {
          Authorization: "Token b6jDvGxnW5EGB6BLorvgN5ea1RaoYOSXWzcIreTi",
        },
      }
    );
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
