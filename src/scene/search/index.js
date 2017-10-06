import React, { Component } from "react";

import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Picker
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

export default class Anime extends Component { 
  constructor(props) { 
    super(props);
    this.state = {
      text: "",
      genre: undefined,
      type: undefined,
      year: undefined
    };
  }

  _renderYearPicker() { 
    return (
      <Picker
        selectedValue={this.state.year}
        onValueChange={(itemValue, itemIndex) => this.setState({ year: itemValue })}
      >
        <Picker.Item label="2000" value="2000" />
        <Picker.Item label="2001" value="2001" />
      </Picker>
    );
  }

  _renderGenrePicker() { 
    return (
      <Picker
        selectedValue={this.state.genre}
        onValueChange={(itemValue, itemIndex) => this.setState({ genre: itemValue })}
      >
        <Picker.Item label="Драма" value="Драма" />
        <Picker.Item label="Мистика" value="Мистика" />
      </Picker>
    );
  }

  _renderTypePicker() { 
    return (
      <Picker
        selectedValue={this.state.type}
        onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}
      >
        <Picker.Item label="Аниме" value="Аниме" />
        <Picker.Item label="Дорама" value="Дорама" />
      </Picker>
    );
  }

  render() { 
    return (
      <View style={{ flex: 1, padding: 5, backgroundColor: "#fff" }}>
        <View style={styles.pickers}>
          {this._renderGenrePicker()}
          {this._renderTypePicker()}
          {this._renderYearPicker()}
        </View>
        <Text>search</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    alignItems: "center",
    borderBottomWidth: .5,
    borderBottomColor: "#f80000",
    width: Dimensions.get("window").width - 10,
    padding: 5
  },
  pickers: {
    marginBottom: 20
  }
});