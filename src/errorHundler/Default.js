import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ErrorDefault extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  componentDidCatch(error, info) { 
    this.setState({
      hasError: true,
      error
    });
  }

  render() {
    if (this.state.hasError) {
      return <Text>{JSON.stringify(this.error)}</Text>;
    }
    return this.props.children;
  }

};

export default ErrorDefault;