import { Flex, Image, useColorMode, useColorModeValue, IconButton, Icon } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";
import { FC, useMemo } from "react";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = useMemo(() => {
    return colorMode === "dark" ? <Icon as={CiLight} w='25px' h='25px' /> : <Icon as={CiDark} w='25px' h='25px' />;
  }, [colorMode]);
  const title = useMemo(() => (colorMode === "dark" ? "Switch to light theme" : "Switch to dark theme"), [colorMode]);
  return (
    <Flex
      as='header'
      h='60px'
      p='2'
      borderBottomStyle='solid'
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue("blue.200", "blue.700")}
      alignItems='center'
      boxShadow='md'
    >
      <Flex w='150px' alignItems='center'>
        {colorMode === "light" ? (
          <Image src='./logo.svg' alt='Logo' title='Logo' w='100%' h='40px' />
        ) : (
          <Image src='./logo_white.svg' alt='Logo' title='Logo' w='100%' h='40px' />
        )}
      </Flex>
      <Flex flex='1' />
      <Flex justifyContent='end' alignItems='center'>
        <IconButton variant='unstyled' aria-label={title} title={title} icon={icon} onClick={toggleColorMode} />
      </Flex>
    </Flex>
  );
};
export default Header;
