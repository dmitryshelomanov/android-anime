import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView
} from "react-native";

import ToUp from "../../components/toUp";

import LastNews from "../../components/home/lastNews";
import Popular from "../../components/home/popular";

class Home extends Component { 

  constructor(props) { 
    super(props);
    this.state = {
      y: 0
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex:1 }}>
        <ToUp
          toUp={() => this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: true })}
          scrollY={this.state.y}
        />
        <ScrollView
          style={styles.container}
          ref="_scrollView"
          onScroll={(e) => { 
            this.setState({ y: e.nativeEvent.contentOffset.y });
          }}
        >
          <Popular navigation={navigation}/>  
          <LastNews/>
        </ScrollView>
      </View>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor:"#fff"
  }
});