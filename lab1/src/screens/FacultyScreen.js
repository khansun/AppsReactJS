import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
import Constants from "expo-constants";
import { color } from "react-native-reanimated";

const FacultyData = [
  {
    title: "Professors",
    data: ["Muhammad Mahbub Alam, PhD", "Abu Raihan Mostofa Kamal, PhD",
     "Md. Hasanul Kabir, PhD", "Kamrul Hasan, PhD"]
  },
  {
    title: "Associate Professors",
    data: [""]
  },
  {
    title: "Assistant Professors",
    data: ["Tareque Mohmud Chowdhury", "Hasan Mahmud", "Md. Sakhawat Hossen",
    "Ashraful Alam Khan", "Shohel Ahmed", "Tajkia Rahman Toma", "Mohayeminul Islam"]
  },
  {
    title: "Lecturers",
    data: ["Redwan Karim Sony", "Faisal Hussain", "Njayou Youssouf",
    "Sabbir Ahmed", "Ridwan Kabir", " Bakhtiar Hasan", "Talha Ibn Aziz",
    "Md. Mohsinul Kabir","Tasnim Ahmed", "Fardin Saad", "Shahriar Ivan",
     " Md. Jubair Ibna Mostafa", " Tanjila Alam Sathi", " Sadia Sharmin", "Lutfun Nahar Lota"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FacultyScreen = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={FacultyData}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "royalblue",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
    
  }
});
export default FacultyScreen;
