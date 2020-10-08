import React from "react";
import {Text, StyleSheet} from "react-native";
const HomeScreen = ()=>{
    return(<Text style = {styles.textStyle}> Let's Rock! </Text>);
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        color: "red",
    }
});
export default HomeScreen;