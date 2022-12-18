import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Link from "../../components/Link";
import { COLORS, FONTS, SIZES } from "../../theme";

function Screen() {
  return (
    <Container>
      <Text style={FONTS.largeTitle}>Sign up</Text>
      {/* <Text style={[FONTS.p, { color: COLORS.gray, marginTop: 3 }]}>
        Let's get you started
      </Text> */}

      <View style={styles.formContainer}>
        <Input label="First Name" placeholder="Hamsa" />
        <Input label="Surname" placeholder="Harcourt" />
        <Input label="Department" placeholder="EEE" />
        <Input label="Level" placeholder="300 Level" />
        <Input label="Registration number" placeholder="20161966413" />
        <Input label="Password" placeholder="123456" />
        <Button label="Continue " />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginVertical: 35,
  },
});

export default Screen;
