export default (state = [], action) => {
  
  if (action.type === "Article/LastNews") { 
    if (action.clear) {
      state = action.payload;
    } else { 
      state = [...state, ...action.payload];
    }
  };

  return state;
  
};