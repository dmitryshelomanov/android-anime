import axios from "axios";
import config from "../../config";

export const getComments = (uri = undefined, offset, clear = true, cb = undefined) => dispatch => { 
  axios.get(`${config.server}Comments?Offset=${offset}&Limit=${limit}`).then(response => { 
    dispatch({ type: 'Anime/COMMENTS', payload: response.data, clear });
    if (cb !== undefined) cb();
  });
};