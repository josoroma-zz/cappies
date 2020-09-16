import React from "react";

import {
  ImageSourcePropType,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";

type IconSourceBase = string | ImageSourcePropType;

type IconSource =
  | IconSourceBase
  | Readonly<{ source: IconSourceBase; direction: "rtl" | "ltr" | "auto" }>
  | ((props: IconProps & { color: string }) => React.ReactNode);

type IconProps = {
  size: number;
  allowFontScaling?: boolean;
};

export type ButtonProps = {
  mode?: "text" | "outlined" | "contained";
  dark?: boolean;
  compact?: boolean;
  color?: string;
  loading?: boolean;
  icon?: IconSource;
  disabled?: boolean;
  children: React.ReactNode;
  uppercase?: boolean;
  accessibilityLabel?: string;
  onPress?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  theme?: ReactNativePaper.Theme;
  testID?: string;
};
