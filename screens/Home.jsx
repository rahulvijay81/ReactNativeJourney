import { View, Text } from "react-native";
import React from "react";
import Tab from "../components/Tab";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Tab/>
    </View>
  );
}
