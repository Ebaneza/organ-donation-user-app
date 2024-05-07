import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const TheNavBar = () => {
  return (
    <View
      style={[
        styles.logoDiv,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          borderRadius: 10,
        },
      ]}
    >
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2464/2464050.png",
        }}
        style={{ width: 50, height: 50 }}
      />
      <Text style={styles.brandName}>EJ Organ Donation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoDiv: {
    backgroundColor: "#FFF2D7",
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
  },
});

export default TheNavBar;
