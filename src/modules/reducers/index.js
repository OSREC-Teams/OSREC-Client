import { combineReducers } from 'redux';

import registerProperties from './register';

const appReducer = combineReducers({
  registerProperties,
});

export default (state, action) => appReducer(state, action);
