import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { BsSoundwave } from "react-icons/bs";

export interface AudioProgressProps {
  progress: number;
  duration: number;
}

const AudioProgress: FC<AudioProgressProps> = ({ progress, duration }) => {
  const totalMs = duration * 1000;
  const result = new Date(totalMs).toISOString().slice(14, 19);

  return (
    <>
      <Text fontSize={"sm"}>00:00</Text>
      <Slider value={progress} min={0} max={Math.floor(duration)} colorScheme='blue'>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color='blue.500' as={BsSoundwave} />
        </SliderThumb>
      </Slider>
      <Text fontSize={"sm"}>{duration === 0 ? "00:00" : `${result}`}</Text>
    </>
  );
};
export default AudioProgress;
