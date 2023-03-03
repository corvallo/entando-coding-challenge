import { Button, Flex, Input, chakra } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ISearchRequestParams } from "../../../@typings/search";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import useSoundsStore from "../../../store/soundsStore";
import SearchInput from "./SearchInput";
import SearchSubmit from "./SearchSubmit";

const SearchBar: FC = () => {
  const methods = useForm<{ query: string }>();
  const searchSounds = useSoundsStore((s) => s.searchSounds);
  const onSubmit = (data: { query: string }) => {
    const defaults: ISearchRequestParams = {
      fields: ["id", "name", "duration", "type", "previews", "images", "description", "tags", "avg_rating"],
      query: data.query,
    };
    searchSounds(defaults);
  };

  return (
    <FormProvider {...methods}>
      <chakra.form w='100%' name='search' onSubmit={methods.handleSubmit(onSubmit)}>
        <Flex alignItems='center' direction={{ base: "column", md: "row" }} m='0 auto' w={{ base: "90%", md: "80%", lg: "70%" }}>
          <SearchInput />
          <SearchSubmit />
        </Flex>
      </chakra.form>
    </FormProvider>
  );
};
export default SearchBar;
