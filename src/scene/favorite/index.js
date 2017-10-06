import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  RefreshControl,
  AsyncStorage
} from 'react-native';

import { connect } from "react-redux";

import { getFavorite } from "../../redux/actions/getAnime";

import Card from "../../components/anime/card";
import ToUp from "../../components/toUp";

class Favorite extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      y: 0,
      refreshing: true
    };
  }

  componentWillMount() { 
    this.props.onGetFavorite(() => { 
      this.setState({
        refreshing: false
      });
    });
  }

  _hundleRefresh() { 
    this.props.onGetFavorite(() => { 
      this.setState({
        refreshing: false
      });
    });
  }

  render() {
    const { favorite, navigation } = this.props;
    let _scrollView = undefined;

    return (
      <View style={styles.container}>
        <ToUp
          toUp={() => _scrollView.scrollToOffset({ offset: 0, animated: true })}
          scrollY={this.state.y}
        />
        <FlatList
          data={favorite}
          renderItem={({ item }) => <Card item={item} touch={(id, title) => navigation.navigate("AnimeById", { id, title }) }/>}
          keyExtractor={(item) => item.AnimeId}
          ref={(ref) => { _scrollView = ref; }}
          onScroll={(e) => { 
            this.setState({ y: e.nativeEvent.contentOffset.y });
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._hundleRefresh.bind(this)}
              colors={["red", "green", "black"]}
              progressBackgroundColor="#fff"
            />
          }
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default connect(
  state => ({
    favorite: state.favorite
  }),
  dispatch => ({
    onGetFavorite: (cb) => { 
      dispatch(getFavorite(cb))
    }
  })
)(Favorite);