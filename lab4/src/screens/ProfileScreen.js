import React, { useState, useEffect } from "react";
import { ImageBackground, View, ScrollView, StyleSheet, AsyncStorage, Image,FlatList,
  ActivityIndicator, } from "react-native";
import { Text, Card, Button, Avatar, Header, Input } from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "../components/HeaderHome";
import "firebase/firestore";
import * as firebase from "firebase";
import Loading from "../components/Loading";
import ProfileCard from "./../components/ProfileCard";
const ProfileScreen = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const loadPosts = async () => {
    setLoading(true);
    firebase
      .firestore()
      .collection("users")
      .orderBy("email", "desc")
      .onSnapshot((querySnapshot) => {
        let temp_posts = [];
        querySnapshot.forEach((doc) => {
          temp_posts.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setPosts(temp_posts);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);


  if (loading) {
    return (<Loading />)
} else {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <HeaderHome
            user={auth.CurrentUser.displayName}
            DrawerFunction={() => {
              props.navigation.toggleDrawer();
            }}
          />
          <ImageBackground source={require('./../../assets/BG1.jpg')} style={styles.imageStyle}>
            
            <Card >
            <View style={{ alignItems: "center", justifyContent: "space-between",marginTop:20}}>
            <Avatar
                containerStyle={{ backgroundColor: "red" }}
                size="xlarge"
                rounded
                title =  {auth.CurrentUser.displayName.charAt(0)}
                onPress = {() => alert("Upload a photo")}
                
                activeOpacity={1}
              />
              <Text style={styles.NameStyle}> {auth.CurrentUser.displayName}   </Text>
              <View style={{ justifyContent: "flex-start",marginTop:10, marginBottom: 10 }}>
              <Button
                type="solid"
                title=" Show My E-Mail"
                icon={<FontAwesome5 name="envelope" size={20} color="red" />}
                onPress={
                  
                  function () {
              
                  try{
                    alert(auth.CurrentUser.email);
                  }
                  catch{
                    alert("Stop");
                  }
                  }
                }
              />
              </View>
              </View>
              
              

            </Card>
            <FlatList
              data={posts}
            renderItem={({ item }) => {
              return (
                <ProfileCard
                  email={item.data.email}
                  uid={item.id}
                  address = {item.data.address}
                  dob={item.data.dateOfBirth}
                  work={item.data.workPlace}

                />
              );
            }}
          />
          </ImageBackground>
        </View>
      )
      }
    </AuthContext.Consumer >
  );
    }
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
    opacity: 1,
    justifyContent: 'center'
  },
  imageStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  textStyle1: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  NameStyle: {
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
    marginTop: 10,
  },
  imageStyle1: {
    height: 200,
    width: 160,
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default ProfileScreen;