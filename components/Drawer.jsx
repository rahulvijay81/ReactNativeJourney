import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import LeaveApply from "../screens/Leave/LeaveApply";
import LeaveList from "../screens/Leave/LeaveList";
import LeaveBalance from "../screens/Leave/LeaveBalance";

export default function Drawer() {
  const Draw = createDrawerNavigator();

  return (
    <Draw.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent : true,
      }}
    >
      <Draw.Screen name="Leave Apply" component={LeaveApply} />
      <Draw.Screen name="Leave List" component={LeaveList} />
      <Draw.Screen name="Leave Balance" component={LeaveBalance} />
    </Draw.Navigator>
  );
}
