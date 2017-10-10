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
    const { onGetLastNews } = this.props;
    onGetLastNews(() => {
      this.setState({
        offset: this.state.offset + 4,
        loading: false
      });
    }, true, 0);
  }

  _newsMore() { 
    const { onGetLastNews } = this.props;
    this.setState({ loading: true });
    onGetLastNews(() => { 
      this.setState({
        offset: this.state.offset + 4,
        loading: false
      });
    }, false, this.state.offset);
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
          <Icon name="ios-paper-outline" size={30} style={{ color: "#f80000", marginRight: 20 }} />
          <Text style={styles.title}>последние новости</Text>
        </View>
        {
          !this.state.loading
          ? null
          : <ActivityIndicator
              animating={this.state.loading}
              color={"#f80000"}
              size="large"
            />
        }
        {
          lastNews.map((item, index) => (
            <View
              style={{ flexDirection: direction, marginBottom: 25, width: config.defaultWidth }}
              key={index}
            >
              <ImagePreload
                width={config.defaultWidth}
                uri={`${config.articleImg}${item.ArticleId}/${item.ImageUrl}`}
              />
              <Text
                style={{ color: "#f80000", fontSize: 15, padding: 5 }}
                onPress={() => this.setState({
                  url: item.AltTitle,
                  webShow: true
                })}
              >
                {item.Title}
              </Text>
              <Text style={{ padding: 5 }}>{item.ShortDescription}</Text>
            </View>
          ))
        }
        {!this.state.loading ? <Text style={styles.more} onPress={() => this._newsMore()}>показать еще</Text> : null}
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
    onGetLastNews: (cb, clear, offset) => { 
      dispatch(getlastNews(cb, clear, offset));
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