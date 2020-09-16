import React from "react";

import {
  TextInput as NativeTextInput,
  StyleProp,
  TextStyle,
} from "react-native";

type RenderProps = {
  ref: (a: NativeTextInput | null | undefined) => void;
  onChangeText?: (a: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  editable?: boolean;
  selectionColor?: string;
  onFocus?: (args: any) => void;
  onBlur?: (args: any) => void;
  underlineColorAndroid?: string;
  style: any;
  multiline?: boolean;
  numberOfLines?: number;
  value?: string;
  adjustsFontSizeToFit?: boolean;
};

export type TextInputProps = React.ComponentPropsWithRef<
  typeof NativeTextInput
> & {
  errorText?: string;
  mode?: "flat" | "outlined" | "contained";
  left?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: boolean;
  onChangeText?: Function;
  selectionColor?: string;
  underlineColor?: string;
  dense?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  onFocus?: (args: any) => void;
  onBlur?: (args: any) => void;
  render?: (props: RenderProps) => React.ReactNode;
  value?: string;
  style?: StyleProp<TextStyle>;
  theme?: ReactNativePaper.Theme;
};
