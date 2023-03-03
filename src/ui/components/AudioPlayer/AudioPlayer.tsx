import { FC, useEffect, useRef } from "react";

import usePlayerStore from "../../../store/playerStore";

const AudioPlayer: FC = () => {
  const track = usePlayerStore((s) => s.track);
  const status = usePlayerStore((s) => s.status);
  const audioRef = useRef<HTMLAudioElement>();
  const stop = usePlayerStore((s) => s.stop);

  useEffect(() => {
    if (!audioRef.current && track) {
      audioRef.current = new Audio(track?.previews[Object.keys(track.previews)[0]]);
      audioRef.current.play();
      audioRef.current.onended = () => stop();
    } else if (audioRef.current && track && status === "play") {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = new Audio(track?.previews[Object.keys(track.previews)[0]]);
      audioRef.current.play();
      audioRef.current.onended = () => stop();
    }
  }, [track, status]);

  useEffect(() => {
    if (audioRef.current) {
      switch (status) {
        case "play":
          audioRef.current.play();
          return;
        case "pause":
          audioRef.current.pause();
          return;
        case "stop":
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          return;
      }
    }
  }, [status, audioRef]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [audioRef]);

  return (
    <div>
      &nbsp;&nbsp;
      <button onClick={stop}>STOP</button>
    </div>
  );
};
export default AudioPlayer;
