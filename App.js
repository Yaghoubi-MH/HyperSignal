import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomePage from "./Components/Pages/HomePage"
import Search from "./Components/Pages/Search"
import Login from "./Components/Login/Pages/Login"


const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState()

  const fetchUser = async () => {
    const value = await AsyncStorage.getItem('@user')
    if (value !== null) {
      setUser(true)
    }
    else {
      setUser(false)
    }

    console.log("value", user)
    console.log("values", value)

  }
  fetchUser()
  if (user == undefined) {
    // We haven't finished checking for the token yet
    return (
      <NavigationContainer>
            <Stack.Screen name="Search" component={Search} />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{ headerShown: false }} >
        {user ? (
          <>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Login" component={Login} />
          </>

        ) : (

          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomePage" component={HomePage} />
          </>
        )
        }
      </Stack.Navigator>
      {/* <Stack.Navigator
        initialRouteName={user ? ("Login": "HomePage")   } screenOptions={{ headerShown: false }} >
      

    </Stack.Navigator> */}
    </NavigationContainer >
  )
}

export default App