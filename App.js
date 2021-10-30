import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./Components/Pages/HomePage"
import Search from "./Components/Pages/Search"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App