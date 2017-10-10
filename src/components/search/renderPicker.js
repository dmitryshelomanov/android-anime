import React, { Component } from "react";

import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Picker,
  FlatList,
  Animated
} from "react-native";

import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/Ionicons';

import Card from "../../components/anime/card";

import ToUp from "../../components/toUp";

import buildHttpGET from "../../helpers/buildHttpGET";


class Search extends Component { 

  constructor(props) { 
    super(props);
    this.state = {
      genre: undefined,
      type: undefined,
      year: undefined,
      showPickers: false,
      animation: new Animated.Value(0)
    };
  } 
  
  _searchData() { 
    const { genre, year, type } = this.state;
    console.log(buildHttpGET(genre, year, type));
  }

  showPickers() { 
    this.setState({
      showPickers: !this.state.showPickers,
    }, () => { 
      if (this.state.showPickers) { 
        return this._animationShow();
      }
      this._animationHide();
      this._searchData();
    });
  }

  _animationShow() { 
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }).start();
  }

  _animationHide() { 
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start();
  }

  _renderArrowDown() { 
    return (
      <View
        style={{
          position: "relative",
          alignItems: "center",
          padding: 5,
          zIndex: 101
        }}
      >
        <Icon
          name={this.state.showPickers ? "ios-arrow-dropdown" : "ios-arrow-dropup"}
          size={30}
          style={{
            marginRight: 15
          }}
          onPress={() => this.showPickers() }
        />
      </View>
    );
  }

  _renderYearPicker() { 
    return (
      <View>
        <Text>Год</Text>
        <Picker
          selectedValue={this.state.year}
          onValueChange={(itemValue, itemIndex) => { 
            this.setState({ year: itemValue }, () => {
              this._searchData();
            });
          }}
        >
          <Picker.Item label="Не выбрано" value="" /> 
          <Picker.Item label="2000" value="2000" />
          <Picker.Item label="2001" value="2001" />
        </Picker>
      </View>
    );
  }

  _renderGenrePicker() { 
    return (
      <View>
        <Text>Жанр</Text>
        <Picker
          selectedValue={this.state.genre}
          onValueChange={(itemValue, itemIndex) => { 
            this.setState({ genre: itemValue }, () => {
              this._searchData();
            });
          }}
        >
          <Picker.Item label="Не выбрано" value="" /> 
          <Picker.Item label="Драма" value="Драма" />
          <Picker.Item label="Мистика" value="Мистика" />
        </Picker>
      </View>
    );
  }

  _renderTypePicker() { 
    return (
      <View>
        <Text>Тип</Text>
        <Picker
          selectedValue={this.state.type}
          onValueChange={(itemValue, itemIndex) => { 
            this.setState({ type: itemValue }, () => {
              this._searchData();
            });
          }}
        >
          <Picker.Item label="Не выбрано" value="" />  
          <Picker.Item label="Аниме" value="Аниме" />
          <Picker.Item label="Дорама" value="Дорама" />
        </Picker>
      </View>
    );
  }


  render() { 
    const { navigation, anime } = this.props;
    let _scrollView = undefined;

    const anim = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [Dimensions.get("window").height + 300, 0],
    });

    return (
      <View>
        {this._renderArrowDown()}
        <Animated.View style={[styles.pickers, { transform: [{translateY: anim}] }]}>

        </Animated.View>
      </View>
    );
  }
};

export default connect(
  state => ({}),
  dispatch => ({
    onSearch(type, genre, year) {   
      //
    }
  })
)(Search);

const styles = StyleSheet.create({
  pickers: {
    width: Dimensions.get("window").width,
    position: "absolute",
    top: 40,
    left: 0,
    zIndex: 100,
    backgroundColor: "#fff"
  }
});