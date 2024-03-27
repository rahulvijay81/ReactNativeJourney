import {
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";

export default function LoginButton({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        Platform.OS === "ios" && styles.buttonIos,
        Platform.OS === "android " && styles.buttonAndriod,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#007bff",
    paddingHorizontal: 10 ,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonIos: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonAndriod: {
    elevation: 4,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

const obj = {
  1: ["bu/create", "bu/edit/:buId"],
  13: [
    "leave/create",
    "edit/:leaveId",
    "calendar/holiday/add",
    "calendar/holiday/list",
    "calendar/holiday/edit/:holidayId",
    "employee/create",
    "employee/edit/:employeeId",
    "employee/view/:employeeId",
    "employee/add-leave-allocation",
    "employee/leave-allocation",
    "employee/add-compensation-leave-allocation",
    "employee/compensation-leave-list",
  ],
  123: ["Administrative/*"], // all the administrative related routes
  234: [
    "leave/leave-apply",
    "leave/applied-leaves",
    "leave/balance",
    "request/leaves",
  ],
  1234: [
    "calendar/holiday",
    "bu/list",
    "leave/list",
    "calendar/wokingdays/list",
    "settings/login-history",
    "settings/change-password",
    "stratdrive",
    "attendance",
    "employee/list",
    "employee/alumni",
    "profile",
    "forgot-password",
    "otp",
    "update-password",
  ],
  3: ["calendar/wokingdays/add", "calendar/wokingdays/edit"],
};
