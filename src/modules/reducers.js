import { combineReducers } from 'redux';

import registerProperties from './users/reducers';
import authProperties from './auth/reducers';
import lang from './lang/reducers';

const appReducer = combineReducers({
  registerProperties,
  authProperties,
  lang,
});

export default (state, action) => appReducer(state, action);
