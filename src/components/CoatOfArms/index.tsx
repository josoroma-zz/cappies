import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";

import { theme } from "../../core/theme";

const width = 104;
const height = 160;

const CoatOfArms = () => (
  <Image
    source={require("../../assets/logo.png")}
    width={width}
    height={height}
    style={styles.image}
  />
);

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    marginTop: theme.units(4),
  },
});

export default memo(CoatOfArms);
