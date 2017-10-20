import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Config from "../../config";
import replacer from "../../helpers/replacer";
import { ListItem } from 'react-native-material-ui';

export default ({ item }) => {
  const avatar = item.User.AvatarUrl ? `${Config.userImg}${item.User.Id}/${item.User.AvatarUrl}` : "https://orig00.deviantart.net/86d6/f/2011/313/1/6/anime_render_default_avatar_by_hagane_girl-d4flaqu.png";
  return (
    <View style={styles.wrap}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.wrapText}>
        <Text style={styles.name}>{item.User.FullName}</Text>
        <Text style={styles.text}>{replacer(item.Text)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    marginBottom: 5,
    flex: 1,
    flexDirection: "row"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  wrapText: {
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 0.4,
    paddingBottom: 5
  },
  text: {
    textAlign: "justify"
  },
  name: {
    fontWeight: "bold"
  }
});