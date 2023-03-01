import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";

const Player: FC = () => {
  return (
    <Flex
      pos='absolute'
      bottom='0'
      bgGradient='linear(to-r, darkBlue.500,blue.600,blue.500,blue.600, darkBlue.500)'
      borderTopWidth='1px'
      borderTopStyle='solid'
      borderTopColor='blue.700'
      h='60px'
      w='100%'
      zIndex='100'
      justifyContent='center'
      alignItems='center'
    >
      <Button w='70px' h='70px' colorScheme='teal' rounded='full' pos='absolute' top='-30px'></Button>
    </Flex>
  );
};
export default Player;
