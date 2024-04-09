import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import Home from "../screens/Home";
import Employee from "../screens/Employee";
import Drawer from "./Drawer";

export default function Tab() {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#EE4B2B",
          tabBarInactiveTintColor: "#191919",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 60,
            borderTopColor: "#fff",
            width: "98%",
            marginBottom : "5%",
            alignSelf: "center",
            borderTopRightRadius : "8px",
            borderTopLeftRadius : "8px",
          },
          tabBarItemStyle: {
            height: 50,
            marginHorizontal: 5,
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "",
            headerShown: false,
            headerTitle: "",
            headerTransparent: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={Drawer}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="movie"
                size={size}
                color={color}
              />
            ),
          }}
          name="Leave"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarBadge : "3",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="bookmark" size={size} color={color} />
            ),
          }}
          name="Employee"
          component={Employee}
        />
      </Tab.Navigator>
  );
}
