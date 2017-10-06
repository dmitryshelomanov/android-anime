export default (state = [], action) => {
  
  if (action.type === "Anime/POPULAR") { 
    state = action.payload;
  };

  return state;
  
};