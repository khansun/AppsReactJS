import React, { useState, useEffect } from "react";
import { ImageBackground, View, ScrollView, StyleSheet, AsyncStorage, Image } from "react-native";
import { Text, Card, Button, Avatar, Header, Input } from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "../components/HeaderHome";
import "firebase/firestore";
import * as firebase from "firebase";
import Loading from "../components/Loading";
const ProfileScreen = (props) => {
  const [photoURL, setPhotoURL] = useState("");
  const [userProfile, setUserProfile] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const loadProfile = async (userEmail) => {
   
    firebase
      .firestore()
      .collection("users")
      .where("email", "==", userEmail)
      .onSnapshot((querySnapshot) => {
        let temp_posts = [];
        querySnapshot.forEach((doc) => {
          temp_posts.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setUserProfile(temp_posts);
       
      })
      .catch((error) => {
        
        alert(error);
      });
  };

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
              <View style={{ justifyContent: "flex-start",marginTop:10, marginBottom: 50 }}>
              <Button
                type="solid"
                title=" Load User Information"
                icon={<FontAwesome5 name="user" size={20} color="red" />}
                onPress={
                  
                  function () {
                    loadProfile(auth.CurrentUser.email);
                    var obj = JSON.parse(JSON.stringify(userProfile));
                    
                   
                    
                  alert(JSON.stringify(userProfile));
                  try{
                    alert(obj.id);
                  }
                  catch{
                    alert("Stop");
                  }
                  }
                }
              />
              </View>
              </View>
              
              <View style={{ justifyContent: "flex-start",marginTop:150, marginBottom: 30 }}>
              <Text style={{ paddingHorizontal: 10 ,fontSize: 17}}>
                 <Text style = {{fontWeight: 'bold'}} >
                  Designation:
                  {" "} 
                   </Text>  
                   <Text style = {{textDecorationLine: 'underline'}} >
                {auth.CurrentUser.email}{'\n'}
              </Text>
              </Text>
              <Text style={{ paddingHorizontal: 10 ,fontSize: 17}}>
                 <Text style = {{fontWeight: 'bold'}} >
                  Birthday:
                  {" "} 
                   </Text>  
                   <Text style = {{textDecorationLine: 'underline'}} >
                {auth.CurrentUser.email} {'\n'}
              </Text>
              </Text>

              <Text style={{ paddingHorizontal: 10 ,fontSize: 17}}>
                 <Text style = {{fontWeight: 'bold'}} >
                  Address:
                  {" "} 
                   </Text>  
                   <Text style = {{textDecorationLine: 'underline'}} >
                {JSON.stringify(auth.CurrentUser.email)}
              </Text>
              </Text>

              </View>

            </Card>
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