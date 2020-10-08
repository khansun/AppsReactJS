import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "./src/screens/HomeScreen";

var stack = createStackNavigator();
function App () {
  return(
    <NavigationContainer>
      <stack.Navigatior>
        <stack.Screen name= "Home Screen" component= {HomeScreen}/>
      </stack.Navigatior>
    </NavigationContainer>
  );
}
export default App;
