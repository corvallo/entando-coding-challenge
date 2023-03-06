import { Button, Flex, Text, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";

const SearchSubmit: FC = () => {
  return (
    <Flex alignItems='center'>
      <Button
        leftIcon={<Icon as={FiSearch} w='20px' h='20px' />}
        h={{ base: "40px", md: "50px" }}
        bg='blue.500'
        color='white'
        _hover={{ bg: "blue.300" }}
        borderTopRightRadius={"6px"}
        borderTopLeftRadius={"none"}
        borderBottomLeftRadius={"none"}
        fontWeight='600'
        fontSize='md'
        size='md'
        type='submit'
      >
        <Text display={{ base: "none", md: "block" }}>Search sounds</Text>
      </Button>
    </Flex>
  );
};
export default SearchSubmit;
