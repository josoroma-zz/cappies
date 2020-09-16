import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BackButton from "../../components/BackButton";

import HomeScreen from "../../screens/HomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import DashboardScreen from "../../screens/DashboardScreen";

import { AuthNavigatorScreens, AuthNavigatorStackParamList } from "./@types";

import { theme } from "../../core/theme";

const AuthNavigatorStack = createStackNavigator<AuthNavigatorStackParamList>();

const AuthNavigator: FC = () => (
  <NavigationContainer>
    <AuthNavigatorStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0,
          shadowColor: "transparent",
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <AuthNavigatorStack.Screen
        name={AuthNavigatorScreens.Home}
        component={HomeScreen}
      />
      <AuthNavigatorStack.Screen
        name={AuthNavigatorScreens.Login}
        component={LoginScreen}
      />
      <AuthNavigatorStack.Screen
        name={AuthNavigatorScreens.Dashboard}
        component={DashboardScreen}
        options={{
          headerLeft: () => <></>,
        }}
      />
    </AuthNavigatorStack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
