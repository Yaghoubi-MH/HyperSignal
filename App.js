import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomePage from './Components/Home/Pages/HomePage';
import Search from './Components/Pages/Search';
import Login from './Components/Login/Pages/Login';
import Filter from './Components/Home/Pages/Filter';
import Test from './Components/Home/Pages/test';
import candel from './Components/Home/Pages/candel';
import Portfolio from './Components/Home/Pages/Portfolio';
import nemodar from './Components/Home/Pages/nemodar';
import news from './Components/Home/Pages/news';
import gauge from './Components/Home/Pages/Gauge';
import gaugef from './Components/Home/Pages/Gaugef';
import notif from './Components/Home/Pages/Notif';
import Nf from './Components/Home/Pages/Nf';
import Nno from './Components/Home/Pages/Nno';
import nfx from './Components/Home/Pages/Nfx';
import {Provider} from 'react-redux';
import store from './Components/Redux/Store';

const Stack = createNativeStackNavigator();

function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const value = await AsyncStorage.getItem('@user');
    if (value !== null) {
      setUser(true);
    } else {
      setUser(false);
    }

    console.log('value', user);
    console.log('values', value);
  };
  fetchUser();
  if (user == undefined) {
    return (
      <NavigationContainer>
        <Stack.Screen name="Search" component={Search} />
      </NavigationContainer>
    );
  }
  console.log(store.getState())
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {user ? (
            <>
              <Stack.Screen name="HomePage" component={HomePage} />
              <Stack.Screen name="Filter" component={Filter} />
              <Stack.Screen name="Test" component={Test} />
              <Stack.Screen name="Portfolio" component={Portfolio} />
              <Stack.Screen name="candel" component={candel} />
              <Stack.Screen name="nemodar" component={nemodar} />
              <Stack.Screen name="news" component={news} />
              <Stack.Screen name="gauge" component={gauge} />
              <Stack.Screen name="gaugef" component={gaugef} />
              <Stack.Screen name="notif" component={notif} />
              <Stack.Screen name="nf" component={Nf} />
              <Stack.Screen name="nno" component={Nno} />
              <Stack.Screen name="nfx" component={nfx} />
              <Stack.Screen name="Login" component={Login} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="HomePage" component={HomePage} />
              <Stack.Screen name="Filter" component={Filter} />
              <Stack.Screen name="Test" component={Test} />
              <Stack.Screen name="Portfolio" component={Portfolio} />
              <Stack.Screen name="candel" component={candel} />
              <Stack.Screen name="nemodar" component={nemodar} />
              <Stack.Screen name="news" component={news} />
              <Stack.Screen name="gauge" component={gauge} />
              <Stack.Screen name="gaugef" component={gaugef} />
              <Stack.Screen name="notif" component={notif} />
              <Stack.Screen name="nf" component={Nf} />
              <Stack.Screen name="nno" component={Nno} />
              <Stack.Screen name="nfx" component={nfx} />
              {/* <Stack.Screen name="Login" component={Login} /> */}
            </>
          )}
        </Stack.Navigator>
        {/* <Stack.Navigat
or
initialRouteName={user ? ("Login": "HomePage")   } screenOptions={{ headerShown: false }} >

</Stack.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
