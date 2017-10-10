import React, { Component } from "react";

import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Picker,
  FlatList
} from "react-native";

import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/Ionicons';

import Card from "../../components/anime/card";

import ToUp from "../../components/toUp";

import PickerRender from "../../components/search/renderPicker";

class Search extends Component { 

  constructor(props) { 
    super(props);
    this.state = {
      y: 0
    };
  } 

  _hundleMore() { 

  }

  render() { 
    const { navigation, anime } = this.props;
    let _scrollView = undefined;

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ToUp
          toUp={() => _scrollView.scrollToOffset({ offset: 0, animated: true })}
          scrollY={this.state.y}
        />
        
        <PickerRender />
        
        <FlatList
          style={{zIndex: 1}}  
          data={anime}
          renderItem={({ item }) => <Card item={item} touch={(id, title) => navigation.navigate("AnimeById", { id, title }) }/>}
          keyExtractor={(item) => item.AnimeId}
          onEndReached={() => this._hundleMore()}
          onEndReachedThreshold={0.5}
          ref={(ref) => { _scrollView = ref; }}
          onScroll={(e) => { 
            this.setState({ y: e.nativeEvent.contentOffset.y });
          }}
        />
      </View>
    );
  }
};

export default connect(
  state => ({
    anime: state.favorite
  }),
  dispatch => ({})
)(Search);

const styles = StyleSheet.create({

});