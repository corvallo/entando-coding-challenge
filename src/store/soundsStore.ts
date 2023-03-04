import { DEFAULT_PAGE_SIZE } from "./../constants/search_fields";
import { ISoundStore } from "./../@typings/sound.d";
import { create } from "zustand";
import search from "../api/search";
import getPageValue from "../utils/getPageValue";

const useSoundsStore = create<ISoundStore>((set, get) => ({
  loading: false,
  sounds: [],
  page: 0,
  count: 0,
  prev: 0,
  next: 0,
  totPages: 0,
  params: {},
  setPage: (page: number) => set({ page }),
  searchSounds: async (params = {}) => {
    set((s) => ({ loading: true, params }));
    try {
      const { results, count, next: nextPage, previous: prevPage } = await search(params);
      set({
        sounds: results,
        count,
        loading: false,
        page: params.page || 1,
        next: nextPage ? getPageValue(nextPage) : 0,
        prev: prevPage ? getPageValue(prevPage) : 0,
        totPages: Math.ceil(count / DEFAULT_PAGE_SIZE),
      });
    } catch (e) {
      set({ loading: false });
      throw e;
    }
  },
}));
export default useSoundsStore;
