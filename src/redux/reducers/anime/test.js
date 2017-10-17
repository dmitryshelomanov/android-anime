const initialState = {
  isLoading: false,
  data: [],
}

export default (state = initialState, action) => {
  
  switch (action.type) {
    case "LOAD_BEGIN": return ({
      ...state,
      isLoading: true,
    });
    case "LOAD_END": return ({
      ...state,
      isLoading: false,
      data: action.payload,
    });
    default: return state;
  };
  
};