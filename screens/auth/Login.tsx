import * as React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Link from "../../components/Link";
import { FONTS, SIZES } from "../../theme";
import { InputType } from "../../types";
import { login } from "../../utils";

function Screen({ navigation }) {
  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  let [username, setUsername] = React.useState<string>("");
  let [password, setPassword] = React.useState<string>("");

  async function handleLogin() {
    try {
      setIsLoading(true);
      const response = await login({ username, password });

      if (!response?.key) {
        Alert.alert("Invalid credentials");
        return;
      }
      navigation.navigate("Dashboard");
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleUsernameChange(value) {
    setUsername(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }
  return (
    <Container>
      <Text style={FONTS.h1} className="mb-8">Sign in</Text>

      <View style={styles.formContainer}>
        <View className="mb-2">
          <Input
            label="Registration number"
            placeholder="Your email address"
            onChangeText={(text) => handleUsernameChange(text)}
            type={InputType.email}
          />
        </View>
        <View className="mb-10">
          <Input
            label="Password"
            placeholder="Your password"
            onChangeText={(text) => handlePasswordChange(text)}
            type={InputType.password}
          />
        </View>

        <Button
          label={isLoading ? "Loading..." : "Sign in"}
          onPress={handleLogin}
          bg="#d4d4d8"
          color="black"
        />
        <View style={styles.text}>
          <Text style={FONTS.p}>Don't have an account? </Text>
          <Link title="Sign up" />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: SIZES.margin,
  },
  text: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "center",
    ...FONTS.p,
    textAlign: "center",
    // marginTop: 20,
  },
});

export default Screen;
