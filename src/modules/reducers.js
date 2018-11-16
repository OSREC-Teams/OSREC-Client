import { combineReducers } from 'redux';

import registerProperties from './users/reducers';
import authProperties from './auth/reducers';

const appReducer = combineReducers({
  registerProperties,
  authProperties,
});

export default (state, action) => appReducer(state, action);
