import { Flex, Spinner } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import useSoundsStore from "../../store/soundsStore";
import SearchBar from "../components/Search/SearchBar";
import SearchResults from "../components/Search/SearchResults";

const Content: FC = () => {
  const loading = useSoundsStore((s) => s.loading);
  const searchSounds = useSoundsStore((s) => s.searchSounds);
  useEffect(() => {
    searchSounds();
  }, []);
  return (
    <Flex as='main' pos='relative' zIndex={0} gap='40px' direction='column'>
      <SearchBar />
      <Flex
        w={{ base: "90%", md: "80%", lg: "70%" }}
        m='0 auto'
        pos='relative'
        maxH={{ base: "calc(100vh - 60px - 60px - 200px )", md: "calc(100vh - 60px - 60px - 180px )" }}
        overflow='auto'
        justifyContent='center'
        zIndex={0}
      >
        {loading ? <Spinner color='blue.500' size='lg' /> : <SearchResults />}
      </Flex>
    </Flex>
  );
};
export default Content;
