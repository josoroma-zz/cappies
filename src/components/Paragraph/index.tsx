import React, { FC, memo } from "react";
import { StyleSheet, Text } from "react-native";

import { theme } from "../../core/theme";

import { ParagraphProps } from "./@types";

const Paragraph: FC<ParagraphProps> = ({ children }) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: "center",
    marginBottom: theme.units(2),
  },
});

export default memo(Paragraph);
