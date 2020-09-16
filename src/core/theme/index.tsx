/**
 * https://callstack.github.io/react-native-paper/theming.html
 */

import { configureFonts, DefaultTheme } from "react-native-paper";

import type { ThemeProps } from "./@types";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "Roboto",
    },
    medium: {
      fontFamily: "Roboto",
    },
    light: {
      fontFamily: "Roboto",
    },
    thin: {
      fontFamily: "Roboto",
    },
  },
};

export const units = 8;

export const black = "#000000";
export const white = "#ffffff";

const cappies = {
  black: black,
  gold: "#E5C601",
  gray: "#56565a",
  blue: "#3366cc",
  lightblue: "#2195de",
  error: "#f13a59",
};

export const theme: ThemeProps = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: cappies.black,
    secondary: cappies.gray,
    background: cappies.gold,
    title: cappies.blue,
    text: cappies.gray,
    surface: cappies.gold,
    error: cappies.error,
  },
  units: (number: number) => units * number,
};
