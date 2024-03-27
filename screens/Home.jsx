import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      endFillColor="#000"
      overScrollMode="auto"
    >
      <View style={styles.cardArea}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming Holidays</Text>
          <Text>Card 1 content about holidays goes here...</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming Special Working Days</Text>
          <Text>Card 2 content about working days goes here...</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>On Leave Today</Text>
          <Text>Card 3 content about today's leaves goes here...</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardArea : {
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
    height: 300,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
