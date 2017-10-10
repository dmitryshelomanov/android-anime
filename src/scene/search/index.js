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
import buildHttpGET from "../../helpers/buildHttpGET";
import { searchAnime } from "../../redux/actions/getAnime";
import Card from "../../components/anime/card";
import ToUp from "../../components/toUp";
import PickerRender from "../../components/search/renderPicker";
import LazyLoader from "../../components/lazyLoader.js";

class Search extends Component { 

  constructor(props) { 
    super(props);
    this.state = {
      y: 0,
      hundlerMore: false,
      offset: 15,
      genre: "",
      type: "",
      year: "",
      nextFetch: true
    };
  } 

  _searchData() { 
    const { genre, year, type } = this.state;
    if (!this.state.nextFetch) return;
    this.setState({
      nextFetch: false,
      hundlerMore: false
    }, () => {
      this.props.onSearch(buildHttpGET(genre, year, type), 0, true, () => {
        this.setState({
          nextFetch: true,
          offset: this.props.anime.length,
          hundlerMore: true
        });
      });
    });
  }

  _hundleMore() { 
    const { genre, year, type } = this.state;
    if (this.state.hundlerMore) {
      this.setState({ hundlerMore: false });
      this.setState({ 
        offset: this.state.offset === 0 ? 15 : this.state.offset + 15
      }, () => { 
        this.props.onSearch(
          buildHttpGET(genre, year, type),
          this.state.offset,
          false
        );
        this.setState({ hundlerMore: true });
      });
    }
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

        <PickerRender
          setField={(field, item) => {
            switch (field) { 
              case "year": this.setState({ year: item }); break;
              case "genre": this.setState({ genre: item }); break;
              case "type": this.setState({ type: item }); break;  
            };
          }}
          onHide={() => this._searchData()}
          selectedYear={this.state.year}
          selectedGenre={this.state.genre}
          selectedType={this.state.type}
        />
        
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

        {this.state.hundleMore ? <LazyLoader /> : null}

      </View>
    );
  }
};

export default connect(
  state => ({
    anime: state.search
  }),
  dispatch => ({
    onSearch(uri, offset, clear, cb) {   
      dispatch(searchAnime(uri, offset, clear, cb));
    }
  })
)(Search);