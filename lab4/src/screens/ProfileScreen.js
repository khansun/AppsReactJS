import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext, AuthProvider } from "../providers/AuthProvider";
import {removeData ,getDataJSON, getData}   from "../functions/AsyncStorageFunctions";
import * as firebase from 'firebase';
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "The Office", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function ()  {
                firebase.auth().signOut().then(()=>{
                    auth.setIsLoggedIn(false);
                    auth.setCurrentUser({});
                    alert("Logged Out");
                }).catch((error)=>{
                    alert(error);
            })
            },
            }}
          />
          <Card>
            <View style={{ alignItems: "center", justifyContent: "space-between",  padding: 20, margin: 10, }}>
              <Avatar
                containerStyle={{ backgroundColor: "red" }}
                size="xlarge"
                rounded
                title =  {name.charAt(0)}
                onPress = {() => alert("Upload a photo")}
                
                activeOpacity={1}
              />
              
              
              <Text> </Text>
              <Text style={{ fontSize: 30, color: "magenta", alignItems: "center" }}>
                {name} 
              </Text>
              <Button
              title="Delete Profile"
              onLongPress = {function () {
                user.delete().then(function() {
                  alert("User deleted");
                }).catch(function(error) {
                  alert(error);
                });
              }
              }
              />
             
            </View>
            
          </Card>
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              
              <Text style={{ paddingHorizontal: 10 ,fontSize: 17}}>
                 <Text style = {{fontWeight: 'bold'}}>
                  Born on: 
                   </Text>  
                {" "}{firebase.auth().email}
              </Text>
            </View>
          </Card>
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              
              <Text style={{ paddingHorizontal: 10 ,fontSize: 17 }}>
              <Text style = {{fontWeight: 'bold'}}>
                  Address: 
                   </Text>  
                  {" "}{email}
              </Text>
            </View>
          </Card>
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              
              <Text style={{ paddingHorizontal: 10 ,fontSize: 17}}> 
              <Text style = {{fontWeight: 'bold'}}>
                  Works at, 
                   </Text>  
                {"\n"}
                {uid}
              </Text>
            </View>
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
});

export default ProfileScreen;
