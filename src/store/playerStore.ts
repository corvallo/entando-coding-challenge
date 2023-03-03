import { create } from "zustand";
import { IPlayerStore } from "../@typings/player";

const usePlayerStore = create<IPlayerStore>((set, get) => ({
  track: null,
  playing: false,
  status: "stop",
  setTrack: (track) => set({ track, playing: true }),
  play: () => set({ playing: true, status: "play" }),
  pause: () => set({ playing: false, status: "pause" }),
  stop: () => set({ playing: false, status: "stop" }),
}));
export default usePlayerStore;
