import Router from '../../navigators/router/router';

import { NavigationActions, addNavigationHelpers } from 'react-navigation';

const initialState = Router.router.getStateForAction(
  NavigationActions.init()
);

export default (state = initialState, action) => {
  let nextState;
  
  switch (action.type) {

    default:  
      nextState = Router.router.getStateForAction(action, state);
      break;

  }

  return nextState || state;
};