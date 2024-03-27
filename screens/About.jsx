
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View , StyleSheet } from 'react-native';

export default function About() {
  const navigation = useNavigation()

  const handleLogout = () => {
    navigation.navigate("Login");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button style={Styles.button} title="Logout" onPress={handleLogout} />
    </View>
  );
}

const Styles = StyleSheet.create({
  button : {
    width: 150 ,
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  }
})