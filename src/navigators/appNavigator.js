import React, { Component } from 'react';

import Router from './router/router';

import { connect } from 'react-redux';

import { addNavigationHelpers, NavigationActions, Header } from 'react-navigation';

import { BackHandler } from "react-native";

class AppNavigator extends Component
{ 
  
  constructor(props)
  { 
    super(props);
    this.state = {
      navigation: {}
    };
  }

  componentWillMount() { 
    BackHandler.addEventListener("hardwareBackPress",() => this._backHundler());
  }

  componentWillUnmount() { 
    BackHandler.removeEventListener("hardwareBackPress",() => this._backHundler());
  }

  _backHundler() { 
    const { nav, dispatch } = this.props;
    if (nav.index === 0) { 
      BackHandler.exitApp();
      return;
    };
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    return (
      <Router
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }

}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigator);