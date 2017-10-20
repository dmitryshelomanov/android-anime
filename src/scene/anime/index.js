import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  FlatList,
  RefreshControl,
  Modal
} from "react-native";
import ToUp from "../../components/toUp";
import { connect } from "react-redux";
import { allAnime } from "../../redux/actions/getAnime";
import Card from "../../components/anime/card";
import Config from "../../config";

class Anime extends Component { 
  
  constructor(props) { 
    super(props);
    this.state = {
      y: 0
    };
  } 

  componentDidMount() { 
    const { anime, onGetAnime } = this.props;
    onGetAnime(
      anime.offset,
      true
    );
  }

  _hundleRefresh() { 
    const { anime, onGetAnime } = this.props;

    onGetAnime(
      anime.offset,
      true
    );
  }

  _hundleMore() {
    const { anime, onGetAnime } = this.props;
    if (!anime.isLoading) { 
      onGetAnime(
        anime.offset,
        false
      );
    };
  }

  render() { 
    const { anime, navigation } = this.props;
    let _scrollView = undefined;
    return (
      <View style={styles.container}>
        <ToUp
          toUp={() => _scrollView.scrollToOffset({ offset: 0, animated: true })}
          scrollY={this.state.y}
        />
        <FlatList
          data={anime.data}
          renderItem={({ item }) => <Card item={item} touch={(id, title) => navigation.navigate("AnimeById", { id, title }) }/>}
          keyExtractor={(item) => item.AnimeId}
          onEndReached={() => this._hundleMore()}
          onEndReachedThreshold={0.5}
          ref={(ref) => { _scrollView = ref; }}
          onScroll={(e) => { 
            this.setState({ y: e.nativeEvent.contentOffset.y });
            navigation.setParams({ y: 1 });
          }}
          refreshControl={
            <RefreshControl
              refreshing={anime.isLoading}
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

export default connect(
  state => ({
    anime: state.anime
  }),
  dispatch => ({
    onGetAnime: (offset, clear) => { 
      dispatch(allAnime(Config.allAnime.limit, offset, clear));
    }
  })
)(Anime);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor:"#fff"
  }
});

