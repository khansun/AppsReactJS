import React, { useState, useEffect } from "react";
import { ImageBackground, View, ScrollView, StyleSheet, AsyncStorage, Image } from "react-native";
import { Text, Card, Button, Avatar, Header, Input } from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "../components/HeaderHome";
import { storeDataJson, mergeData, removeData } from '../functions/AsyncStorageFunctions';

const ProfileScreen = (props) => {
  const [Bornon, setBornon] = useState("");
  const [Livesat, setLivesat] = useState("");
  const [Worksat, setWorksat] = useState("");
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
              <Image style={styles.imageStyle1} source={require('./../../assets/User.jpg')} />
              <Text style={styles.NameStyle}> {auth.CurrentUser.displayName}   </Text>
              <View style={{ justifyContent: "center",marginTop:90, marginBottom: 0, }}>
              </View>
              <Card.Divider />
              <Input
                placeholder='Birthday'
                onChangeText={
                  function (currentinput) {
                    setBornon(currentinput);
                  }
                }
              ></Input>

              <Input
                placeholder='Address'
                onChangeText={
                  function (currentinput) {
                    setLivesat(currentinput);
                  }
                }
              ></Input>

              <Input
                placeholder='Designation'
                onChangeText={
                  function (currentinput) {
                    setWorksat(currentinput);
                  }
                }
              ></Input>

              <Button
                type="solid"
                title=" Update Details"
                icon={<FontAwesome5 name="user-edit" size={24} color="white" />}
                onPress={
                  async function () {
                    await mergeData(auth.CurrentUser.email, JSON.stringify({
                      dateOfBirth: Bornon,
                      address: Livesat,
                      workPlace: Worksat,
                    }))
                    alert("Relog in to see the update");
                  }
                }
              />

            </Card>
          </ImageBackground>
        </View>
      )
      }
    </AuthContext.Consumer >
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
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