import { Button, Flex, Input, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar: FC = () => {
  return (
    <Flex alignItems='center' direction={{ base: "column", md: "row" }} m='0 auto' w={{ base: "90%", md: "80%", lg: "70%" }}>
      <Flex flex='1' alignItems='center' w='100%'>
        <Input
          borderTopRightRadius={{ base: "6px", md: "none" }}
          borderBottomLeftRadius={{ base: "none", md: "6px" }}
          borderBottomRightRadius={"none"}
          h='60px'
          bg='white'
          color='black'
          placeholder='Search for sounds'
          _placeholder={{ opacity: 1, color: "gray.500" }}
        />
      </Flex>
      <Flex flex={{ base: "1", md: "0.3" }} alignItems='center' w='100%'>
        <Button
          leftIcon={<Icon as={FiSearch} w='20px' h='20px' />}
          h='60px'
          bg='blue.500'
          color='white'
          _hover={{ bg: "blue.300" }}
          borderTopRightRadius={{ base: "none", md: "6px" }}
          borderTopLeftRadius={"none"}
          borderBottomLeftRadius={{ base: "6px", md: "none" }}
          fontWeight='600'
          fontSize='md'
          size='md'
          w='100%'
        >
          Search sounds
        </Button>
      </Flex>
    </Flex>
  );
};
export default SearchBar;
