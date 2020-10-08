import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const CourseScreen = (props) => {

    const {semesterName,courseList} = props.route.params;
  return (
    <View
    style={styles.viewStyle}
    >
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      <Text style={styles.textStyle2}>{semesterName}</Text>
      
      <View style = {styles.viewStyle2}>
        <FlatList
        data={courseList}
        showsVerticalScrollIndicator={false}
        renderItem = {function({item}){
        return(<Text style = {styles.textStyle}>{item.key.concat(". ").concat(item.name)}</Text>)
        }}
        
        ></FlatList>
        <Text></Text>
        <Text></Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color:"blue",
    justifyContent: "space-between",
  
  },

  textStyle2: {
    fontSize:30,
    color:"white",
    marginVertical: 20,
    fontWeight:"bold",
  },

  viewStyle:{
    backgroundColor:"rgb(200,180,0)",
    justifyContent: "center",
    alignItems: "center",
  },
  viewStyle2:{
    backgroundColor:"transparent",
    justifyContent: "space-between",
    alignSelf:"flex-start"

  }
});

export default CourseScreen;
