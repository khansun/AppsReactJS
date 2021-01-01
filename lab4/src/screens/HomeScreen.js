import React, { useState, useEffect } from "react";
import {
  AsyncStorage,
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import {
  Card,
  Button,
  Text,
  Avatar,
  Input,
  Header,
} from "react-native-elements";
import { AntDesign, Entypo } from "@expo/vector-icons";
import PostCard from "./../components/PostCard";
import { AuthContext } from "../providers/AuthProvider";
import {getDataJSON, storeDataJSON } from "../functions/AsyncStorageFunctions";

import * as firebase from 'firebase';

const HomeScreen = (props) => {
  
  const [userPostBody, setUserPostBody ]= useState("");
  const [totalPost, setTotalPost ]= useState([]); 
  var today = new Date();
  var timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const input=React.createRef();
  

  const getTotalPost = async () => {
    try {
      let keys = await AsyncStorage.getAllKeys();

      let posts = [];
      if (keys != null) {
        for (let element of keys) {
          if (element.startsWith("user") ) {
            let post = await getDataJSON(element);
            posts.push(post);
          }
        }
        setTotalPost(posts);
      } else {
        console.log("post not found");

      }
    } catch (error) {
      console.log(error);
    }
  };
 


  useEffect(() => {
    getTotalPost();
  }, []);


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
              <Input
                ref={input}
                placeholder="What's On Your Mind?"
                leftIcon={<Entypo name="pencil" size={24} color="black" />}
                onChangeText={function (currentInput) {
                  setUserPostBody(currentInput); }}
              />
              <Button 
              title="Post" type="outline" onPress={function () {
             var moment = Math.floor(Math.random() * 360);
            let currentUserPost = {
              postID: "user"+moment,
              author: auth.CurrentUser.name,
              time: timeNow, 
              body: userPostBody,
            };
            storeDataJSON("user"+moment, currentUserPost);
            getTotalPost();
            setUserPostBody("");
            input.current.clear();
          }} 
          />
              
    

            </Card>

            <FlatList
              data={totalPost} 
              renderItem={function ({ item }) {
                return (
                  <PostCard
                    postID={item.postID}
                    author={item.author}
                    title={item.time}
                    body={item.body}
                    navigation={props.navigation}
                  />
                );
              }}
            />
          </View>
        )}
      </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "royalblue",
  },
  viewStyle: {
    flex: 1,
  },
});

export default HomeScreen;
