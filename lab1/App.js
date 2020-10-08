import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
      <stack.Screen name={"                           Home"}  component ={HomeScreen}></stack.Screen>
      <stack.Screen name={"Profile"} component ={ProfileScreen}></stack.Screen>
      </stack.Navigator>
      </NavigationContainer>
  );
}


