import React from "react";
import Title from "../../components/Title";
import Container from "../../components/Container";
import { FONTS, SIZES } from "../../theme";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const image = {
  uri: require("../../assets/images/icons-user.png"),
};

const Settings = () => {
  return (
    <View style={{ flex: 1 }}>
      <Title label={"Settings"} />

      <View
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: SIZES.largeTitle,
          transform: [{ scale: 1.5 }],
        }}
      >
        <Image source={image.uri} />
      </View>
      <Text style={[FONTS.p, { textAlign: "center", marginTop: 20 }]}>
        Harcourt Hamsa
      </Text>
      <Text
        style={[FONTS.p, { textAlign: "center", marginTop: 2, color: "gray" }]}
      >
        20161966413
      </Text>
      <View style={{ flex: 1 }}>
        <Container>
          <Pressable
            style={{
              width: "100%",
              backgroundColor: "white",
              padding: SIZES.padding,
              borderRadius: SIZES.base,
              borderWidth: 1,
              borderColor: "#ddd",
              marginBottom: 10,
            }}
          >
            <Text style={FONTS.p}>Personal Information</Text>
          </Pressable>
          <Pressable
            style={{
              width: "100%",
              backgroundColor: "white",
              padding: SIZES.padding,
              borderRadius: SIZES.base,
              borderWidth: 1,
              borderColor: "#ddd",
              marginBottom: 10,
            }}
          >
            <Text style={[FONTS.p, { color: "tomato" }]}>Log out</Text>
          </Pressable>
        </Container>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
