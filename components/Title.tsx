/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar, View, Pressable, StyleSheet, Text } from "react-native";
import Icon from "@expo/vector-icons/build/Ionicons";
import { COLORS, FONTS, SIZES } from "../theme";
import { ifIphoneX } from "react-native-iphone-x-helper";

export default function Title({ label }) {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <Pressable
        onPress={handleNavigation}
        style={{
          width: 30,
          height: 30,
          backgroundColor: COLORS.slate,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50
        }}
      >
        <Icon name="chevron-back-outline" size={25} />
      </Pressable>
      <Text style={styles.label}>{label}</Text>
      {/* <Text style={styles.label}>{label}</Text> */}
      <View />
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.margin,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    boderWidth: SIZES.base,
    borderColor: "red",
    height: 100,
    backgroundColor: COLORS["green-500"],
    ...ifIphoneX(
      {
        paddingTop: 50,
      },
      {
        paddingTop: 20,
      }
    ),
  },
  label: {
    ...FONTS.h2,
    // textAlign: "center",
    marginLeft: SIZES.margin,
    color: COLORS.slate,
  },
});
