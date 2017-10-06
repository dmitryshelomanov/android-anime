import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from "react";

import AnimeScreen from "../../../scene/anime";
import HomeScreen from "../../../scene/home";
import SearchScreen from "../../../scene/search";
import FavoriteScreen from "../../../scene/favorite";

const TabRouteConfigs = {
  Anime: {
    screen: AnimeScreen,
    navigationOptions: {
      title: "аниме",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-videocam-outline" size={30} style={{color: tintColor}} />
      )
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "главная",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-albums-outline" size={30} style={{color: tintColor}} />
      )
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      title: "поиск",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search-outline" size={30} style={{color: tintColor}} />
      )
    }
  },
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: {
      title: "избранные",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-star-outline" size={30} style={{color: tintColor}} />
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
    showLabel: false,
    tabStyle: {
      backgroundColor: "#fff"
    }
  }
};

export default TabNavigator(TabRouteConfigs, TabNavigatorConfig);