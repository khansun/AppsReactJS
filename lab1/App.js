import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FacultyScreen from "./src/screens/FacultyScreen";
import SemesterScreen from "./src/screens/SemesterScreen";
import CourseScreen from "./src/screens/CourseScreen";
const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
      <stack.Screen name={"                           Home"}  component ={HomeScreen}></stack.Screen>
      <stack.Screen name={"Profile"} component ={ProfileScreen}></stack.Screen>
      <stack.Screen name={"Faculty List"} component ={FacultyScreen}></stack.Screen>
      <stack.Screen name={"Semesters"} component ={SemesterScreen}></stack.Screen>
      <stack.Screen name={"Course List"} component ={CourseScreen}></stack.Screen>
      </stack.Navigator>
      </NavigationContainer>
  );
}


