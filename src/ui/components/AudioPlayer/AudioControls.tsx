import { Button, Icon, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { GrPause, GrPlayFill, GrStopFill } from "react-icons/gr";
import { TbRepeatOff, TbRepeat } from "react-icons/tb";
import usePlayerStore from "../../../store/playerStore";

const AudioControls: FC = () => {
  const track = usePlayerStore((s) => s.track);
  const status = usePlayerStore((s) => s.status);
  const loop = usePlayerStore((s) => s.loop);
  const play = usePlayerStore((s) => s.play);
  const stop = usePlayerStore((s) => s.stop);
  const pause = usePlayerStore((s) => s.pause);
  const toggleLoop = usePlayerStore((s) => s.toggleLoop);

  return (
    <Flex gap='10px' alignItems='center'>
      <Button
        w='40px'
        h='40px'
        display='flex'
        bg='blue.500'
        color='white'
        _hover={{ bg: "blue.300" }}
        justifyContent='center'
        alignItems='center'
        rounded='full'
        shadow='dark-lg'
        title={status === "pause" ? "Play" : "Pause"}
        cursor='pointer'
        onClick={() => {
          if (track) {
            status === "pause" || status === "stop" ? play() : pause();
          }
        }}
      >
        {status === "pause" || status === "stop" ? (
          <Icon as={GrPlayFill} sx={{ "& > path": { stroke: "white" } }} w='20px' h='20px' />
        ) : (
          <Icon as={GrPause} sx={{ "& > path": { stroke: "white" } }} w='20px' h='20px' />
        )}
      </Button>
      <Button
        w='40px'
        h='40px'
        display='flex'
        bg='blue.500'
        color='white'
        _hover={{ bg: "blue.300" }}
        justifyContent='center'
        alignItems='center'
        rounded='full'
        shadow='dark-lg'
        onClick={stop}
        cursor='pointer'
        title='Stop'
      >
        <Icon as={GrStopFill} sx={{ "& > path": { stroke: "white" } }} w='16px' h='16px' />
      </Button>
      <Button
        w='40px'
        h='40px'
        display='flex'
        bg='blue.500'
        color='white'
        _hover={{ bg: "blue.300" }}
        justifyContent='center'
        alignItems='center'
        rounded='full'
        shadow='dark-lg'
        onClick={toggleLoop}
        cursor='pointer'
        title={loop ? "Disable loop" : "Enable loop"}
      >
        {loop ? <Icon as={TbRepeatOff} w='16px' h='16px' /> : <Icon as={TbRepeat} w='16px' h='16px' />}
      </Button>
    </Flex>
  );
};
export default AudioControls;
