import { Button, Flex, Input, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar: FC = () => {
  return (
    <Flex mt='3' h='50px' alignItems='center' w='100%' mx='auto'>
      <Flex flex='1' h='100%' alignItems='center'>
        <Input borderEndRadius='none' h='100%' placeholder='Search for sounds' />
      </Flex>
      <Flex h='100%' alignItems='center'>
        <Button leftIcon={<Icon as={FiSearch} w='20px' h='20px' />} h='100%' colorScheme='blue' borderStartRadius='none' fontWeight='600' fontSize='md'>
          Search sounds
        </Button>
      </Flex>
    </Flex>
  );
};
export default SearchBar;
