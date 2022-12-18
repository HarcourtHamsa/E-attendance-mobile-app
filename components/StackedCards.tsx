import { View, Image, Text } from "react-native";
import React from "react";

export default function StackedCards({ imageUrl }) {
  return (
    <View className="flex-1">
      <View className="h-32 w-4/6  mx-auto bg-zinc-500/5 mt-10 rounded-2xl"></View>
      <View className="h-32 w-5/6  mx-auto bg-zinc-500/10 -mt-28 rounded-2xl"></View>
      <View className="h-48 w-full  bg-zinc-300 my-6 rounded-2xl z-40 -mt-28 flex justify-center items-center">
        <View className="flex-1 w-2/5 h-2/5 rounded-2xl overflow-hidden">
          <Image
            source={{ uri: imageUrl }}
            className="flex-1 rounded-2xl w-3/5 mx-auto"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}
