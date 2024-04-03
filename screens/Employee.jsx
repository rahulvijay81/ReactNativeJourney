import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";

export default function Employee() {
  const employeesData = require("../data/employees.json");

  const employeeList = employeesData.employees;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardArea}>
          {employeeList?.map((data) => (
            <View key={data?.id} style={styles.card}>
              <View style={styles.cardHead}>
                <Image
                  src={data?.profile_picture}
                  style={styles.profile_picture}
                />
                <Text style={{ marginLeft: 10 }}>{data?.name}</Text>
              </View>
              <Text>{data?.department}</Text>
              <Text>{data?.address}</Text>
              <Text>{data?.phone_number}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardArea: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    width: "100%",
    height: "auto",
  },
  cardHead: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  profile_picture: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
