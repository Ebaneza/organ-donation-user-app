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
import { useForm, Controller } from "react-hook-form";
import SelectDropdown from "react-native-select-dropdown";

const TheDonorPage = () => {
  const route = useRoute();
  const donorId = route.params.responseMsg;

  const [username, setUsername] = useState("");
  // console.log(username);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      age: "",
      desc: "",
      bloodGroup: "",
      willingOrgan: "",
    },
  });

  const onSubmit = async (data) => {
    const requiredData = { ...data, userIdFK: donorId };

    // console.log(requiredData);

    const API_URL =
      "http://192.168.1.8:8080/organ-donation-admin/donor/donor-registration.php";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(requiredData),
      });

      if (response.status == 200) {
        const jsonData = await response.json();

        const { message } = jsonData[0];

        alert(message);
        // const jsonData = await response.json();
        // console.log(jsonData);
      }
    } catch (error) {
      console.error("Error Occured: " + error);
    }
  };

  // Fetch data from Database
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

          // console.log();
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
        {/* Name */}
        <View style={[styles.mb, { marginTop: 40 }]}>
          <Text style={styles.label}>Name</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TheTextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Enter your name"
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={styles.errorMsg}>Name can not be empty.</Text>
          )}
        </View>

        {/* Age */}
        <View style={styles.mb}>
          <Text style={styles.label}>Age</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TheTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your age"
              />
            )}
            name="age"
          />
          {errors.age && (
            <Text style={styles.errorMsg}>Age can not be empty.</Text>
          )}
        </View>

        {/* Description */}
        <View style={styles.mb}>
          <Text style={styles.label}>Description</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TheTextInput
                placeholder="Enter your description"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="desc"
          />
          {errors.desc && (
            <Text style={styles.errorMsg}>Description can not be empty.</Text>
          )}
        </View>

        <View style={styles.mb}>
          <Text style={styles.label}>Blood Group</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TheTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your blood group"
              />
            )}
            name="bloodGroup"
          />
          {errors.bloodGroup && (
            <Text style={styles.errorMsg}>Blood Group can not be empty.</Text>
          )}
        </View>

        <View style={styles.mb}>
          <Text style={styles.label}>Organ willing to dontate</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TheTextInput
                placeholder="Ex: Liver, Heart, Kidney..."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="willingOrgan"
          />
          {errors.willingOrgan && (
            <Text style={styles.errorMsg}>This field can not be empty.</Text>
          )}
        </View>

        <TouchableOpacity
          style={[styles.submitButton, { marginTop: 15 }]}
          onPress={handleSubmit(onSubmit)}
        >
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

  errorMsg: {
    color: "red",
    fontWeight: "500",
  },
});

export default TheDonorPage;
