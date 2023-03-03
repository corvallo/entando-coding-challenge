import { ISoundStore } from "./../@typings/sound.d";
import { create } from "zustand";
import search from "../api/search";

const useSoundsStore = create<ISoundStore>((set, get) => ({
  loading: false,
  searchSoundsResults: null,
  searchSounds: async () => {
    set((s) => ({ loading: true }));
    try {
      const searchResults = await search();
      set({ searchSoundsResults: searchResults, loading: false });
    } catch (e) {
      set({ loading: false });
      throw e;
    }
  },
}));
export default useSoundsStore;
