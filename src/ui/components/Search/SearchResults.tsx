import { Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { ISound } from "../../../@typings/sound";
import { DEFAULT_PAGE_SIZE } from "../../../constants/search_fields";
import useSoundsStore from "../../../store/soundsStore";
import EmptyResults from "./EmptyResult";
import Pagination from "./Pagination";
import SoundCard from "./SoundCard";

const SearchResults: FC = () => {
  const loading = useSoundsStore((s) => s.loading);
  const sounds = useSoundsStore((s) => s.sounds);
  const count = useSoundsStore((s) => s.count);
  const page = useSoundsStore((s) => s.page);
  const resultsRange = useMemo(() => {
    const start = page === 1 ? 1 : (page - 1) * DEFAULT_PAGE_SIZE + (page - 1);
    const end = page === 1 ? DEFAULT_PAGE_SIZE : start - (page - 1) + DEFAULT_PAGE_SIZE;
    return `${start} - ${end}`;
  }, [page, sounds]);
  return (
    <Flex w={{ base: "90%", md: "80%", lg: "70%" }} h='70vh' m='0 auto' pos='relative' justifyContent='center' zIndex={0}>
      {loading ? (
        <Spinner color='blue.500' size='lg' />
      ) : (
        <Flex direction='column' gap='10px' w='100%'>
          {sounds.length > 0 && (
            <Flex justifyContent='space-between' display={{ base: "none", md: "flex" }}>
              <Text>
                Showing {resultsRange} of {count} results
              </Text>
            </Flex>
          )}

          <SimpleGrid
            id='results'
            overflow='auto'
            w='full'
            gap='30px'
            p='3'
            columns={1}
            maxH={{ base: "calc(100vh - 9%)", md: "calc(100vh - 60px - 60px - 340px )" }}
          >
            {sounds.length > 0 ? sounds.map((sound: ISound, index) => <SoundCard key={sound.id} sound={sound} />) : <EmptyResults />}
          </SimpleGrid>
          {sounds.length > 0 && <Pagination />}
        </Flex>
      )}
    </Flex>
  );
};
export default SearchResults;
