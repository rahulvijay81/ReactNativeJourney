import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { API_BASE_URL } from "../constants/constants";
import Axios from "axios";

export default function Employee() {
  const [data, setData] = useState([]);

  const employeeBUID = "1";
  const logInToken =
    "94a312750b277a1779bf3ea8b107ead3cfdc69fa13d5865e0a49d3467c08d5d1";
  const userId = "7";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post(
          `${API_BASE_URL}/employee`,
          { employeeBUID },
          {
            headers: {
              Authorization: `Bearer ${logInToken}`,
              UserId: `${userId}`,
            },
          }
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    };

    fetchData();
  }, [logInToken, userId, employeeBUID]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardArea}>
          {data?.map((data) => (
            <View key={data?.id} style={styles.card}>
              <View style={styles.cardHead}>
                <Image
                  source={
                    data?.employeeProfilePicture
                      ? { uri: data?.employeeProfilePicture }
                      : require("../assets/user.png")
                  }
                  style={styles.profile_picture}
                />

                <Text style={{ marginLeft: 10 }}>{data?.employeeName}</Text>
              </View>
              <Text style={{ paddingBottom: 5 }}>{data?.employeeId}</Text>
              <Text style={{ paddingBottom: 5 }}>{data?.designationName}</Text>
              <Text style={{ paddingBottom: 5 }}>{data?.buName}</Text>
              <Text style={{ paddingBottom: 5 }}>{data?.workEmail}</Text>
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
    paddingBottom: 10,
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
