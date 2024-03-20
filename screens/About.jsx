import { View, Text, Button } from "react-native";
import React from "react";

export default function About({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
