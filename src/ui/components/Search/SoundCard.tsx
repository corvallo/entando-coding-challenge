import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FC, memo } from "react";
import { ISound } from "../../../@typings/sound";
import SoundPlayButton from "./SoundPlayButton";
import Tags from "./Tags";

interface SounCardProps {
  sound: ISound;
}

const SoundCard: FC<SounCardProps> = ({ sound }) => {
  return (
    <Flex
      borderRadius='6px'
      borderWidth='1px'
      borderStyle='solid'
      borderColor={useColorModeValue("blue.200", "blue.700")}
      boxShadow='md'
      gap={{ base: "5px", md: "20px" }}
      direction={{ base: "column", md: "row" }}
      w='100%'
    >
      <Box
        role='group'
        overflow='hidden'
        borderStartRadius={{ base: "none", md: "6px" }}
        borderTopRightRadius={{ base: "6px", md: "none" }}
        borderTopLeftRadius='6px'
        pos='relative'
        cursor='pointer'
      >
        <Image
          objectFit='cover'
          src={sound.images[Object.keys(sound.images)[0]]}
          alt={Object.keys(sound.images)[0]}
          w={{ base: "100%", md: "150px" }}
          h={{ base: "70px", md: "100%" }}
        />
        <SoundPlayButton sound={sound} />
        <Box bg='blackAlpha.800' pos='absolute' zIndex={100} color='white' bottom='0' right='5px'>
          <Text fontSize='sm'>{new Date(sound.duration * 1000).toISOString().slice(14, 19)}</Text>
        </Box>
      </Box>
      <Flex flex='1' direction='column' py='5' pr='5' pl={{ base: 5, md: 0 }} gap='5px' w='100%'>
        <Flex justifyContent='space-between'>
          <Text fontWeight={600} noOfLines={[1, 2, 3]} fontSize={{ base: "sm", md: "md" }}>
            {sound.name}
          </Text>
          <Text display={{ base: "none", md: "block" }} fontSize={{ base: "xs", lg: "sm" }}>
            Rating: {sound.avg_rating.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}/5.00
          </Text>
        </Flex>
        <Tags tags={sound.tags || []} />

        <Text fontSize={{ base: "xs", lg: "sm" }} noOfLines={{ base: 2, lg: 3 }}>
          {sound.description}
        </Text>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};
export default memo(SoundCard);
