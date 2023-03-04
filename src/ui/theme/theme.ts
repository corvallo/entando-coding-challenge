import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "./colors";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors, styles });
export default theme;
