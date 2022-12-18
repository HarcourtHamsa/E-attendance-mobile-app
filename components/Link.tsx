import { StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../theme";

const Link = ({ title }: { title: string }) => {
  return (
    <Pressable>
      <Text style={styles.link}>{title}</Text>
    </Pressable>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: {
    color: COLORS["green-500"],
    ...FONTS.p,
    marginBottom: 10,
    paddingBottom: 0,
  },
});
