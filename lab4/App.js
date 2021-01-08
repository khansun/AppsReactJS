import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./src/navigation/AuthStack";
import AppDrawerScreen from "./src/navigation/AppDrawer";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDdS2_e6KqeVnJZZbuqTgX1EMtv8BSnaUg",
  authDomain: "office-blog-40e41.firebaseapp.com",
  projectId: "office-blog-40e41",
  storageBucket: "office-blog-40e41.appspot.com",
  messagingSenderId: "265508911410",
  appId: "1:265508911410:web:736cc5c2282a451667bf2b"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
