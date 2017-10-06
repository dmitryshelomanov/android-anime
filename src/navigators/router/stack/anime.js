import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from "react";

import InfoScreen from "../../../scene/byId/info";
import SeriesScreen from "../../../scene/byId/series";

const TabRouteConfigs = {
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-bookmarks-outline" size={30} style={{color: tintColor}} />
      )
    }
  },
  Series: {
    screen: SeriesScreen,
    navigationOptions: {
      title: "серии",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-film-outline" size={30} style={{color: tintColor}} />
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
    showLabel: false,
    tabStyle: {
      backgroundColor: "#fff"
    }
  }
};

export default TabNavigator(TabRouteConfigs, TabNavigatorConfig);