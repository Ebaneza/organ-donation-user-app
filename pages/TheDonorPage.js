import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import TheTextInput from "../components/TheTextInput";
import SelectDropdown from "react-native-select-dropdown";

const TheDonorPage = () => {
  const route = useRoute();
  const donorId = route.params.responseMsg;

  const [username, setUsername] = useState("");

  useEffect(() => {
    const getLoggedInUsername = async (id) => {
      const API_URL =
        "http://192.168.1.8:8080/organ-donation-admin/donor/get-logged-in-donor-name.php";

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            donorId: id,
          }),
        });

        if (response.status == 200) {
          const jsonData = await response.json();
          const username = jsonData[0].username;

          console.log();
          setUsername(username);
        } else {
          setUsername("Guest");
        }
      } catch (error) {
        console.error("Error: " + error);
      }
    };

    getLoggedInUsername(donorId);
  }, [donorId]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Dear {username}! Please fill your organ donation details...
      </Text>

      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View style={[styles.mb, { marginTop: 40 }]}>
          <Text style={styles.label}>Name</Text>
          <TheTextInput placeholder="Enter your name" />
        </View>

        <View style={styles.mb}>
          <Text style={styles.label}>Age</Text>
          <TheTextInput placeholder="Enter your age" />
        </View>

        <View style={styles.mb}>
          <Text style={styles.label}>Description</Text>
          <TheTextInput
            placeholder="Enter the description"
            multiline={true}
            numberOfLines={70}
          />
        </View>

        <View style={styles.mb}>
          <Text style={styles.label}>Blood Group</Text>
          <TheTextInput placeholder="Enter your blood group" />
        </View>

        <View style={styles.mb}>
          <Text style={styles.label}>Organ willing to dontate</Text>
          <TheTextInput placeholder="Ex: Liver, Heart, Kidney..." />
        </View>

        <TouchableOpacity style={[styles.submitButton, { marginTop: 15 }]}>
          <Text style={styles.buttonText}>Save Details</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FEFBF3",
    height: "100%",
  },

  label: {
    color: "#B27946",
    fontSize: 15,
    fontWeight: "bold",
  },

  mb: {
    marginBottom: 15,
  },

  submitButton: {
    backgroundColor: "#B27946",
    padding: 15,
    fontWeight: "bold",
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  heading: {
    color: "#B27946",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
});

export default TheDonorPage;
