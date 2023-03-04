import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { BsSoundwave } from "react-icons/bs";

export interface AudioProgressProps {
  progress: number;
  duration: number;
  onChange: (value: number) => void;
}

const AudioProgress: FC<AudioProgressProps> = ({ progress, duration, onChange }) => {
  const progressSec = useMemo(() => new Date((progress + 1) * 1000).toISOString().slice(14, 19), [progress]);
  const totalSec = useMemo(() => new Date(duration * 1000).toISOString().slice(14, 19), [duration]);

  return (
    <>
      <Text fontSize={"sm"}>{progress === 0 ? "00:00" : `${progressSec}`}</Text>
      <Slider focusThumbOnChange={false} value={progress} min={0} max={duration ? Math.floor(duration) : 1000} colorScheme='blue' onChange={onChange}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6} cursor='pointer'>
          <Box color='blue.500' as={BsSoundwave} />
        </SliderThumb>
      </Slider>
      <Text fontSize={"sm"}>{duration === 0 ? "00:00" : `${totalSec}`}</Text>
    </>
  );
};
export default AudioProgress;
