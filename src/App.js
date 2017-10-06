import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import AppNavigator from "./navigators/appNavigator";
import AppReducer from "./redux";
import thunk from "redux-thunk";
import ErrorBase from "./errorHundler/Default";

export default class App extends Component {

  constructor(props)
  { 
    super(props);
    this.store = createStore(
      AppReducer,
      applyMiddleware(
        thunk
      )
    );
  }

  render() {
    return (
      <Provider store={this.store}>
        <ErrorBase>
          <AppNavigator/>
        </ErrorBase>
      </Provider>
    );
  }

}

