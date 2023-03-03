import { ISound } from "./sound.d";

export type TPlayerStatus = "pause" | "stop" | "play";

export interface IPlayerStore {
  track: ISound | null;
  playing: boolean;
  status: TPlayerStatus;
  setTrack: (track: ISound) => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
}
