import { Flex } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex data-testid='layout' h='100%' direction='column' w='100%' gap='10px' pos='relative' zIndex='0'>
      {children}
    </Flex>
  );
};
export default MainLayout;
