import { DefaultTheme } from "styled-components";
import { light as lightToggle } from "../components/Toggle/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  toggle: lightToggle,
};

export default lightTheme;
