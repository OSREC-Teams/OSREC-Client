import { combineReducers } from 'redux';

import registerProperties from './users/reducers';

const appReducer = combineReducers({
  registerProperties,
});

export default (state, action) => appReducer(state, action);
