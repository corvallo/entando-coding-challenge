import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const EmptyResults: FC = () => {
  return (
    <Flex w='100%' h='300px'>
      <Text fontWeight='600'>Your search returned no results</Text>
    </Flex>
  );
};
export default EmptyResults;
