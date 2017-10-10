import React, { Component } from "react";

import {
  Picker,
  View,
  Text
} from "react-native";

export default class PickerComponent extends Component { 
  render() { 
    const { selectedValue, onValueChange, items, title } = this.props;

    return (
      <View>
        <Text>{title}</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          <Picker.Item label="Не выбрано" value="" /> 
          <Picker.Item label="2000" value="2000" />
          <Picker.Item label="2001" value="2001" />
        </Picker>
      </View>
    );
  }
};