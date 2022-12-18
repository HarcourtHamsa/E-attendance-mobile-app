import React from "react";
import { MdHome } from "react-icons/md";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, FONTS } from "../theme";
import Icon from "@expo/vector-icons/build/Feather";

const TabIcon = ({ icon, label, focused }) => {
  // color={focused ? "white" : COLORS.transparentWhite}
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={25}
        color={focused ? COLORS["green-500"] : "#a1a1aa"}
      />
      <Text style={{ color: focused ? COLORS["green-500"] : "#a1a1aa" }}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // height: 60,
    paddingTop: 20,
  },
});

export default TabIcon;
