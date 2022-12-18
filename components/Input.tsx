import React from "react";
import { InputProps } from "../types";
import { StyleSheet, Pressable, View, TextInput } from "react-native";
import { COLORS, FONTS, SIZES } from "../theme";
import { Feather } from "@expo/vector-icons";

const Input = ({ label, placeholder, onChangeText, type }: InputProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  function toggle(): void {
    setIsOpen(!isOpen);
  }

  return (
    <View className="h-14 px-6 bg-gray-50 rounded-full border-2 border-gray-300 focus:border-zinc-400">
      {type === "password" ? (
        <View className="flex-1 justify-between flex-row align-middle relative">
          <TextInput
            placeholder={placeholder}
            style={FONTS.p}
            onChangeText={onChangeText}
            className="flex-1 px-2"
            secureTextEntry={isOpen}
          />
          <Pressable
            className="flex justify-center items-center pr-4"
            onPress={toggle}
          >
            <Feather
              name={isOpen ? "eye-off" : "eye"}
              size={18}
              color="#1f2937"
            />
          </Pressable>
        </View>
      ) : (
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          className="flex-1 px-2"
          style={FONTS.p}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: "#EBECEE",
    ...FONTS.p,
    borderRadius: SIZES.largeTitle,
    paddingHorizontal: SIZES.padding,
    width: "100%",
    fontWeight: "normal",
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
  },
});
