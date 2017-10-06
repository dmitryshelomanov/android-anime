import axios from "axios";
import config from "../../config";

export const getlastNews = (cb = undefined, clear = true, offset) => dispatch => {
  axios.get(`${config.server}Article?IsApprove=true&IsNews=true&Limit=4&Offset=${offset}&Sort=CreateDateDesc`).then(response => { 
    dispatch({ type: "Article/LastNews", payload: response.data, clear });
    if (cb !== undefined) cb();
  });
};
