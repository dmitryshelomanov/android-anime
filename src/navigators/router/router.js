import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from "react";

import MainNav from "./stack/main";
import AnimeNav from "./stack/anime";

const StackRouteConfigs = {
  Main: {
    screen: MainNav
  },
  AnimeById: {
    screen: AnimeNav
  }
};

const StackNavigatorConfig = {
  initialRouteName: "Main",
  headerMode: "float",
  mode: "modal"
};

const Router = StackNavigator(StackRouteConfigs, StackNavigatorConfig);

export default Router;