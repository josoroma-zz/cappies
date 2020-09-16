import React, { FC, memo } from "react";
import { StyleSheet, Text, View } from "react-native";

import { LogoProps } from "./@types";

import { theme } from "../../core/theme";

const Logo: FC<LogoProps> = ({ size }) => (
  <View>
    <View>
      <Text
        style={{ fontFamily: "Journal", fontSize: size, textAlign: "center" }}
      >
        Cappies
      </Text>
    </View>
    <View>
      <Text>Keep all you make and pay for all you take</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: theme.units(3),
  },
});

export default memo(Logo);
