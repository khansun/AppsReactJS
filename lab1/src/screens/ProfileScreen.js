import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const ProfileScreen = () => (
    <View style={style.viewStyle}>
        <Text style={style.textS1}></Text>
        <Image
            source={require("./../../assets/myPortrait.jpeg")}
            style={style.imageStyle}
        ></Image>
        <Text style={style.textS1}></Text>
        <Text style={style.textS1}></Text>
        <Text>
            <Text style={style.textS1}>Name: </Text>
            <Text style={style.textS2}>Mahamudur Rahaman Khan</Text>
        </Text>

        <Text>
            <Text style={style.textS1}>Student ID: </Text>
            <Text style={style.textS2}>170042017</Text>
        </Text>

        <Text>
            <Text style={style.textS1}>Hall:</Text>
            <Text style={style.textS2}>South Hall of Residence</Text>
        </Text>
        <Text>
            <Text style={style.textS1}>Room: </Text>
            <Text style={style.textS2}>405</Text>
        </Text>
        <Text>
            <Text style={style.textS1}>Email: </Text>
            <Text style={style.textS2}>mahamudurrahaman@iut-dhaka.edu</Text>
        </Text>
        <Text style={style.textS1}></Text>
        <Text style={style.textS1}></Text>
        <Text style={style.textS1}></Text>
        <Text style={style.textS1}></Text>
        <Text style={style.textS1}></Text>
        <Text style={style.textS1}></Text>
    </View>
);

const style = StyleSheet.create({
  textS1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "lightblue",
  },

  textS2: {
    fontSize: 25,
    color: "gold",
  },

  viewStyle: {
    justifyContent: 'space-between',
    
    backgroundColor: "darkred",
  },

  imageStyle: {
    height: 275,
    width: 375,
  },
});

export default ProfileScreen;
