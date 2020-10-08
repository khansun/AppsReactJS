import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const semester1 = [
  { name: "Hum 4145", key: "1" },
  { name: "Hum 4147", key: "2" },
  { name: "Math 4141", key: "3" },
  { name: "Phy 4143", key: "4" },
  { name: "CSE 4107", key: "5" },
  { name: "SWE 4101", key: "6" },
];

const semester2 = [
  { name: "Hum 4247", key: "1" },
  { name: "Hum 4249", key: "2" },
  { name: "Math 4241", key: "3" },
  { name: "CSE 4203", key: "4" },
  { name: "CSE 4205", key: "5" },
  { name: "SWE 4201", key: "6" },
];

const semester3 = [
  { name: "Math 4341", key: "1" },
  { name: "CSE 4303", key: "2" },
  { name: "CSE 4305", key: "3" },
  { name: "CSE 4307", key: "4" },
  { name: "CSE 4309", key: "5" },
  { name: "SWE 4301", key: "6" },
];
const semester4 = [
  { name: "Hum 4441", key: "1" },
  { name: "Math 4441", key: "2" },
  { name: "CSE 4403", key: "3" },
  { name: "CSE 4409", key: "4" },
  { name: "CSE 4411", key: "5" },
  { name: "SWE 4401", key: "6" },
  
];
const semester5 = [
  { name: "Math 4543", key: "1" },
  { name: "CSE 4501", key: "2" },
  { name: "SWE 4501", key: "3" },
  { name: "SWE 4503", key: "4" },
  { name: "SWE 4533", key: "5" },
  { name: "CSE 4561", key: "6" },
];
const semester6 = [
  { name: "Math 4643", key: "1" },
  { name: "CSE 4617", key: "2" },
  { name: "SWE 4621", key: "3" },
  { name: "SWE 4603", key: "4" },
  { name: "SWE 4637", key: "5" },
  { name: "SWE 4601", key: "6" },
];
const semester7 = [
  { name: "Hum 4747", key: "1" },
  { name: "SWE 4701", key: "2" },
  { name: "SWE 4733", key: "3" },
  { name: "CSE 4714", key: "4" },
  { name: "SWE 4790", key: "5" },
  { name: "SWE 4700", key: "6" },
];
const semester8 = [
  { name: "CSE 4809", key: "1" },
  { name: "SWE 4801", key: "2" },
  { name: "SWE 4803", key: "3" },
  { name: "SWE 4805", key: "4" },
  { name: "SWE 4835", key: "5" },
  { name: "CSE 4849", key: "6" },
];
const SemesterScreen = (props) => {
  return (
    <SafeAreaView style={style.viewStyle}>
      <Text ></Text>
      <Text ></Text>
      <Text></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Course List", {semesterName:"First Semester", courseList: semester1 });
        }}
      >
        <Text style={style.textStyle}>First Semester</Text>
      </TouchableOpacity>
      <Text ></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Course List", {semesterName:"Second Semester", courseList: semester2 });
        }}
      >
        <Text style={style.textStyle}>Second Semester</Text>
      </TouchableOpacity>
      <Text ></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Course List", {semesterName:"Third Semester", courseList: semester3 });
        }}
      >
        <Text style={style.textStyle}>Third Semester</Text>
      </TouchableOpacity>
      <Text ></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Course List", {semesterName:"Fourth Semester", courseList: semester4 });
        }}
      >
        <Text style={style.textStyle}>Fourth Semester</Text>
      </TouchableOpacity>
      <Text ></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Course List", {semesterName:"Fifth Semester", courseList: semester5 });
        }}
      >
        <Text style={style.textStyle}>Fifth Semester</Text>
      </TouchableOpacity>
      <Text ></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Course List", {semesterName:"Sixth Semester", courseList: semester6 });
        }}
      >
        <Text style={style.textStyle}>Sixth Semester</Text>
      </TouchableOpacity>
      <Text ></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Course List", {semesterName:"Seventh Semester", courseList: semester7 });
        }}
      >
        <Text style={style.textStyle}>Seventh Semester</Text>
      </TouchableOpacity>
      <Text ></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Course List", {semesterName:"Eighth Semester", courseList: semester8 });
        }}
      >
        <Text style={style.textStyle}>Eighth Semester</Text>
      </TouchableOpacity>
      <Text ></Text>
      <Text ></Text>
      <Text></Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: "white",
    borderRadius: 5,
    borderWidth: 2,
    borderColor:"gold",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },

  viewStyle: {
    backgroundColor: "darkgreen",
    justifyContent: 'space-between',
   
  },
});

export default SemesterScreen;
