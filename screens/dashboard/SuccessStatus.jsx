import { View, Text, Image } from "react-native";
import React from "react";
import SuccessSvgComponent from "../../components/SvgSuccess";
import FailureSvgComponent from "../../components/SvgFail";
import Button from "../../components/Button";

const image = {
  uri: require("../../assets/images/confirm.svg"),
};

export default function SuccessStatus({ route, navigation }) {
  const { status } = route.params;

  return (
    <View className="flex-1 flex justify-center items-center">
      {status === "okay" ? <SuccessSvgComponent /> : <FailureSvgComponent />}

      <Text className="text-center mt-10 text-xl">
        Operation {status === "okay" ? "Successful" : "Failed"}
      </Text>
      {status !== "okay" && <Text className="text-sm text-gray-500 ">Not close enough</Text>}

      <View className="w-3/5 mt-10">
        <Button
          label="Okay"
          color={"black"}
          bg="#d4d4d8"
          onPress={() => navigation.navigate("Dashboard")}
        />
      </View>
    </View>
  );
}
