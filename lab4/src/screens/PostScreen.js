import React, { useEffect, useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import {
  Text,
  Card,
  Button,
  Avatar,
  Header,
  Input,
} from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { getDataJSON, storeDataJSON } from "../functions/AsyncStorageFunctions";
import { FlatList } from "react-native-gesture-handler";

import CommentCard from "../components/CommentCard";

const PostScreen = (props) => {
  let pid = props.route.params.paramKey;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const input = React.createRef();
  var today = new Date();
  var timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const getPost = async () => {
    let postDetails = await getDataJSON(pid);
    if (postDetails != null) {
      setPost(postDetails);
    } else {
      alert("No post");
    }
  };
  console.log(pid);
  const getComments = async () => {
    try {
      let keys = await AsyncStorage.getAllKeys();
      let comments = [];
      if (keys != null) {
        for (let element of keys) {
          if (element.startsWith("com")) {
            let comment = await getDataJSON(element);
            if (comment.postID == pid) {
              comments.push(comment);
            }
          }
        }
        setComments(comments);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
    getPost();
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
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />
          <Card>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                containerStyle={{ backgroundColor: "green" }}
                rounded
                icon={{ name: "user", type: "font-awesome", color: "white" }}
                activeOpacity={1}
                
              />
              <Text h4Style={{ padding: 10 }} h4>
                {post.author}
              </Text>
            </View>

            <Text style={{ fontStyle: "italic" }}> {"Posted On, "} {post.time}</Text>
            <Text
              style={{
                paddingVertical: 10,
                fontSize: 20                
              }}
            >
              {post.body}
            </Text>
          </Card>
          <Card>
            <Input
              ref={input}
              placeholder="Write Something!"
              leftIcon={<Entypo name="message" size={24} color="black" />}
              onChangeText={function (currentComment) {
                setComment(currentComment);
              }}
            />
            <Button
              title="Comment"
              type="solid"
              onPress={function () {
                var cid = Math.floor(Math.random() * 720);
                let newComment = {
                  commentID: "com" + cid,
                  commentAuthor: auth.CurrentUser.name,
                  comment: comment,
                  commentTime: timeNow,
                  postID: post.postID,
                };

                storeDataJSON("com" + cid, newComment);
                getComments();
                setComment("");
                input.current.clear();
              }}
            />
          </Card>
          <FlatList
            data={comments}
            renderItem={function ({ item }) {
              return (
                <CommentCard
                  author={item.commentAuthor}
                  commentTime={item.commentTime}
                  comment={item.comment}
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
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
});

export default PostScreen;
