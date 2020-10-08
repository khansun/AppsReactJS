import React from "react";
import {Text, StyleSheet, Image, View, TouchableOpacity, Button} from "react-native";
const HomeScreen = (props) =>{
    return(
        <View style={styles.viewStyle}>
    <Image source={require("./../../assets/iut-oic.jpg")}
    style={styles.Image}
  ></Image>
    <Text>    </Text>
    <Text>    </Text>
    <Text>    </Text>
    <Text>    </Text>
    <Text>    </Text>
    <Text>    </Text>
    <Text style = {styles.textStyle}>Department of CSE 
         </Text>
         <Text>    </Text>
    <Text style = {styles.textStyle}>Programme: SWE 
         </Text>
         <Text>    </Text>
         <Text>    </Text>
         <Text>    </Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Profile");
        }}
      >
        <Text style={styles.touchableText}>My Profile</Text>
      </TouchableOpacity>
      <Text>    </Text>
      <Text>    </Text>
      <Text>    </Text>
      <Text>    </Text>
      <Button
        style = {styles.touchableText}
        title="Semester Wise Course List"
        color="gold"
        onPress={function () {
          props.navigation.navigate("Semester");
        }}
      ></Button>
      <Text>    </Text>
      <Text>    </Text>
      <Button
        title="List of Faculty members"
        color="red"
        onPress={function () {
          props.navigation.navigate("Faculty Members");
        }}
      ></Button>
      <Text></Text>
      <Text></Text>
        </View>
    
    );
};
const styles = StyleSheet.create({
    textStyle:{
        alignItems:"center",
        fontSize: 25,
        color: "royalblue",
        
    },
    viewStyle:{
        alignItems: "center",
        backgroundColor: "white",
      },
      touchableText: {
        fontWeight: "800",
        fontSize: 30,
        color: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: "green",
      },
    
});
export default HomeScreen;