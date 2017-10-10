import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

import arraytoString from "../../helpers/arrayToString";
import config from "../../config"
import ImagePreload from '../../components/image/imagesPreload';

class Card extends Component {
  render() {
    const { item, touch } = this.props;

    return (
      <View style={styles.card}>
        <View style={styles.age}> 
          <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.AgeLimit}+</Text>
        </View>
        <ImagePreload
          width={config.defaultWidth}
          uri={`${config.animeImg}${item.AnimeId}/${item.ImageUrl}`}
        />
        <View style={styles.info}>
          <Text style={styles.infoTitle} onPress={() => touch(item.AnimeId, item.Title)}>  
            {item.Title}
          </Text>
          <Text style={styles.primaryText}>  
            Серии: [{item.CountSeries} из {item.TotalSeriesCount ? item.TotalSeriesCount : '??'}]
          </Text>
          <Text style={[styles.primaryText]}>  
            просмотров - {item.ViewCount}
          </Text>
          <Text style={[styles.primaryText, {color: "#657182"}]}>  
            {arraytoString(item.Genres, "Title")}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    position: "relative",
    marginBottom: 15
  },
  infoTitle: {
    color: "#f80000",
    fontSize: 15,
    lineHeight: 25
  },
  info: {
    paddingTop: 15,
    paddingRight: 10,
    paddingLeft: 10,
  },
  primaryText: {
    color: "#2e2e2e",
    fontSize: 15,
    lineHeight: 25
  },
  age: {
    position: "absolute",
    top: 5,
    left: 5,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#f80000",
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  star: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 2,
    width: 50,
    height: 50,
  }
});

export default Card;