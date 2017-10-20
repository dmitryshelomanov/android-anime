import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import config from "../../config";

class Gallery extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      visible: false,
      uri: ""
    };
  }
  _showModal() { 
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.visible}
        onRequestClose={() => this.setState({ visible: false })}
      >
        <View
          style={{
            backgroundColor: "#000",
            flex: 1,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
              position: "absolute",
              top: 0,
              left: 0,
              resizeMode: "contain",
              alignSelf: "center"
            }}
            source={{uri: this.state.uri}}
          />
        </View>
      </Modal>  
    );
  }

  _renderMiniature() { 
    const { dataURI, id } = this.props;

    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: "row"
          }}
        >
        {
          dataURI.map((uri, index) => (
            <TouchableHighlight
              onPress={() => { 
                this.setState({ uri: `${config.animeImg}${id}/${uri}` }, () => { 
                  this.setState({ visible: true });
                })
              }}
              key={index}
            >
              <Image
                source={{ uri: `${config.animeImg}${id}/${uri}` }}
                style={{
                  height: 150,
                  width: 150,
                  resizeMode: "cover"
                }}
              />
            </TouchableHighlight>
          ))
        }
        </View>
      </ScrollView>
    );
  }

  render() {  
    return (
      <View>
        {this._renderMiniature()}
        {this._showModal()}
      </View>
    );
  }
};

export default Gallery;