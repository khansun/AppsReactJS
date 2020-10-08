import React from "react";
import {Text, StyleSheet, Image, View} from "react-native";
const HomeScreen = () =>{
    return(
        <View style={styles.viewStyle}>
    <Image source={require("./../../assets/iut-oic.jpg")}
    style={styles.Image}
  ></Image>
    <Text style = {styles.textStyle}>Department of CSE 
         </Text>
    <Text style = {styles.textStyle}>Programme: SWE 
         </Text>
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
});
export default HomeScreen;