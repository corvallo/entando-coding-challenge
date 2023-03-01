import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      fontFamily: "Poppins",
      bg: mode("white", "gray.800")(props),
    },
  }),
};
export default styles;
