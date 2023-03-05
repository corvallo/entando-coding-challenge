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
        size={{ base: "sm", md: "md" }}
        onClick={() => {
          setPage(1);
          searchSounds({ ...params, page: 1 });
        }}
      >
        &lt;&lt; <Text display={{ base: "none", md: "block" }}>First Page</Text>
      </Button>
      <Button
        isDisabled={page === 1}
        title='Previous Page'
        colorScheme='blue'
        size={{ base: "sm", md: "md" }}
        onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
            searchSounds({ ...params, page: page - 1 });
          }
        }}
      >
        &lt; <Text display={{ base: "none", md: "block" }}>Prev</Text>
      </Button>
      <Text px='5' fontSize={{ base: "sm", md: "md" }}>
        <b>{page}</b> of <b>{totPages}</b>
      </Text>
      <Button
        isDisabled={page === totPages}
        title='Next Page'
        colorScheme='blue'
        size={{ base: "sm", md: "md" }}
        onClick={() => {
          if (page !== totPages) {
            setPage(page + 1);
            searchSounds({ ...params, page: page + 1 });
          }
        }}
      >
        <Text display={{ base: "none", md: "block" }}>Next</Text> &gt;
      </Button>
      <Button
        isDisabled={page === totPages}
        title='Last Page'
        colorScheme='blue'
        size={{ base: "sm", md: "md" }}
        onClick={() => {
          setPage(totPages);
          searchSounds({ ...params, page: totPages });
        }}
      >
        <Text display={{ base: "none", md: "block" }}>Last Page</Text> &gt;&gt;
      </Button>
    </HStack>
  );
};
export default Pagination;
