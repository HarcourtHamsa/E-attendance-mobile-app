import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Container from "../../components/Container";
import { COLORS, FONTS, SIZES } from "../../theme";
import Button from "../../components/Button";

const image = {
  uri: require("../../assets/images/wavy-bg.png"),
};

const Account = ({ navigation }) => {
  return (
    <ImageBackground
      // source={image.uri}
      resizeMode="cover"
      style={styles.wrapper}
    >
      <Container>
        <View style={styles.top}>
          <Text style={FONTS.h1}>Text Container</Text>
        </View>
      </Container>
      <View style={styles.buttonGroup}>
        <Button
          label="Log in"
          bg={"#e2e8f0"}
          color={COLORS["green-500"]}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      {/* </Container> */}
    </ImageBackground>
  );
};

export default Account;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    height: SIZES.height,
  },
  buttonGroup: {
    paddingHorizontal: "10%",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    marginHorizontal: "auto",
  },
  top: {
    backgroundColor: "red",
    position: "absolute",
    // transform: [{ translateX: -50 }, { translateY: -50 }],
    top: "50%",
    left: "50%",
    display: "none",
  },
});
