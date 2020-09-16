import React, { FC, memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { theme } from "../../core/theme";

import { ScreenContainerProps } from "./@types";

const ScreenContainer: FC<ScreenContainerProps> = (props) => (
  <ImageBackground
    source={require("../../assets/background.png")}
    resizeMode="repeat"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {props.children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.background,
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    padding: theme.units(2),
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(ScreenContainer);
