import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext, AuthProvider } from "../providers/AuthProvider";
import {removeData}   from "../functions/AsyncStorageFunctions";
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
            centerComponent={{ text: "The Office: Profile", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />
          <Card>
            <View style={{ alignItems: "center", justifyContent: "space-between",  padding: 20, margin: 10, }}>
              <Avatar
                containerStyle={{ backgroundColor: "red" }}
                size="xlarge"
                rounded
                title =  {auth.CurrentUser.name.charAt(0)}
                onPress = {() => alert("Upload a photo")}
                
                activeOpacity={1}
              />
              
              
              <Text> </Text>
              <Text style={{ fontSize: 30, color: "magenta", alignItems: "center" }}>
                {auth.CurrentUser.name} 
              </Text>
              <Button
              title="Delete Profile"
              onLongPress = {function () {removeData(auth.CurrentUser.email);
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});}}
              />
             
            </View>
            
          </Card>
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              
              <Text style={{ paddingHorizontal: 10 ,fontSize: 17}}>
                 <Text style = {{fontWeight: 'bold'}}>
                  Born on: 
                   </Text>  
                {" "}{auth.CurrentUser.dob}
              </Text>
            </View>
          </Card>
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              
              <Text style={{ paddingHorizontal: 10 ,fontSize: 17 }}>
              <Text style = {{fontWeight: 'bold'}}>
                  Address: 
                   </Text>  
                  {" "}{auth.CurrentUser.address}
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
                {auth.CurrentUser.position}
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
