import * as React from "react";
import { View, Text, Button } from "react-native";
import { FONTS } from "../theme";

function Screen({ navigation }) {
  return (
    <View>
      <Button title="click me!" onPress={() => navigation.navigate("Account")} />
    </View>
  );
}

export default Screen;
