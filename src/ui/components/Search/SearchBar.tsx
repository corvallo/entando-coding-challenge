import { Flex, chakra } from "@chakra-ui/react";
import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import useSoundsStore from "../../../store/soundsStore";
import SearchInput from "./SearchInput";
import SearchSubmit from "./SearchSubmit";

const SearchBar: FC = () => {
  const methods = useForm<{ query: string }>();
  const searchSounds = useSoundsStore((s) => s.searchSounds);
  const onSubmit = (data: { query: string }) => {
    searchSounds({ query: data.query });
  };

  return (
    <FormProvider {...methods}>
      <chakra.form w='100%' name='search' onSubmit={methods.handleSubmit(onSubmit)}>
        <Flex alignItems='center' m='0 auto' w={{ base: "90%", md: "80%", lg: "70%" }}>
          <SearchInput />
          <SearchSubmit />
        </Flex>
      </chakra.form>
    </FormProvider>
  );
};
export default SearchBar;
