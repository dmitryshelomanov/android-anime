export default (state = [], action) => {
  
  if (action.type === "Anime/BY_ID") { 
    state = action.payload;
  };

  return state;
  
};