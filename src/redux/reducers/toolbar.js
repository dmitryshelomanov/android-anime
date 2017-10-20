const initialState = {
  y: 0
};

export default (state = initialState, action) => { 
  switch (action.type) { 
    case "Toolbar/UPDATE": return {
      ...state,
      y: action.payload
    }
    default: return state;  
  };
};