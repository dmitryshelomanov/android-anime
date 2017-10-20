import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default ({ getScreenDetails, scene, index, navigation }) => { 
  const { options, state } = getScreenDetails(scene);
  return (
    <Toolbar
      leftElement={index === 1 ? "arrow-back" : ""}
      onLeftElementPress={() => navigation.goBack()}
      centerElement={options.title}
      style={{
        container: { backgroundColor: "#f80000"},
        titleText: { color: "#fff" },
        leftElement: { color: "#fff" },
      }}
    />
  );
};

