import React, { FC, memo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import ScreenContainer from "../../components/ScreenContainer";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import {
  AuthNavigatorScreens,
  AuthNavigatorStackParamList,
} from "../../navigators/AuthNavigator/@types";

import { theme } from "../../core/theme";

type DashboardScreenNavigationProps = StackNavigationProp<
  AuthNavigatorStackParamList,
  AuthNavigatorScreens.Dashboard
>;

interface DashboardScreenProps {
  navigation: DashboardScreenNavigationProps;
}

const DashboardScreen: FC<DashboardScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const handleDashboardOnPress = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <ScreenContainer>
      <View style={styles.logo}>
        <Logo size={100} />
      </View>
      <View style={styles.container}>
        <View style={[styles.item, styles.itemLeft]}>
          <Button
            style={styles.button}
            contentStyle={styles.buttonContent}
            mode="contained"
            onPress={() => console.log("Navigate to Market")}
          >
            Market
          </Button>
        </View>
        <View style={[styles.item, styles.itemRight]}>
          <Button
            style={styles.button}
            contentStyle={styles.buttonContent}
            mode="contained"
            onPress={() => console.log("Navigate to Job")}
          >
            Job
          </Button>
        </View>
      </View>
      <View style={styles.container}>
        <View style={[styles.item, styles.itemLeft]}>
          <Button
            style={styles.button}
            contentStyle={styles.buttonContent}
            mode="contained"
            onPress={() => console.log("Navigate to Education")}
          >
            Education
          </Button>
        </View>
        <View style={[styles.item, styles.itemRight]}>
          <Button
            style={styles.button}
            contentStyle={styles.buttonContent}
            mode="contained"
            onPress={() => console.log("Navigate to Policy")}
          >
            Policy
          </Button>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    top: -60,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    flexBasis: 100,
    flex: 1,
  },
  itemLeft: {
    left: -theme.units(1),
  },
  itemRight: {
    right: -theme.units(1),
  },
  button: {
    borderRadius: 100,
  },
  buttonContent: {
    width: 150,
    height: 150,
  },
});

export default memo(DashboardScreen);
