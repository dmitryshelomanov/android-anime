import axios from "axios";
import config from "../../config";
import { AsyncStorage } from "react-native";

export const allAnime = (limit, offset, clear = false, cb = undefined) => dispatch => {
  axios.get(`${config.server}Anime?Offset=${offset}&Limit=${limit}`).then(response => { 
    dispatch({ type: 'Anime/GET', payload: response.data, clear });
    if (cb !== undefined) cb();
  });
};


export const morePopular = (cb = undefined) => dispatch => {
  axios.get(`${config.server}Anime?IsApprove=true&Offset=0&Limit=20&Sort=RatingDesc`).then(response => { 
    dispatch({ type: 'Anime/POPULAR', payload: response.data });
    if (cb !== undefined) cb();
  });
};


export const animeById = (id, cb = undefined) => dispatch => {
  axios.get(`${config.server}Anime/${id}`).then(response => { 
    dispatch({ type: 'Anime/BY_ID', payload: response.data });
    if (cb !== undefined) cb();
  });
};

export const getFavorite = (cb = undefined) => dispatch => { 
  AsyncStorage.getItem("favorite", (err, val) => { 
    if (err) throw err;
    val = JSON.parse(val);
    dispatch({ type: 'Anime/FAVORITE', payload: val });
    if (cb !== undefined) cb();
  });
};