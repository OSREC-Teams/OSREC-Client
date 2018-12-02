import { combineReducers } from 'redux';

import socket from './socket/reducers';
import registerProperties from './users/reducers';
import authProperties from './auth/reducers';
import { chatroomsProperties, chatrooms } from './chatrooms/reducers';
import lang from './lang/reducers';

const appReducer = combineReducers({
  socket,
  registerProperties,
  authProperties,
  chatroomsProperties,
  chatrooms,
  lang,
});

export default (state, action) => appReducer(state, action);
