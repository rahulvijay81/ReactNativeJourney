import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

export default function LeaveApply({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Button title="Toggle" onPress={() => navigation.toggleDrawer()} />
      </View>
    </View>
  );
}
