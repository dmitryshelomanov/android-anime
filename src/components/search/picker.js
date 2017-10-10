import React, { Component } from "react";

import {
  Picker,
} from "react-native";

export default class PickerComponent extends Component { 
  render() { 
    const { selectedValue, onValueChange, items } = this.props;

    return (
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
      <Picker.Item label="Не выбрано" value="" />  
      <Picker.Item label="Аниме" value="Аниме" />
      <Picker.Item label="Дорама" value="Дорама" />
    </Picker>
    );
  }
};