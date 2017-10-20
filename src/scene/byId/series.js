import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal
} from 'react-native';
import { connect } from "react-redux";
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation';

class Series extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      visibleModal: false,
      url: undefined
    };
  }

  _renderSeries() { 
    const { anime } = this.props;
    let series = anime.data.Series || [];

    return (
      <View>
        {
          series.map((item, index) => (
            <Text
              key={index}
              style={styles.series}
              onPress={() => { 
                Orientation.lockToLandscapeLeft();
                this.setState({
                  url: item.VideoUrl,
                  visibleModal: true
                });
              }}
            >
              Серия - {index + 1}
            </Text>
          ))
        }
      </View>
    );
  }

  _renderPlayer() { 
    return (
      <Modal
        onRequestClose={() => { 
          this.setState({
              url: undefined,
              visibleModal: false
            }, () => Orientation.lockToPortrait());
        }}
      >
        <VideoPlayer
          source={{ uri: this.state.url }}
          onBack={() => {
            this.setState({
              url: undefined,
              visibleModal: false
            }, () => Orientation.lockToPortrait());
          }}
        />
      </Modal>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this._renderSeries()}
          {this.state.visibleModal ? this._renderPlayer() : null}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  series: {
    padding: 15,
    borderBottomWidth: 0.4,
    borderBottomColor: "#eee",
    fontFamily: "Roboto-Thin",
  }
});

export default connect(
  state => ({
    anime: state.animeById
  })
)(Series);