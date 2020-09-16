import React, { FC, memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import ScreenContainer from "../../components/ScreenContainer";
import CoatOfArms from "../../components/CoatOfArms";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

import {
  AuthNavigatorScreens,
  AuthNavigatorStackParamList,
} from "../../navigators/AuthNavigator/@types";

// import { emailValidator, passwordValidator } from "../../core/utils";

import { theme } from "../../core/theme";

type LoginScreenNavigationProps = StackNavigationProp<
  AuthNavigatorStackParamList,
  AuthNavigatorScreens.Login
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProps;
}

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const handleLoginOnPress = () => {
    /** 
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    */

    navigation.navigate("Dashboard");
  };

  return (
    <ScreenContainer>
      <Logo size={100} />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        style={styles.buttonLogin}
        mode="contained"
        onPress={handleLoginOnPress}
      >
        Login
      </Button>
      <View style={styles.viewSignUp}>
        <Text style={styles.signUp}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.signUpBold}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <CoatOfArms />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: theme.units(3),
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  buttonLogin: {
    marginTop: theme.units(5),
  },
  viewSignUp: {
    flexDirection: "row",
    marginTop: theme.units(1),
  },
  signUp: {
    fontFamily: "Roboto",
    color: theme.colors.text,
    fontSize: 14,
  },
  signUpBold: {
    // fontFamily: "Roboto",
    fontWeight: "bold",
    color: theme.colors.primary,
    fontSize: 15,
    top: -1,
  },
});

export default memo(LoginScreen);
