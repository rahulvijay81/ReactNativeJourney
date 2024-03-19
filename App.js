import React from "react";
import { View, StatusBar, ActivityIndicator, Button, Alert, StyleSheet } from "react-native";
import Great from "./components/Great";

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" barStyle="dark-content"  />

      <Great name="Rahul Vijay" />
      <Great name="Fyrooz " />
      <Great name="Alkesh" />


      <ActivityIndicator size="large" color="midnightblue"/>

      <Button title="Login" onPress={() => Alert.alert("Invalid Login" , "Token expired please login again" , [
        {
          text : "cancel",
          onPress : () => console.log("Cancel Pressed"),
          style : "cancel"
        },
        {
          text : "OK",
          onPress : () => console.log("OK Pressed"),
          style : "default"
        }
      ]) }/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  }
});
