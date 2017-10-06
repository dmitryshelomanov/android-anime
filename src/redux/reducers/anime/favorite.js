export default (state = [], action) => {
  
  if (action.type === "Anime/FAVORITE") { 
    state = action.payload;
  };

  return state;
  
};