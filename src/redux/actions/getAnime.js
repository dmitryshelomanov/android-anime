import axios from "axios";
import config from "../../config";
import { AsyncStorage } from "react-native";

/**
 * список аниме
 * @param {*} limit 
 * @param {*} offset 
 * @param {*} clear 
 * @param {*} cb 
 */  
export const allAnime = (limit, offset, clear = false) => dispatch => {
  dispatch({
    request: () => axios.get(`${config.server}Anime?Offset=${offset}&Limit=${limit}`),
    clear,
    type: "Anime/GET"
  });
};

/**
 * Популярные аниме
 */
export const morePopular = () => dispatch => {
  dispatch({
    request: () => axios.get(`${config.server}Anime?IsApprove=true&Offset=0&Limit=20&Sort=RatingDesc`),
    type: "Anime/POPULAR"
  });
};

/**
 * Аниме по id
 * @param {*} id 
 * @param {*} cb 
 */
export const animeById = (id) => dispatch => {
  dispatch({
    request: () => axios.get(`${config.server}Anime/${id}`),
    type: "Anime/BYID"
  });
};

/**
 * Избранные
 * @param {*} cb 
 */
export const getFavorite = () => dispatch => { 
  dispatch({
    request: () => AsyncStorage.getItem("favorite"),
    type: "Anime/FAVORITE"
  });
};

/**
 * Поиск аниме
 * @param {*} uri 
 * @param {*} cb 
 */
export const searchAnime = (uri = undefined, offset, clear = true, cb = undefined) => dispatch => { 

};