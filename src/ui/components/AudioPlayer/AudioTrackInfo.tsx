import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import usePlayerStore from "../../../store/playerStore";

const AudioTrackInfo: FC = () => {
  const track = usePlayerStore((s) => s.track);

  return (
    <Flex gap='10px' alignItems='center'>
      <Text fontWeight='600' minW='200px'>
        {track?.name}
      </Text>
    </Flex>
  );
};
export default AudioTrackInfo;
