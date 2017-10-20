import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl
} from 'react-native';
import { connect } from "react-redux";
import { getComments } from "../../redux/actions/comments";
import CommentsCard from "../../components/anime/commentsCard";
import ToUp from "../../components/toUp";

class Comments extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      y: 0
    };
  } 

  componentWillMount() { 
    const { params } = this.props.navigation.state;
    const { onGetComments, comm } = this.props;
    onGetComments(true, params.id, comm.offset);
  }

  render() {
    const { comm } = this.props;
    let _scrollView = undefined;

    return (
      <View style={styles.container}>
        <ToUp
          toUp={() => _scrollView.scrollToOffset({ offset: 0, animated: true })}
          scrollY={this.state.y}
        />
        <FlatList
          data={comm.data}
          renderItem={({ item }) =>   
            <CommentsCard item={item}
          />}
          keyExtractor={(item) => item.CommentId}
          ref={(ref) => { _scrollView = ref; }}
          onScroll={(e) => { 
            this.setState({ y: e.nativeEvent.contentOffset.y });
          }}
          refreshControl={
            <RefreshControl
              refreshing={comm.isLoading}
              colors={["red", "green", "black"]}
              progressBackgroundColor="#fff"
            />
          }
        />
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
    comm: state.comments
  }),
  dispatch => ({
    onGetComments: (clear, id, offset) => { 
      dispatch(getComments(clear, id, offset));
    }
  })
)(Comments);