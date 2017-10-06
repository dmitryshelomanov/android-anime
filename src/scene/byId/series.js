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
    let series = anime.Series || [];

    return (
      <View>
        {
          series.map((item, index) => (
            <Text
              key={index}
              style={styles.series}
              onPress={() => { 
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
      <Modal>
        <VideoPlayer
          source={{ uri: this.state.url }}
          onBack={() => {
            this.setState({
              url: undefined,
              visibleModal: false
            });
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
    borderBottomColor: "#eee"
  }
});

export default connect(
  state => ({
    anime: state.animeById
  })
)(Series);