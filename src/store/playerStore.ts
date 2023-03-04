import { createRef, useRef } from "react";
import { create } from "zustand";
import { IPlayerStore } from "../@typings/player";

const usePlayerStore = create<IPlayerStore>((set, get) => ({
  track: null,
  status: "stop",
  loop: false,
  play: () => {
    set({ status: "play" });
  },
  pause: () => {
    set({ status: "pause" });
  },
  stop: () => set({ status: "stop" }),
  toggleLoop: () => set((s) => ({ loop: !s.loop })),
  setTrack: (track) => {
    const currentTrack = get().track;

    set({ track });
  },
}));
export default usePlayerStore;
