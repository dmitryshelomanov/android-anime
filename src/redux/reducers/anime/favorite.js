const initialState = {
  isLoading: true,
  isError: false,
  data: []
};

export default (state = initialState, action) => {
  
  switch (action.type) {
    case "Anime/FAVORITE_BEGIN": return {
      ...state,
      isLoading: true,
    };
    case "Anime/FAVORITE_END": return {
      ...state,
      isLoading: false,
      data: action.payload || []
    };
    case "Anime/FAVORITE_ERROR": return {
      ...state,
      isLoading: false,
      isError: true
    };
    default: return state;  
  };
  
};