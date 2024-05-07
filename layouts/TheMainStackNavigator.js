import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TheSignUpPage from "../pages/TheSignUpPage";
import TheLoginPage from "../pages/TheLoginPage";
import TheHomePage from "../pages/TheHomePage";
import TheDonorPage from "../pages/TheDonorPage";

const Stack = createNativeStackNavigator();

const TheMainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="EJ Donor">
      <Stack.Screen name="EJ Donor" component={TheHomePage} />
      <Stack.Screen name="SignUp" component={TheSignUpPage} />
      <Stack.Screen name="Login" component={TheLoginPage} />
      <Stack.Screen name="Donor" component={TheDonorPage} />
    </Stack.Navigator>
  );
};

export default TheMainStackNavigator;
