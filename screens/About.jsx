import { View, Text, Button } from "react-native";
import React from "react";

export default function About({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>code : {itemId}</Text>
      <Text>{otherParam}</Text>
      <Button title="Go to Home Screen" onPress={() => navigation.goBack()} />
    </View>
  );
}
