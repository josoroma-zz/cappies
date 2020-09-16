import React, { FC, ReactNode, memo } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";

import { theme } from "../../core/theme";

import { ButtonProps } from "./@types";

const Button: FC<ButtonProps> = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === "outlined" && { backgroundColor: theme.colors.surface },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: theme.units(1),
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    paddingBottom: 6,
    paddingTop: theme.units(1),
  },
});

export default memo(Button);
