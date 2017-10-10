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
export const allAnime = (limit, offset, clear = false, cb = undefined) => dispatch => {
  axios.get(`${config.server}Anime?Offset=${offset}&Limit=${limit}`).then(response => { 
    dispatch({ type: 'Anime/GET', payload: response.data, clear });
    if (cb !== undefined) cb();
  });
};

/**
 * Популярные аниме
 * @param {*} cb 
 */
export const morePopular = (cb = undefined) => dispatch => {
  axios.get(`${config.server}Anime?IsApprove=true&Offset=0&Limit=20&Sort=RatingDesc`).then(response => { 
    dispatch({ type: 'Anime/POPULAR', payload: response.data });
    if (cb !== undefined) cb();
  });
};

/**
 * Аниме по id
 * @param {*} id 
 * @param {*} cb 
 */
export const animeById = (id, cb = undefined) => dispatch => {
  axios.get(`${config.server}Anime/${id}`).then(response => { 
    dispatch({ type: 'Anime/BY_ID', payload: response.data });
    if (cb !== undefined) cb();
  });
};

/**
 * Избранные
 * @param {*} cb 
 */
export const getFavorite = (cb = undefined) => dispatch => { 
  AsyncStorage.getItem("favorite", (err, val) => { 
    if (err) throw err;
    val = JSON.parse(val);
    dispatch({ type: 'Anime/FAVORITE', payload: val || []});
    if (cb !== undefined) cb();
  });
};

/**
 * Поиск аниме
 * @param {*} uri 
 * @param {*} cb 
 */
export const searchAnime = (uri = undefined, offset, clear = true, cb = undefined) => dispatch => { 
  uri += `&Offset=${offset}`;
  axios.get(uri).then(response => {
    dispatch({ type: 'Anime/SEARCH', payload: response.data, clear });
    if (cb !== undefined) cb();
  }).catch(err => {
    throw err;
  });
};