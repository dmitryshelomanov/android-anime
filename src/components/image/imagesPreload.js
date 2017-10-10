import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import AutoHeightImage from 'react-native-auto-height-image';

class ImagePreload extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    const { uri, width } = this.props;
    
    return (
      <View>
        {
          !this.state.loaded
            ? <View style={{ width, height: 200, backgroundColor: "silver"}}></View>
            : null
        }
        <AutoHeightImage
          width={this.state.loaded ? width : 0}
          imageURL={uri}
          onLoadEnd={() => this.setState({ loaded: true })}
        />
      </View>
    );
  }
};

export default ImagePreload;