import { Dimensions } from "react-native";

export default {
  server: "http://api.animaunt.ru/",
  animeImg: "http://api.animaunt.ru/uploads/Anime/",
  articleImg: "http://api.animaunt.ru/uploads/Article/",
  defaultWidth: (Dimensions.get("window").width < 500)
    ? Dimensions.get("window").width : (Dimensions.get("window").width < 768)
    ? Dimensions.get("window").width / 2 : Dimensions.get("window").width / 3
};