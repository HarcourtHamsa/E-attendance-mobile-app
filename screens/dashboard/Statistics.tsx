import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";
import React from "react";
import Title from "../../components/Title";
import Container from "../../components/Container";
import { FONTS, SIZES } from "../../theme";

const Item = ({ title }: { title: string }) => (
  <Pressable style={styles.item}>
    <Text style={[FONTS.h2]} numberOfLines={1} ellipsizeMode="tail">
      {title}
    </Text>
    <Text style={[FONTS.p]}>Class 2a</Text>
  </Pressable>
);

const Statistics = () => {
  return (
    <View style={{ flex: 1 }}>
      <Title label={"Statistics"} />

      <ScrollView>
        <Container>
          <Text style={[FONTS.h2, { marginBottom: 10 }]}>My Courses</Text>
          {new Array(20).fill(0).map(() => (
            <Item title={"Engineering Mathematics Statustics Us"} />
          ))}
        </Container>
      </ScrollView>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  item: {
    // height: 60,
    backgroundColor: "white",
    marginBottom: 10,
    padding: SIZES.padding,
    display: "flex",
    justifyContent: "center",
    borderRadius: SIZES.base,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
