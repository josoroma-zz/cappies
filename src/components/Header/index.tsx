import React, { FC, memo } from "react";
import { StyleSheet, Text } from "react-native";

import { theme } from "../../core/theme";

import { HeaderProps } from "./@types";

const Header: FC<HeaderProps> = ({ children }) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingVertical: theme.units(2),
  },
});

export default memo(Header);
