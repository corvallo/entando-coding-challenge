import { Flex } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex h='100vh' direction='column' w='100%' gap='20px' pos='relative' zIndex='0'>
      {children}
    </Flex>
  );
};
export default MainLayout;
