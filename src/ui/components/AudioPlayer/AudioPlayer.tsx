import { Flex, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import AudioControls from "./AudioControls";
import AudioTrack from "./AudioTrack";
import AudioTrackInfo from "./AudioTrackInfo";

const AudioPlayer: FC = () => {
  return (
    <Flex
      pos='absolute'
      bottom='0'
      bg={useColorModeValue("white", "gray.800")}
      borderTopWidth='1px'
      borderTopStyle='solid'
      borderTopColor='blue.500'
      h='150px'
      w='100%'
      zIndex='100'
      px='10'
      alignItems='center'
      justifyContent='center'
      gap={{ base: "10px", md: "30px" }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex direction='column' gap='5px'>
        <AudioTrackInfo />
        <AudioControls />
      </Flex>
      <AudioTrack />
    </Flex>
  );
};
export default AudioPlayer;
