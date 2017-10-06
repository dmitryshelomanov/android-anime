import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import {
  animeById
} from "../../redux/actions/getAnime";
import { connect } from "react-redux";
import AnimeById from "../../components/anime/info";

class Info extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerTitleStyle: {
      fontSize: 14
    }
  });

  constructor(props) { 
    super(props);
    this.state = {
      loader: true
    };
  }

  componentWillMount() { 
    const { params } = this.props.navigation.state;
    const { onGetAnime } = this.props;

    onGetAnime(params.id, () => { 
      this.setState({ loader: false });
    });
  }

  render() {
    const { anime } = this.props;

    return (
      <View style={styles.container}>
        {
          !this.state.loader
            ? <AnimeById anime={anime} />
            : <ActivityIndicator
                animating={this.state.loader}
                color={"#f80000"}
                size="large"
              />  
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default connect(
  state => ({
    anime: state.animeById
  }),
  dispatch => ({
    onGetAnime: (id, cb) => {
      dispatch(animeById(id, cb));
    }
  })
)(Info);