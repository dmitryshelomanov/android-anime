import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated
} from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';
import Card from "../../components/anime/card";
import ToUp from "../../components/toUp";
import buildHttpGET from "../../helpers/buildHttpGET";
import Picker from "./picker";

class Search extends Component { 

  constructor(props) { 
    super(props);
    this.state = {
      showPickers: false,
      animation: new Animated.Value(0)
    };
  } 
  
  showPickers() { 
    this.setState({
      showPickers: !this.state.showPickers,
    }, () => { 
      if (this.state.showPickers) { 
        return this._animationShow();
      }
      this._animationHide();
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
    const { onHide } = this.props;

    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start(() => onHide());
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
    const { setField, selectedYear } = this.props;

    return (
      <Picker
        title={"Год"}
        selectedValue={selectedYear}
        onValueChange={(itemValue, itemIndex) => { 
          setField("year", itemValue);
        }}
        items={[]}
      />
    );
  }

  _renderGenrePicker() { 
    const { setField, selectedGenre } = this.props;

    return (
      <Picker
        title={"Жанр"}
        selectedValue={selectedGenre}
        onValueChange={(itemValue, itemIndex) => { 
          setField("genre", itemValue);
        }}
        items={[]}
      />
    );
  }

  _renderTypePicker() { 
    const { setField, selectedType } = this.props;

    return (
      <Picker
        title={"Тип"}
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => { 
          setField("type", itemValue);
        }}
        items={[]}
      />
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
          {this._renderYearPicker()}
          {this._renderTypePicker()}
          {this._renderGenrePicker()}
        </Animated.View>
      </View>
    );
  }
};

export default Search;

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