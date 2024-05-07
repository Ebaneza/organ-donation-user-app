import React from "react";
import TheNavBar from "../components/TheNavBar";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import TheTextInput from "../components/TheTextInput";
import { useForm, Controller, reset } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

const TheSignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      address: "",
      contact: "",
    },
  });

  const navigation = useNavigation();

  const onSubmit = async (data) => {
    // console.log(data)

    const API_URL =
      "http://192.168.1.8:8080/organ-donation-admin/donor/insert-donor-detail.php";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      // console.log(response);

      if (response.status == 200) {
        alert("Data Inserted Successfully");
        navigation.navigate("Login");

        // Reset Inputs after successfull submission
        reset({
          username: "",
          password: "",
          email: "",
          address: "",
          contact: "",
        });
      } else {
        alert(
          "Currently we are facing some technical issues. Please try again."
        );
      }
    } catch (error) {
      console.error("Error Occured: " + error);
    }
  };

  return (
    <View style={[styles.container, styles.logoDesign]}>
      {/* Screen header part: Logo & Name */}
      <TheNavBar />

      <Text style={styles.greet}>Welcome Donor! </Text>

      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.signUpBody}>
          {/* Username */}
          <View style={styles.mb}>
            <Text style={styles.username}>
              Username<Text style={styles.required}>*</Text>
            </Text>

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TheTextInput
                  placeholder="Enter your username"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            {errors.username && (
              <Text style={styles.errorMsg}>Username can not be empty.</Text>
            )}
          </View>

          {/* Password */}
          <View style={styles.mb}>
            <Text style={[styles.username, { marginTop: 0 }]}>
              Password<Text style={styles.required}>*</Text>
            </Text>

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TheTextInput
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={styles.errorMsg}>Password can not be empty.</Text>
            )}
          </View>

          {/* Email */}
          <View style={styles.mb}>
            <Text style={[styles.username, { marginTop: 0 }]}>
              Email<Text style={styles.required}>*</Text>
            </Text>

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TheTextInput
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="Enter your email"
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.errorMsg}>Email can not be empty.</Text>
            )}
          </View>

          {/* Address */}
          <View style={styles.mb}>
            <Text style={[styles.username, { marginTop: 0 }]}>
              Address<Text style={styles.required}>*</Text>
            </Text>

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TheTextInput
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="Enter your Address"
                />
              )}
              name="address"
            />
            {errors.email && (
              <Text style={styles.errorMsg}>Email can not be empty.</Text>
            )}
          </View>

          {/* Contact */}
          <View style={styles.mb}>
            <Text style={[styles.username, { marginTop: 0 }]}>
              Contact No.<Text style={styles.required}>*</Text>
            </Text>

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TheTextInput
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="Enter your Address"
                />
              )}
              name="contact"
            />
            {errors.contact && (
              <Text style={styles.errorMsg}>
                Contact Number can not be empty.
              </Text>
            )}
          </View>

          <View style={{ marginTop: 15, marginBottom: 30 }}>
            {/* Submit Button */}
            <View style={styles.submitButton}>
              <Button
                title="Create Account"
                color="#FFF2D7"
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFBF3",
  },

  greet: {
    color: "#b27946",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },

  logoDesign: {
    paddingTop: 50,
    padding: 20,
  },

  username: {
    marginTop: 34,
    fontSize: 20,
    fontWeight: "bold",
    color: "#B99470",
  },

  required: {
    color: "#e30000",
  },

  input: {
    backgroundColor: "#B99470",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },

  submitButton: {
    backgroundColor: "#b27946",
    padding: 10,
    borderRadius: 10,
  },

  errorMsg: {
    color: "#e30000",
    marginBottom: 15,
    fontWeight: "bold",
  },

  mb: {
    marginBottom: 10,
  },
});

export default TheSignUpPage;
