import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TheNavBar from "../components/TheNavBar";
import TheTextInput from "../components/TheTextInput";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

const TheLoginPage = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    // alert(data);
    // console.log(data);

    const API_URL =
      "http://192.168.1.8:8080/organ-donation-admin/donor/donor-login.php";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      if (response.status == 200) {
        const jsonData = await response.json();
        const responseMsg = jsonData[0].message;

        if (responseMsg == "Username is not exist!") {
          alert("Username does not exist!");
        } else if (responseMsg == "Password Mismatched!") {
          alert("Password Mismatched!");
        } else {
          alert(
            "Dear Donor! Your login process has been proceed successfully!"
          );

          // responseMsg = 1;
          // console.log(responseMsg);
          // Need to send user id using GET.
          navigation.navigate("Donor", { responseMsg });

          reset({
            username: "",
            password: "",
          });
        }
      } else {
        alert("Currently we are facing technical issue! Please try again.");
      }
    } catch (error) {
      console.error("Error from Donor login: " + error);
    }
  };

  return (
    <View style={styles.container}>
      <TheNavBar />

      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Username */}
        <View style={{ marginTop: 100 }}>
          <Text style={styles.label}>Username</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TheTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter you username"
              />
            )}
            name="username"
          />
          {errors.username && (
            <Text style={styles.errorMsg}>Username can not be empty.</Text>
          )}
        </View>

        {/* Password */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TheTextInput
                placeholder="Enter your password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.errorMsg}>Password can not be empty.</Text>
          )}
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.loginBtn, { marginTop: 20 }]}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFBF3",
    height: "100%",
    padding: 20,
  },

  loginBtn: {
    backgroundColor: "#B27946",
    padding: 18,
    borderRadius: 10,
    textAlign: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  label: {
    color: "#B27946",
    fontWeight: "bold",
    fontSize: 18,
  },

  errorMsg: {
    color: "red",
    fontWeight: "500",
  },
});

export default TheLoginPage;
