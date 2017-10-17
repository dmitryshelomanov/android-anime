import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ToUp extends Component {

  componentWillReceiveProps(nextProps) { 
    this.props.scrollY = nextProps.scrollY;
  }

  render() {
    const { toUp } = this.props;

    return (
      <View style={styles.up}>
        {
          this.props.scrollY > 350
          ? <TouchableOpacity
              onPress={() => toUp()}
            >
              <Icon name="md-arrow-dropup-circle" size={45} style={{ color: "#f80000" }} />
            </TouchableOpacity>
          : null
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  up: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 100
  }
});

export default ToUp;