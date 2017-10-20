import axios from "axios";
import config from "../../config";

export const getComments = (clear = true, id, offset) => dispatch => {
  dispatch({
    request: () => axios.get(`${config.server}Comment?AnimeId=${id}&Limit=${config.comments.limit}&Offset=${offset}&Sort=CreateDateDesc`),
    clear,
    type: "Anime/COMMENTS"
  });
};