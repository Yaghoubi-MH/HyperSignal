import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./Components/Pages/HomePage"
import Search from "./Components/Pages/Search"
import Singup from "./Components/Pages/Singup"
import Login from "./Components/Pages/Login"
import Start from "./Components/Pages/StartPage"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Singup" component={Singup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App