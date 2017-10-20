import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import AppNavigator from "./navigators/appNavigator";
import AppReducer from "./redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import hundleProggres from "./helpers/middleware/hundleProggres";
import { COLOR, ThemeProvider } from 'react-native-material-ui';


export default class App extends Component {

  constructor(props)
  { 
    super(props);
    this.store = createStore(
      AppReducer,
      applyMiddleware(
        thunk,
        logger,
        hundleProggres
      )
    );
  }

  render() {
    return (
      <Provider store={this.store}>
        <ThemeProvider uiTheme={{}}>
          <AppNavigator />
        </ThemeProvider>  
      </Provider>
    );
  }

}

