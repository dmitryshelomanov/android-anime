import {
  TabNavigator,
  StackNavigator,
  TabBarBottom,
} from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from "react";
import MainNav from "./stack/main";
import AnimeNav from "./stack/anime";

import Header from "../../components/header"

const StackRouteConfigs = {
  Main: {
    screen: MainNav,
    key: "main"
  },
  AnimeById: {
    screen: AnimeNav,
    key: "main"
  }
};

const StackNavigatorConfig = {
  initialRouteName: "Main",
  navigationOptions: {
    header: props => <Header {...props}/>
  }
};

const Router = StackNavigator(StackRouteConfigs, StackNavigatorConfig);

export default Router;