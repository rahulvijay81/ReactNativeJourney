import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../components/Global/LoginButton";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errors = [];

    if (!email || !password) {
      errors.push("Please enter both email and password.");
    } else {
      if (!emailRegex.test(email)) {
        errors.push("Please enter a valid email address.");
      }
  
      if (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
      }
    }
    if (errors.length > 0) {
      Alert.alert("Message", errors.join("\n"), [
        {
          text: "Try again",
          onPress: () => {
            console.log("Alert box closed");
          },
        },
      ]);
    } else {
      navigation.navigate("Tab");
    }
  };

  const handleToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.inputBox}>
        <MaterialCommunityIcons
          name={"email"}
          size={24}
          color="#aaa"
          style={styles.icon}
        />
        <TextInput
          style={styles.emailInput}
          placeholder="Email address"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputBox}>
        <MaterialCommunityIcons
          name={"lock"}
          size={24}
          color="#aaa"
          style={styles.icon}
        />
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={!passwordVisible}
        />
        <MaterialCommunityIcons
          name={passwordVisible ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={handleToggle}
        />
      </View>
      <LoginButton title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputBox: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  emailInput: {
    flex: 1,
    paddingLeft: 5,
  },
  passwordInput: {
    flex: 1,
    paddingLeft: 5,
  },
});
