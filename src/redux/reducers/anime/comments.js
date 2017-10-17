const initialState = {
  loader: true,
  data: []
};

export default (state = initialState, action) => {
  
    if (action.type === "Anime/COMMENTS") { 
      if (action.clear) {
        state.data = action.payload;
        state.loader = false;
      } else { 
        state.data = [...state, ...action.payload];
        state.loader = false;
      }
    };
  
    return state;
  
  };