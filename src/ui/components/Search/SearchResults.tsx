import { SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import { ISound } from "../../../@typings/sound";
import useSoundsStore from "../../../store/soundsStore";
import EmptyResults from "./EmptyResult";
import SoundCard from "./SoundCard";

const SearchResults: FC = () => {
  const searchResults = useSoundsStore((s) => s.searchSoundsResults);
  return (
    <>
      <SimpleGrid w='100%' gap='30px' p='3' columns={1}>
        {searchResults && searchResults.results && searchResults.results.map((sound: ISound) => <SoundCard key={sound.id} sound={sound} />)}
        {searchResults && searchResults.results && searchResults.results.length === 0 && <EmptyResults />}
      </SimpleGrid>
    </>
  );
};
export default SearchResults;
