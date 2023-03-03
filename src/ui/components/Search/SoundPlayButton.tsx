import { FC, memo, useCallback, useEffect, useState } from "react";
import { Icon, Button, useColorModeValue } from "@chakra-ui/react";
import { GrPlayFill, GrPause } from "react-icons/gr";
import usePlayerStore from "../../../store/playerStore";
import { ISound } from "../../../@typings/sound";

export interface PlayButtonProps {
  sound: ISound;
}

const SoundPlayButton: FC<PlayButtonProps> = ({ sound }) => {
  const setTrack = usePlayerStore((s) => s.setTrack);
  const play = usePlayerStore((s) => s.play);
  const pause = usePlayerStore((s) => s.pause);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  usePlayerStore.subscribe((s) => {
    if (s.track && s.track.id !== sound.id) {
      setIsPlaying(false);
    }
    if (s.status === "stop") {
      setIsPlaying(false);
    }
  });

  const onClick = useCallback(() => {
    setTrack(sound);
    setIsPlaying(!isPlaying);
    !isPlaying ? play() : pause();
  }, [isPlaying]);

  return (
    <Button
      w='60px'
      h='60px'
      pos='absolute'
      zIndex={100}
      transform='translate(-50%,-50%)'
      top='50%'
      left='50%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      rounded='full'
      bg='whiteAlpha.900'
      _hover={{ bg: "white" }}
      shadow='dark-lg'
      onClick={onClick}
    >
      {!isPlaying ? (
        <Icon as={GrPlayFill} fill='blue.500' stroke='blue.500' w='20px' h='20px' />
      ) : (
        <Icon as={GrPause} fill='blue.500' stroke='blue.500' w='20px' h='20px' />
      )}
    </Button>
  );
};
export default memo(SoundPlayButton);
