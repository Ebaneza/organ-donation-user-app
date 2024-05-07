import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const TheHomePage = () => {
  const navigate = useNavigation();

  // Function to navigate Login page when Login Button clicked.
  const navigateToLoginPage = () => {
    navigate.navigate("Login");
    // console.log();
  };

  // Function to navigate Sign-up page when Signup Button clicked.
  const navigateToSignUpPage = () => {
    navigate.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoCcontainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2464/2464050.png",
          }}
        />
      </View>

      {/* Greeting Text */}
      <Text style={styles.greetMsg}> Welcome to EJ Donor </Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.btnLogin} onPress={navigateToLoginPage}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: "#FFF",
            fontWeight: 500,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.btnSignUp} onPress={navigateToSignUpPage}>
        <Text
          style={{
            color: "#B27946",
            fontSize: 18,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Sign-Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2D7",
    height: "100%",
    paddingLeft: 25,
    paddingRight: 25,
  },

  logoCcontainer: {
    // backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
  },

  greetMsg: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#EF7385",
  },

  logo: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  btnSignUp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#B27946",
    padding: 15,
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  btnLogin: {
    flexDirection: "row",

    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#B27946",
    borderRadius: 50,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TheHomePage;
