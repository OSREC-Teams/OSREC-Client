import { combineReducers } from 'redux';

import {
  AUTH_CREATE_REQUEST,
  AUTH_CREATE_FAILURE,
  AUTH_CREATE_SUCCESS,
} from './types';

const requested = (state = false, action) => {
  switch (action.type) {
    case AUTH_CREATE_REQUEST:
      return true;
    case AUTH_CREATE_FAILURE:
      return false;
    case AUTH_CREATE_SUCCESS:
      return false;
    default:
      return state;
  }
};

const failed = (state = false, action) => {
  switch (action.type) {
    case AUTH_CREATE_FAILURE:
      return true;
    case AUTH_CREATE_SUCCESS:
      return false;
    default:
      return state;
  }
};

const failedError = (state = {}, action) => {
  switch (action.type) {
    case AUTH_CREATE_FAILURE:
      return action.error;
    case AUTH_CREATE_SUCCESS:
      return {};
    default:
      return state;
  }
};

const succeeded = (state = false, action) => {
  switch (action.type) {
    case AUTH_CREATE_FAILURE:
      return false;
    case AUTH_CREATE_SUCCESS:
      return true;
    default:
      return state;
  }
};

const token = (state = '', action) => {
  switch (action.type) {
    case AUTH_CREATE_SUCCESS:
      return action.token;
    default:
      return state;
  }
};

export default combineReducers({
  requested,
  failed,
  failedError,
  succeeded,
  token,
});
