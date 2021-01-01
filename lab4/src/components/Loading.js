import React from 'react';
import {View,StyleSheet, ActivityIndicator} from 'react-native';

const Loading = ()=>{
    return(
        <View style={styles.viewStyle}>
            <ActivityIndicator size = 'large'  color = 'royalblue' animating = {true} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "white"
    },
  });

  export default Loading;