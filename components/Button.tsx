import React from "react";
import { StyleSheet, Text, Pressable, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../theme";
import { ButtonProps } from "../types";

const Button = ({ label, bg, color, onPress }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor: bg || COLORS["green-500"] }]}
    >
      <Text style={[styles.label, { color: color || COLORS.slate }]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: "100%",
    // backgroundColor: bg || COLORS["green-500"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.largeTitle,
    marginBottom: 10,
  },
  label: {
    ...FONTS.p,
    fontWeight: "500",
  },
});
