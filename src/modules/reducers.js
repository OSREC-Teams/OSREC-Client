import { combineReducers } from 'redux';

import registerProperties from './users/reducers';
import authProperties from './auth/reducers';
import chatroomsProperties from './chatrooms/reducers';

const appReducer = combineReducers({
  registerProperties,
  authProperties,
  chatroomsProperties,
});

export default (state, action) => appReducer(state, action);
