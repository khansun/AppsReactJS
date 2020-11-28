import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { FontAwesome, Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import { storeDataJSON } from "../functions/AsyncStorageFunctions";

 

const SignUpScreen = (props) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");  
  const [Password, setPassword] = useState("");
  const [DOB, setDOB ]= useState("");
  const [Address, setAddress ]= useState("");
  const [Position, setPosition ]= useState("");
  return (
    <View style={styles.viewStyle}>
      <Card>
      <Card.Title>Welcome to 
              {<Card.Title style = {{fontWeight: 'bold', fontSize: 30}}>The Office</Card.Title>}
              </Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
          placeholder="Name"
          onChangeText={function (currentInput) {
            setName(currentInput);
          }}
        />
        <Input
          leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
          placeholder="E-mail Address"
          onChangeText={function (currentInput) {
            setEmail(currentInput);
          }}
        />
        <Input
          leftIcon={<Ionicons name="ios-calendar" size={26} color="black" />}
          placeholder="Date of Birth"
          onChangeText={function (currentInput) {
            setDOB(currentInput);
          }}
        />
        <Input
          leftIcon={<Ionicons name="ios-pin" size={26} color="black" />}
          placeholder="Address"
          onChangeText={function (currentInput) {
            setAddress(currentInput);
          }}
        />
        <Input
          leftIcon={<Ionicons name="ios-briefcase" size={26} color="black" />}
          placeholder="Designated Position"
          onChangeText={function (currentInput) {
            setPosition(currentInput);
          }}
        />

        <Input
          placeholder="Password"
          leftIcon={<Feather name="key" size={24} color="black" />}
          secureTextEntry={true}
          onChangeText={function (currentInput) {
            setPassword(currentInput);
          }}
        />
       
        <Button
          icon={<AntDesign name="user" size={24} color="white" />}
          title="  Sign Up!"
          type="solid"
          onPress={function () {
            let currentUser = {
              name: Name,
              dob: DOB,
              email: Email,
              address: Address,
              position: Position,
              password: Password,
            };
            storeDataJSON(Email, currentUser);
            props.navigation.navigate("SignIn");
          }}
        />
        <Button
          type="clear"
          icon={<AntDesign name="login" size={24} color="dodgerblue" />}
          title="  Already have an account?"
          onPress={function () {
            props.navigation.navigate("SignIn");
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4bacb8",
  },
});
export default SignUpScreen;
