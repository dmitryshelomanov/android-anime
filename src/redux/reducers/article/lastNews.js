const initialState = {
  isLoading: false,
  isError: false,
  offset: 0,
  data: []
};

export default (state = initialState, action) => {
  
  switch (action.type) { 
    case "Article/LastNews_BEGIN": return {
      ...state,
      isLoading: true
    };
    case "Article/LastNews_END": return {
      ...state,
      offset:  action.clear ? 4 : state.offset + 4,
      data: action.clear ? action.payload : [...state.data, ...action.payload],
      isLoading: false
    };
    case "Article/LastNews_ERROR": return {
      ...state,
      isError: true,
      isLoading: false
    };  
    default: return state;  
  };
  
};