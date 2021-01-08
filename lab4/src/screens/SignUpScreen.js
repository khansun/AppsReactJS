import React, { useState } from 'react';
import { ImageBackground, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { Feather, FontAwesome, Ionicons, MaterialIcons, Entypo, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as firebase from "firebase";
import "firebase/firestore";
import Loading from "../components/Loading"

const SignupScreen = (props) => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [DoB, setDoB] = useState("");
    const [Address, setAddress] = useState("");
    const [WorkPlace, setWorkPlace] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (<Loading />)
    } else {
        return (
            <SafeAreaView style={styles.viewStyle}>
                    <Card>
                    <Card.Title>Welcome to 
              {<Card.Title style = {{fontWeight: 'bold', fontSize: 30}}>The Office</Card.Title>}
              </Card.Title>
                        <Card.Divider />

                        <Input
                            leftIcon={<Ionicons name="md-person" size={24} color="royalblue" />}
                            placeholder='Name'
                            onChangeText={
                                function (currentinput) {
                                    setName(currentinput);
                                }
                            }
                        />

                        <Input
                            leftIcon={<MaterialIcons name="date-range" size={24} color="blue" />}
                            placeholder='Date of Birth'
                            onChangeText={function (currentInput) {
                                setDoB(currentInput);
                            }}
                        />

                        <Input
                            leftIcon={<Entypo name="location" size={24} color="gold" />}
                            placeholder='Address'
                            onChangeText={function (currentInput) {
                                setAddress(currentInput);
                            }}
                        />

                        <Input
                            leftIcon={<Octicons name="organization" size={24} color="black" />}
                            placeholder='Workplace'
                            onChangeText={function (currentInput) {
                                setWorkPlace(currentInput);
                            }}
                        />

                        <Input
                            leftIcon={<Feather name="mail" size={24} color="red" />}
                            placeholder='E-mail Address'
                            onChangeText={
                                function (currentinput) {
                                    setEmail(currentinput);
                                }
                            }
                        />

                        <Input
                            leftIcon={<Feather name="key" size={24} color="green" />}
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={
                                function (currentinput) {
                                    setPassword(currentinput);
                                }
                            }
                        ></Input>

                        <Button
                            icon={<Ionicons name="md-person-add" size={24} color="white" />}
                            title="  Sign Up"
                            type="solid"
                            onPress={() => {
                                if (Name && DoB && Email && Password && Address && WorkPlace) {
                                    setIsLoading(true)
                                    firebase
                                        .auth()
                                        .createUserWithEmailAndPassword(Email, Password)
                                        .then((userCreds) => {
                                            userCreds.user.updateProfile({ displayName: Name });
                                            firebase
                                                .firestore()
                                                .collection("users")
                                                .doc(userCreds.user.uid)
                                                .set({
                                                    name: Name,
                                                    email: Email,
                                                    dateOfBirth: DoB,
                                                    address: Address,
                                                    workPlace: WorkPlace,
                                                })
                                                .then(() => {
                                                    setIsLoading(false)
                                                    alert("Signed Up user with UID:\n "+ userCreds.user.uid);
                                                    props.navigation.navigate("SignIn");
                                                })
                                                .catch((error) => {
                                                    setIsLoading(false)
                                                    alert(error);
                                                });
                                        })
                                        .catch((error) => {
                                            setIsLoading(false)
                                            alert(error);
                                        });
                                } else {
                                    alert("Please fill in all fields!");
                                }
                            }
                            }
                        />

                        <Button
                            icon={<MaterialCommunityIcons name="login" size={24} color="cyan" />}
                            title=" Already have an Account? Sign In!"
                            type="clear"
                            onPress={
                                function () {
                                    props.navigation.navigate('SignIn')
                                }
                            }
                        />

                    </Card>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: "#14C1D7",

    },
    textStyle1: {
        fontSize: 30,
        color: "steelblue",
        fontStyle: "italic",
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#060E4E",
    },
    imageStyle: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})

export default SignupScreen;