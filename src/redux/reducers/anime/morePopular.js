const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

export default (state = initialState, action) => {
  
  switch (action.type) { 
    case "Anime/POPULAR_BEGIN": return {
      ...state,
      isLoading: true
    };
    case "Anime/POPULAR_END": return {
      ...state,
      data: action.payload,
      isLoading: false
    };
    case "Anime/POPULAR_ERROR": return {
      ...state,
      isError: true,
      isLoading: false
    };  
    default: return state;  
  };
  
};