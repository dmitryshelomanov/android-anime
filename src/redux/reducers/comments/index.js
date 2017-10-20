import Config from "../../../config";

const initialState = {
  isLoading: false,
  isError: false,
  offset: 0,
  data: []
};

export default (state = initialState, action) => {
  
  switch (action.type) { 
    case "Anime/COMMENTS_BEGIN": return {
      ...state,
      isLoading: true,
      isError: false
    };
    case "Anime/COMMENTS_END": return {
      ...state,
      data: action.clear ? action.payload : [...state.data, ...action.payload],
      isLoading: false,
      offset: action.clear ? Config.comments.limit : state.offset + Config.comments.limit
    };
    case "Anime/COMMENTS_ERROR": return {
      ...state,
      isError: true,
      isLoading: false
    };  
    default: return state;  
  };
  
};