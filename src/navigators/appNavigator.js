import React, { Component } from 'react';

import Router from './router/router';

import { connect } from 'react-redux';

import { addNavigationHelpers, NavigationActions } from 'react-navigation';


class AppNavigator extends Component
{ 
  constructor(props)
  { 
    super(props);
    this.state = {
      navigation: {}
    };
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