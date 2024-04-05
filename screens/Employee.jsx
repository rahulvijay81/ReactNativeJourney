import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { API_BASE_URL } from "../constants/constants";
import Axios from "axios";

export default function Employee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${API_BASE_URL}/posts`, {}, {});
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardArea}>
          {data?.map((data) => (
            <View key={data?.id} style={styles.card}>
              <View style={styles.cardHead}>
                <Image
                  source={
                    require("../assets/user.png")
                  }
                  style={styles.profile_picture}
                />

                <Text style={{ marginLeft: 10 }}>{data?.title}</Text>
              </View>
              <Text style={{ paddingBottom: 5 }}>
                {data?.body}
              </Text>
              
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
