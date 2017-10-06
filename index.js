import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from "./src/App";

import SplashScreen from 'react-native-splash-screen';

export default class Animaunt extends Component {

  componentDidMount() { 
    SplashScreen.hide();
  }

  render() {
    return <App />
  }
}

AppRegistry.registerComponent('Animaunt', () => Animaunt);
