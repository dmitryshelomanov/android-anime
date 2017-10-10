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


class Anime extends Component { 
  constructor(props) { 
    super(props);
    this.state = {
      limit: 20,
      offset: 0,
      refreshing: true,
      y: 0,
      hundlerMore: true
    };
  } 

  componentDidMount() { 
    this.props.onGetAnime(
      this.state.limit,
      this.state.offset,
      true,
      () => { 
        this.setState({ refreshing: false });
      }
    );
  }

  _hundleRefresh() { 
    this.setState({ 
      refreshing: true,
      offset: 0
    }, () => { 
      this.props.onGetAnime(
        this.state.limit,
        this.state.offset,
        true,
        () => { 
          this.setState({ refreshing: false });
        }
      );
    });
  }

  _hundleMore() {
    if (this.state.hundlerMore) {
      this.setState({ hundlerMore: false });
      this.setState({ 
        limit: this.state.limit,
        offset: this.state.offset === 0 ? 20 : this.state.offset + 20
      }, () => { 
        this.props.onGetAnime(
          this.state.limit,
          this.state.offset,
          false
        );
        this.setState({ hundlerMore: true });
      });
    }
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
          data={anime}
          renderItem={({ item }) => <Card item={item} touch={(id, title) => navigation.navigate("AnimeById", { id, title }) }/>}
          keyExtractor={(item) => item.AnimeId}
          onEndReached={() => this._hundleMore()}
          onEndReachedThreshold={0.5}
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

export default connect(
  state => ({
    anime: state.anime
  }),
  dispatch => ({
    onGetAnime: (limit, offset, clear, cb) => { 
      dispatch(allAnime(limit, offset, clear, cb));
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

