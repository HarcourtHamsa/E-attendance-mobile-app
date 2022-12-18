import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";
import React from "react";
import Title from "../../../components/Title";
import Container from "../../../components/Container";
import { FONTS, SIZES } from "../../../theme";

const Item = ({ title, onPress }: { title: string }) => (
  <Pressable style={styles.item} onPress={onPress}>
    <Text style={[FONTS.h2]} numberOfLines={1} ellipsizeMode="tail">
      {title}
    </Text>
    <Text style={[FONTS.p]}>Class 2a</Text>
  </Pressable>
);

const Statistics = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Title label={"Statistics"} />

      <ScrollView>
        <Container>
          <Text style={[FONTS.h2, { marginBottom: 10 }]}>My Courses</Text>
          {new Array(20).fill(0).map((_, index) => (
            <Item
              key={index}
              title={"Engineering Mathematics Statustics Us"}
              onPress={() => navigation.navigate("Data")}
            />
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
