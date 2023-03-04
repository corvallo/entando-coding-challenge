import { Badge, Flex, useBreakpointValue } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { ISound } from "../../../@typings/sound";

export interface TagsProps {
  tags: Pick<ISound, "tags">["tags"];
}

const Tags: FC<TagsProps> = ({ tags }) => {
  const slice = useBreakpointValue({
    base: 2,
    lg: 3,
    xl: 6,
  });
  const computedTags = useMemo(() => (slice !== 0 ? tags.slice(0, slice) : tags), [slice]);
  return (
    <Flex gap='10px' overflow={"hidden"}>
      {computedTags &&
        computedTags.map((tag, index) => (
          <Badge fontSize={{ base: "xs", lg: "sm" }} bg='blue.500' key={index} fontWeight={500} color='white' rounded='full'>
            {tag}
          </Badge>
        ))}
    </Flex>
  );
};
export default Tags;
