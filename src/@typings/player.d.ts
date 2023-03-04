import { ISound } from "./sound.d";

export type TPlayerStatus = "pause" | "stop" | "play" | "loop";

export interface IPlayerStore {
  track: ISound | null;
  status: TPlayerStatus;
  loop: boolean;
  setTrack: (track: ISound) => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
  toggleLoop: () => void;
}
