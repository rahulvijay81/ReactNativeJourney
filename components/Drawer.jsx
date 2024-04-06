// Drawer.jsx
import React from "react";
import { createDrawerNavigator, DrawerActions } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import LeaveApply from "../screens/Leave/LeaveApply";
import LeaveList from "../screens/Leave/LeaveList";
import LeaveBalance from "../screens/Leave/LeaveBalance";
import "react-native-gesture-handler";

const Draw = createDrawerNavigator();

export default function Drawer() {
  const navigation = useNavigation();

  return (
    <Draw.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitle : "",
        headerRight: () => (
          <MaterialIcons
            style={{ paddingRight: 20 }}
            name="logout"
            size={30}
            color="#000"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        ),
      }}
    >
      <Draw.Screen name="Leave Apply" component={LeaveApply} />
      <Draw.Screen name="Leave List" component={LeaveList} />
      <Draw.Screen name="Leave Balance" component={LeaveBalance} />
    </Draw.Navigator>
  );
}
