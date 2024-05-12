import { DefaultTheme } from "styled-components";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
};

export default darkTheme;
