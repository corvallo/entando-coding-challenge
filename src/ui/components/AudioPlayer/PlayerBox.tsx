import { Flex, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import AudioPlayer from "./AudioPlayer";

const Player: FC = () => {
  return (
    <Flex
      pos='absolute'
      bottom='0'
      bg={useColorModeValue("white", "gray.800")}
      borderTopWidth='1px'
      borderTopStyle='solid'
      borderTopColor='blue.500'
      h='60px'
      w='100%'
      zIndex='100'
      justifyContent='center'
      alignItems='center'
      gap='10px'
    >
      <AudioPlayer />
    </Flex>
  );
};
export default Player;
