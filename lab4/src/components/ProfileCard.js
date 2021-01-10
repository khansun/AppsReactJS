import React from "react";
import { View } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";
import {AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons, Entypo, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileCard = (props) => {
  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          containerStyle={{ backgroundColor: "#ffab91" }}
          rounded
          icon= {{name: "briefcase", type: "font-awesome", color: "black"}}
          activeOpacity={1}
        />
        <Text h4Style={{ padding: 10 }} h4>
          {props.work}
        </Text>
      </View>
      
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        {"E-Mail:  "}{props.email}
      </Text>
      <Card.Divider />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          containerStyle={{ backgroundColor: "#ffab91" }}
          rounded
          icon= {{name: "birthday-cake", type: "font-awesome", color: "black"}}
          activeOpacity={1}
        />
        <Text h4Style={{ padding: 10 }} h4>
          {props.dob}
        </Text>
      </View>
      <Card.Divider />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          containerStyle={{ backgroundColor: "#ffab91" }}
          rounded
          icon= {{name: "map-marker", type: "font-awesome", color: "black"}}
          activeOpacity={1}
        />
        <Text h4Style={{ padding: 10 }} h4>
          {props.address}
        </Text>
      </View>
      
    </Card>
  );
};

export default ProfileCard;
