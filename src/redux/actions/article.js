import axios from "axios";
import config from "../../config";

export const getlastNews = (clear = true, offset) => dispatch => {
  dispatch({
    request: () => axios.get(`${config.server}Article?IsApprove=true&IsNews=true&Limit=4&Offset=${offset}&Sort=CreateDateDesc`),
    clear,
    type: "Article/LastNews"
  });
};