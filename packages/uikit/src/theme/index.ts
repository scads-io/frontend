import { Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from "./types";

export interface ScadsTheme {
  isDark: boolean;
  colors: Colors;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { darkColors, lightColors } from "./colors";
export { default as dark } from "./dark";
export { default as light } from "./light";
export * from "./types";
