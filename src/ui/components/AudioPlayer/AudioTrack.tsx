import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";
import usePlayerStore from "../../../store/playerStore";
import AudioProgress from "./AudioProgress";

const AudioTrack: FC = () => {
  const track = usePlayerStore((s) => s.track);
  const status = usePlayerStore((s) => s.status);
  const stop = usePlayerStore((s) => s.stop);
  const audioRef = useRef<HTMLAudioElement>();
  const [progress, setProgress] = useState<number>(0);
  const intervalRef = useRef<number>();

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setProgress(audioRef.current!.currentTime);
    }, 1000);
  };

  useEffect(() => {
    if (track) {
      if (audioRef.current) {
        audioRef.current!.pause();
        audioRef.current!.currentTime = 0;
      }

      audioRef.current = new Audio(track?.previews[Object.keys(track.previews)[0]]);
      audioRef.current.play();
      audioRef.current.onended = () => stop();
    }
  }, [track]);
  useEffect(() => {
    if (audioRef.current) {
      switch (status) {
        case "play":
          audioRef.current.play();
          startTimer();
          return;
        case "pause":
          audioRef.current.pause();
          return;
        case "stop":
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setProgress(audioRef.current.currentTime);
          clearInterval(intervalRef.current);
          return;
      }
    }
  }, [status]);

  return (
    <>
      <Flex flex='0.3' gap='20px' alignItems='center' w={{ base: "100%" }}>
        <AudioProgress progress={progress} duration={track?.duration || 0} />
      </Flex>
    </>
  );
};
export default AudioTrack;
