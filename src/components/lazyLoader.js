import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions
} from 'react-native';

class LazyLoader extends Component {
  render() {
    return (
      <View style={{
        padding: 15,
        position: "relative",
        bottom: 0,
        backgroundColor: "#fff",
        zIndex: 9999,
        alignItems: "center",
        width: Dimensions.get("window").width
      }}>
        <ActivityIndicator size="large" color={"#f80000"}/>
      </View>
    );
  }
};

export default LazyLoader;