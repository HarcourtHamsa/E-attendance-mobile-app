import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  "slate-900": "#0f172a",
  gray: "#64748b",
  slate: "#f8fafc",
  "green-500": "#0A2640",
  "white-alpha": "rgba(255, 255, 255, 0.2)",
  "black-alpha": "rgba(0, 0, 0, 0.4)",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 6,
  padding: 24,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Inter-Bold",
    fontSize: SIZES.largeTitle,
  },
  h1: {
    fontFamily: "Inter-Regular",
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: "Inter-Regular",
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: "Inter-Medium",
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: "Inter-Medium",
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  h5: {
    fontFamily: "Inter-Medium",
    fontSize: SIZES.h5,
    lineHeight: 22,
  },
  p: {
    fontFamily: "Inter-Regular",
    fontSize: 18,
  },
};
