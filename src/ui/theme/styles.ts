import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      fontFamily: "Poppins",
      bg: mode("white", "gray.800")(props),
      height: "100%",
    },
    "#root": {
      height: "100vh",
    },
  }),
};
export default styles;
