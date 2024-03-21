import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contacts from "../screens/Contacts";
import Home from "../screens/Home";
import About from "../screens/About";
import 'react-native-gesture-handler';

export default function Drawer() {
  const Draw = createDrawerNavigator();

  return (
    <Draw.Navigator>
      <Draw.Screen name="Leave Apply" component={Home} />
      <Draw.Screen name="Leave List" component={Contacts} />
      <Draw.Screen name="Leave Balance" component={About} />
    </Draw.Navigator>
  );
}
