import React,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthContext, AuthProvider } from "./Source/provider/AuthProvider";
import * as firebase from 'firebase' 
import AppDrawerScreen from './Source/Navigation/AppDrawerStack'
import AuthStackScreen from './Source/Navigation/AuthStackNavigation'
import {getDataJSON} from './Source/Function/AsyncStorageFunction'
import FlashMessage from "react-native-flash-message";


const firebaseConfig = {
  apiKey: "AIzaSyCqzHDcGYxk5fXB50HnFK7sBb32JfHWTd8",
  authDomain: "devhelp-f3c69.firebaseapp.com",
  projectId: "devhelp-f3c69",
  storageBucket: "devhelp-f3c69.appspot.com",
  messagingSenderId: "923899968050",
  appId: "1:923899968050:web:e348ea9e0917305c439a2b"
};

const MyTheme ={
  dark:true,
  colors:{
    primary: "#ffffff",
    background: "#fff",
    card: "#000",
    text: "#ffffff",
    border: "#000028",
    notification:"#9933FF",
  
    
  },
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}



export default function App() {
  const [loadScreen,setLoadScreen] = useState(false)
  const [logIn,setLogIn] = useState(false);
  global.logInStatus= false
  
  const loadUserCreds = async() =>{
    
        let response = await getDataJSON("devHelp")
        global.userInfo=response
        if(response){
          console.log("Global hooker -_-")
         console.log(logIn)
         global.logInStatus=true
         setLogIn(true)
        }

        setLoadScreen(true)



  }

  useEffect(()=>{
    let isMounted = true
    console.log("Logged out ttttttttttt")
    if(isMounted){
      loadUserCreds()
    }
    return( ()=>{isMounted=false})
  },[])

  

  if(!loadScreen){
    return null
  }
  else{
  
  return (
    
    <AuthProvider >
      <AuthContext.Consumer>
        {(auth) => (
          
          <NavigationContainer theme={MyTheme}>
           
           
            <FlashMessage position="top" />
            {console.log(auth.logInStatus)}
             {auth.logInStatus ?
             auth.IsLoggedIn|| logIn  ? <AppDrawerScreen /> : <AuthStackScreen />
            :auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
    
    
   
  );
        }
}