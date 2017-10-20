import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from "react";

import InfoScreen from "../../../scene/byId/info";
import SeriesScreen from "../../../scene/byId/series";
import ImageScreen from "../../../scene/byId/images";
import CommentsScreen from "../../../scene/byId/comments";

const TabRouteConfigs = {
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-bookmarks" size={30} style={{color: tintColor}} />
      )
    }
  },
  Series: {
    screen: SeriesScreen,
    navigationOptions: {
      title: "серии",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-film" size={30} style={{color: tintColor}} />
      )
    }
  },
  Images: {
    screen: ImageScreen,
    navigationOptions: {
      title: "превью",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-images" size={30} style={{color: tintColor}} />
      )
    }
  },
  Comments: {
    screen: CommentsScreen,
    navigationOptions: {
      title: "коментарии",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-chatbubbles" size={30} style={{color: tintColor}} />
      )
    }
  }
};

const TabNavigatorConfig = {
  initialRouteName: "Info",
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