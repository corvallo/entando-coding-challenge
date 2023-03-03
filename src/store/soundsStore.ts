import { ISoundStore } from "./../@typings/sound.d";
import { create } from "zustand";
import search from "../api/search";

const useSoundsStore = create<ISoundStore>((set, get) => ({
  loading: false,
  searchSoundsResults: null,
  searchSounds: async (params) => {
    set((s) => ({ loading: true }));
    try {
      const searchResults = await search(params);
      set({ searchSoundsResults: searchResults, loading: false });
    } catch (e) {
      set({ loading: false });
      throw e;
    }
  },
}));
export default useSoundsStore;
