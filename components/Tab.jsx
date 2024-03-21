import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import Home from "../screens/Home";
import About from "../screens/About";
import Contacts from "../screens/Contacts";

export default function Tab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "gray",
          paddingBottom: 5,
        },
        labelStyle: {
          fontSize: 12,
          marginBottom: 2,
        },
        iconStyle: {
          marginBottom: -3,
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
          tabBarLabel: "Contacts",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="contacts" size={size} color={color} />
          ),
        }}
        name="contacts"
        component={Contacts}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
        name="About"
        component={About}
      />
    </Tab.Navigator>
  );
}
