import { Button, Flex, Input, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

const SearchInput: FC = () => {
  const { register } = useFormContext();
  return (
    <Flex flex='1' alignItems='center' w='100%'>
      <Input
        borderTopRightRadius={"none"}
        borderBottomLeftRadius={"6px"}
        borderBottomRightRadius={"none"}
        h={{ base: "40px", md: "50px" }}
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
