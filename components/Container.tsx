import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { COLORS, SIZES } from "../theme";

function Container({ children }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS["slate-900"]} barStyle="light-content"/>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + SIZES.padding,
    paddingHorizontal: SIZES.margin,
  },
});

export default Container;