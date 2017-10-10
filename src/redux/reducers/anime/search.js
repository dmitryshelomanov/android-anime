export default (state = [], action) => {
  
  if (action.type === "Anime/SEARCH") { 
    if (action.clear) {
      state = action.payload;
    } else { 
      state = [...state, ...action.payload];
    }
  };

  return state;
  
};