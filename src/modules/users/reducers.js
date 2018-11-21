import { combineReducers } from 'redux';

import {
  USERS_CREATE_REQUEST,
  USERS_CREATE_FAILURE,
  USERS_CREATE_SUCCESS,
} from './types';

const requested = (state = false, action) => {
  switch (action.type) {
    case USERS_CREATE_REQUEST:
      return true;
    case USERS_CREATE_FAILURE:
      return false;
    case USERS_CREATE_SUCCESS:
      return false;
    default:
      return state;
  }
};

const failed = (state = false, action) => {
  switch (action.type) {
    case USERS_CREATE_FAILURE:
      return true;
    case USERS_CREATE_SUCCESS:
      return false;
    default:
      return state;
  }
};

const failedError = (state = {}, action) => {
  switch (action.type) {
    case USERS_CREATE_FAILURE:
      return action.error;
    case USERS_CREATE_SUCCESS:
      return '';
    default:
      return state;
  }
};

const succeeded = (state = false, action) => {
  switch (action.type) {
    case USERS_CREATE_FAILURE:
      return false;
    case USERS_CREATE_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  requested,
  failed,
  failedError,
  succeeded,
});
