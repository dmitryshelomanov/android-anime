export default ({ dispatch, getState }) => next => action => { 

  if (typeof action.request === "function") {

    dispatch({ type: `${action.type}_BEGIN`, clear: action.clear });
    action.request().then(response => {
      dispatch({ type: `${action.type}_END`, payload: response.data ? response.data : JSON.parse(response), clear: action.clear });
    }).catch(err => {
      dispatch({ type: `${action.type}_ERROR` });
    });

  };

  return next(action);

};