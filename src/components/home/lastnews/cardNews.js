import React from 'react';
import {
  Text,
  Dimensions,
} from 'react-native';

import config from "../../../config";
import ImagePreload from "../../../components/image/imagesPreload";
import { Card } from 'react-native-material-ui';

export default ({ onPress, item }) => (
  <Card
    onPress={() => onPress()}
  >
    <ImagePreload
      width={Dimensions.get("window").width}
      uri={`${config.articleImg}${item.ArticleId}/${item.ImageUrl}`}
    />
    <Text
      style={{ color: "#f80000", fontSize: 15, padding: 5, fontFamily: "Roboto-Medium" }}
    >
      {item.Title}
    </Text>
    <Text style={{ padding: 5, fontFamily: "Roboto-Thin", fontWeight: "100" }}>{item.ShortDescription}</Text>
  </Card>
);