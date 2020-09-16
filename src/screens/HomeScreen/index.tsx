import React, { FC, memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { getStatusBarHeight } from "react-native-status-bar-height";

import {
  AuthNavigatorScreens,
  AuthNavigatorStackParamList,
} from "../../navigators/AuthNavigator/@types";

import Button from "../../components/Button";
import CoatOfArms from "../../components/CoatOfArms";
import Logo from "../../components/Logo";
import ScreenContainer from "../../components/ScreenContainer";

type HomeScreenNavigationProps = StackNavigationProp<
  AuthNavigatorStackParamList,
  AuthNavigatorScreens.Home
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProps;
}

const HomeScreen: FC<HomeScreenProps> = (props) => {
  const { navigation } = props;

  return (
    <ScreenContainer>
      <Logo size={100} />
      <View style={styles.viewForButton}>
        <Button
          icon="filter"
          mode="contained"
          onPress={() => navigation.navigate(AuthNavigatorScreens.Login)}
        >
          Voluntary Association
        </Button>
      </View>
      <View>
        <CoatOfArms />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  viewForButton: {
    marginTop: 40,
  },
});

export default memo(HomeScreen);
