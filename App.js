import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TheMainStackNavigator from "./layouts/TheMainStackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <TheMainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
