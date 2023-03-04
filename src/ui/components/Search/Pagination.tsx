import { Button, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import useSoundsStore from "../../../store/soundsStore";

const Pagination: FC = () => {
  const totPages = useSoundsStore((s) => s.totPages);
  const page = useSoundsStore((s) => s.page);
  const setPage = useSoundsStore((s) => s.setPage);
  const searchSounds = useSoundsStore((s) => s.searchSounds);
  const params = useSoundsStore((s) => s.params);

  return (
    <HStack spacing={2} justifyContent='center' p='5'>
      <Button
        isDisabled={page === 1}
        title='First Page'
        colorScheme='blue'
        onClick={() => {
          setPage(1);
          searchSounds({ ...params, page: 1 });
        }}
      >
        &lt;&lt; First Page
      </Button>
      <Button
        isDisabled={page === 1}
        title='Previous Page'
        colorScheme='blue'
        onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
            searchSounds({ ...params, page: page - 1 });
          }
        }}
      >
        &lt; Prev
      </Button>
      <Text px='5'>
        Page <b>{page}</b> of <b>{totPages}</b>
      </Text>
      <Button
        isDisabled={page === totPages}
        title='Next Page'
        colorScheme='blue'
        onClick={() => {
          if (page !== totPages) {
            setPage(page + 1);
            searchSounds({ ...params, page: page + 1 });
          }
        }}
      >
        Next &gt;
      </Button>
      <Button
        isDisabled={page === totPages}
        title='Last Page'
        colorScheme='blue'
        onClick={() => {
          setPage(totPages);
          searchSounds({ ...params, page: totPages });
        }}
      >
        Last Page &gt;&gt;
      </Button>
    </HStack>
  );
};
export default Pagination;
