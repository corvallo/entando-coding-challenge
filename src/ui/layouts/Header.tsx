import { Flex, Button, Image, useColorMode } from "@chakra-ui/react";

import { FC } from "react";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as='header' h='60px' p='2' borderBottomStyle='solid' borderBottomWidth='1px' borderBottomColor='blue.200' alignItems='center' boxShadow='md'>
      <Flex w='150px' alignItems='center'>
        {colorMode === "light" && <Image src='./logo.svg' alt='Logo' title='Logo' w='100%' h='40px' />}
      </Flex>
      <Flex flex='1'></Flex>
      <Flex justifyContent='end'>
        <Button onClick={toggleColorMode}>Switch color mode</Button>
      </Flex>
    </Flex>
  );
};
export default Header;
