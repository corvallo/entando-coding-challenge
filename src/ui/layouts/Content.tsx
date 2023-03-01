import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const Content: FC = () => {
  return (
    <Flex as='main' pos='relative' zIndex={0}>
      <Flex width='70%' m='0 auto' gap='40px' direction='column'>
        <SearchBar />
        <SearchResults />
      </Flex>
    </Flex>
  );
};
export default Content;
