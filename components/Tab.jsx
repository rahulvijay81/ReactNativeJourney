import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import React from "react";
import Home from "../screens/Home";
import About from "../screens/About";
import Drawer from "./Drawer";
import { View } from "react-native";
import Employee from "../screens/Employee";

export default function Tab() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{ flex: 1, margin: 0 }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#1919",
          tabBarInactiveTintColor: "#191919",
          tabBarStyle: {
            backgroundColor: "#f4f4f4",
            height: 60,
            borderTopColor: "#ECECEB",
            width: "100%",
            alignSelf: "center",
          },
          tabBarItemStyle: {
            height: 50,
            marginHorizontal: 3,
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Leave",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="leave-bags-at-home"
                size={size}
                color={color}
              />
            ),
          }}
          name="Leave"
          component={Drawer}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Employee",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="users" size={size} color={color} />
            ),
          }}
          name="Employee"
          component={Employee}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
          name="About"
          component={About}
        />
      </Tab.Navigator>
    </View>
  );
}
