import { View } from "react-native";
import { BottomNavigation, Text, Button } from "react-native-paper";
import About from "./About";
import React from "react";

export default function Home({ navigation }) {
  const HomeRoute = () => <Text>Home</Text>;

  const LeaveRoute = () => <Text>Leave</Text>;

  const EmployeeRoute = () => <Text>Employee</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "Home",
      title: "Home",
      focusedIcon: "home-circle",
    },
    { key: "Leave", title: "Leave", focusedIcon: "file-alert-outline" },
    { key: "Employee", title: "Employee", focusedIcon: "history" },
    {
      key: "Profile",
      title: "Profile",
      focusedIcon: "account",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
    Leave: LeaveRoute,
    Employee: EmployeeRoute,
    Profile: About,
  });

  return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
  );
}
