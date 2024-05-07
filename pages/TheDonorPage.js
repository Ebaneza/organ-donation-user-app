import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const TheDonorPage = () => {
  const route = useRoute();
  console.log(route.params.responseMsg);
  return (
    <View>
      <Text
        style={{
          marginTop: 100,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Hello ID No:{" "}
        <Text style={{ fontWeight: "bold" }}>{route.params.responseMsg},</Text>
      </Text>
    </View>
  );
};

export default TheDonorPage;
