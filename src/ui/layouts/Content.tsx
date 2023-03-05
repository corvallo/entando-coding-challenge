import { Flex, Spinner } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import useSoundsStore from "../../store/soundsStore";
import SearchBar from "../components/Search/SearchBar";
import SearchResults from "../components/Search/SearchResults";

const Content: FC = () => {
  const searchSounds = useSoundsStore((s) => s.searchSounds);
  useEffect(() => {
    searchSounds();
  }, []);
  return (
    <Flex as='main' pos='relative' zIndex={0} gap={{ base: "10px", md: "20px" }} direction='column'>
      <SearchBar />
      <SearchResults />
    </Flex>
  );
};
export default Content;
