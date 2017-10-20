import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from "react";

import AnimeScreen from "../../../scene/anime";
import HomeScreen from "../../../scene/home";
import FavoriteScreen from "../../../scene/favorite";

const TabRouteConfigs = {
  Anime: {
    screen: AnimeScreen,
    navigationOptions: {
      title: "аниме",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-videocam" size={30} style={{color: tintColor}} />
      )
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "главная",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-albums" size={30} style={{color: tintColor}} />
      )
    }
  },
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: {
      title: "избранные",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-star" size={30} style={{color: tintColor}} />
      )
    }
  }
};

const TabNavigatorConfig = {
  initialRouteName: "Home",
  tabBarComponent: TabBarBottom,
  tabBarPosition: "bottom",
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: "#f80000",
    inactiveTintColor: "#B0BEC5",
    showLabel: false,
    tabStyle: {
      backgroundColor: "#fff"
    }
  }
};

export default TabNavigator(TabRouteConfigs, TabNavigatorConfig);