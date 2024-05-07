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

const TheLoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    // alert(data);
    console.log(data);
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
          style={{ marginTop: 20 }}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.loginBtn}>Login</Text>
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
    padding: 14,
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,
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
