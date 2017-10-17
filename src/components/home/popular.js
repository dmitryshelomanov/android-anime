import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';

import config from "../../config";

import { morePopular } from "../../redux/actions/getAnime";

class LastNews extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount() { 
    const { onGetMorePopular } = this.props;
    onGetMorePopular();
  }

  render() {
    const { morePopular, navigation } = this.props;

    return (
      <View style={{ padding: 10 }}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Icon name="ios-podium-outline" size={30} style={{ color: "#f80000", marginRight: 20 }} />
          <Text style={styles.title}>Самое популярное</Text>
        </View>
        {
          !morePopular.isLoading
          ? null
          : <ActivityIndicator
              animating={this.state.loading}
              color={"#f80000"}
              size="large"
            />
        }
        {
          morePopular.data.map(item => (
            <View
              style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", paddingTop: 5, paddingBottom: 5 }}
              key={item.AnimeId}
            >
              <Text style={{marginRight: 30, fontWeight: "bold", color: "#000"}}>{item.Rating.toFixed(1)}</Text>
              <Text
                onPress={() => navigation.navigate("AnimeById", {id: item.AnimeId, title: item.Title})}
              >
                {item.Title}
              </Text>
            </View>
          ))
        }
      </View>
    );
  }
};

export default connect(
  state => ({
    morePopular: state.morePopular
  }),
  dispatch => ({
    onGetMorePopular: () => { 
      dispatch(morePopular());
    }
  })
)(LastNews);

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "#2e2e2e",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  more: {
    padding: 15,
    color: "#f80000",
    fontWeight: "bold",
    justifyContent: "center"
  }
});