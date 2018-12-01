import { combineReducers } from 'redux';

import {
  CHATROOMS_CREATE_REQUEST,
  CHATROOMS_CREATE_FAILURE,
  CHATROOMS_CREATE_SUCCESS,
} from './types';

const requested = (state = false, action) => {
  switch (action.type) {
    case CHATROOMS_CREATE_REQUEST:
      return true;
    case CHATROOMS_CREATE_FAILURE:
      return false;
    case CHATROOMS_CREATE_SUCCESS:
      return false;
    default:
      return state;
  }
};

const failed = (state = false, action) => {
  switch (action.type) {
    case CHATROOMS_CREATE_FAILURE:
      return true;
    case CHATROOMS_CREATE_SUCCESS:
      return false;
    default:
      return state;
  }
};

const failedError = (state = {}, action) => {
  switch (action.type) {
    case CHATROOMS_CREATE_FAILURE:
      return action.error;
    case CHATROOMS_CREATE_SUCCESS:
      return '';
    default:
      return state;
  }
};

const succeeded = (state = false, action) => {
  switch (action.type) {
    case CHATROOMS_CREATE_FAILURE:
      return false;
    case CHATROOMS_CREATE_SUCCESS:
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
