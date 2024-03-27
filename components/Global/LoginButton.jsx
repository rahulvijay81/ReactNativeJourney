import {
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";

export default function LoginButton({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        Platform.OS === "ios" && styles.buttonIos,
        Platform.OS === "android " && styles.buttonAndriod,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#007bff",
    paddingHorizontal: 10 ,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonIos: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonAndriod: {
    elevation: 4,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

