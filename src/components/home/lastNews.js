import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Modal,
  ScrollView,
  WebView,
  ToastAndroid
} from 'react-native';

import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';

import config from "../../config";

import { getlastNews } from "../../redux/actions/article";

import ImagePreload from "../../components/image/imagesPreload";

import { Card, Button } from 'react-native-material-ui';

import CardNews from "./lastnews/cardNews";

class LastNews extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      offset: 0,
      loading: true,
      webShow: false,
      url: null
    };
  }

  componentWillMount() { 
    const { onGetLastNews, lastNews } = this.props;
    onGetLastNews(true, lastNews.offset);
  }

  _newsMore() { 
    const { onGetLastNews, lastNews } = this.props;
    onGetLastNews(false, lastNews.offset);
  }

  _renderHTML() { 
    return (
      <Modal
        onRequestClose={() => this.setState({ webShow: false }) }
      >
        {ToastAndroid.show("Эта ссылка открылась в браузере. Нажмите кнопку назад что бы выйти в приложение", ToastAndroid.LONG, ToastAndroid.BOTTOM)}  
        <WebView source={{uri: `http://animaunt.ru/news/${this.state.url}`}} />
      </Modal>  
    );
  }

  render() {
    const { lastNews } = this.props;
    const direction = Dimensions.get("window").width < 500 ? "column" : "row";
    
    return (
      <View>
        <View style={{flexDirection: "row", alignItems: "center", padding: 10 }}>
          <Icon name="md-paper" size={30} style={{ color: "#f80000", marginRight: 20 }} />
          <Text style={styles.title}>последние новости</Text>
        </View>
        {
          !lastNews.isLoading
          ? null
          : <ActivityIndicator
              animating={this.state.loading}
              color={"#f80000"}
              size="large"
            />
        }
        {
          lastNews.data.map((item, index) => (
            <CardNews
              key={index}  
              onPress={() => this.setState({
                url: item.AltTitle,
                webShow: true
              })}
              item={item}
            /> 
          ))
        }
        {!lastNews.isLoading
          ? <View style={{ padding: 15 }}>
              <Button
                primary
                text="показать еще"
                raised={true}
                onPress={() => this._newsMore()}
              />
            </View>
          : null}
        {this.state.webShow ? this._renderHTML() : null}
      </View>
    );
  }
};

export default connect(
  state => ({
    lastNews: state.lastNews
  }),
  dispatch => ({
    onGetLastNews: (clear, offset) => { 
      dispatch(getlastNews(clear, offset));
    }
  })
)(LastNews);

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "#2e2e2e",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  more: {
    padding: 15,
    color: "#f80000",
    fontWeight: "bold",
    justifyContent: "center"
  }
});