import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from "react-redux";
import Gallery from "../../components/gallery";

class Images extends Component {
  render() {
    const { anime } = this.props;
    let images = anime.data.Images || [];

    return (
      <View style={styles.container}>
        {
          images.length > 0 ? <Gallery dataURI={images} id={anime.data.AnimeId}/> : <Text style={styles.noImage}>У данного тайтла нету превью</Text>
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  noImage: {
    padding: 15,
    fontWeight: "bold"
  }
});

export default connect(
  state => ({
    anime: state.animeById
  })
)(Images);