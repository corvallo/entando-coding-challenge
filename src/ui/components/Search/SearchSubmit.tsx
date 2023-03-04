import { Button, Flex, Input, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";

const SearchSubmit: FC = () => {
  return (
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
        type='submit'
      >
        Search sounds
      </Button>
    </Flex>
  );
};
export default SearchSubmit;
