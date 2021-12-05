import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#00996d",
  secondary: "#606d87",

  // colors
  black: "#1e1f20",
  white: "#ffffff",
  lightGray: "#EEF2F5",
  gray: "#bec1d2",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  redius: 12,
  padding: 24,

  // fonts sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontWeight: "900",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {
    fontWeight: "900",
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontWeight: "700",
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontWeight: "700",
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontWeight: "700",
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    fontWeight: "400",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontWeight: "400",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontWeight: "400",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontWeight: "400",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
