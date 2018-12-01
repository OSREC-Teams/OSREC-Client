import { combineReducers } from 'redux';

import registerProperties from './users/reducers';
import authProperties from './auth/reducers';
import { chatroomsProperties, chatrooms } from './chatrooms/reducers';

const appReducer = combineReducers({
  registerProperties,
  authProperties,
  chatroomsProperties,
  chatrooms,
});

export default (state, action) => appReducer(state, action);
