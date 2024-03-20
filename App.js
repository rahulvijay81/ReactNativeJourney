import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{ title: 'Overview' }} />
        <Stack.Screen name="About" component={About} options={{ title: 'About us'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
