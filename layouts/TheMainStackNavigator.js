import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TheSignUpPage from "../pages/TheSignUpPage";
import TheLoginPage from "../pages/TheLoginPage";

const Stack = createNativeStackNavigator();

const TheMainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={TheSignUpPage} />
      <Stack.Screen name="Login" component={TheLoginPage} />
    </Stack.Navigator>
  );
};

export default TheMainStackNavigator;
