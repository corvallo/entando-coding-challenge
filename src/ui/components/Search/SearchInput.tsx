import { Button, Flex, Input, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

const SearchInput: FC = () => {
  const { register } = useFormContext();
  return (
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
        {...register("query")}
      />
    </Flex>
  );
};
export default SearchInput;
