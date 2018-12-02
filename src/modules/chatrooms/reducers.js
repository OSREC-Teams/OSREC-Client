import { combineReducers } from 'redux';

import { MESSAGE_ADD } from 'modules/messages/types';

import {
  CHATROOMS_CREATE_REQUEST,
  CHATROOMS_CREATE_FAILURE,
  CHATROOMS_CREATE_SUCCESS,
  CHATROOMS_FETCH_REQUEST,
  CHATROOMS_FETCH_FAILURE,
  CHATROOMS_FETCH_SUCCESS,
} from './types';

const creationRequested = (state = false, action) => {
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

const creationFailed = (state = false, action) => {
  switch (action.type) {
    case CHATROOMS_CREATE_FAILURE:
      return true;
    case CHATROOMS_CREATE_SUCCESS:
      return false;
    default:
      return state;
  }
};

const creationFailedError = (state = {}, action) => {
  switch (action.type) {
    case CHATROOMS_CREATE_FAILURE:
      return action.error;
    case CHATROOMS_CREATE_SUCCESS:
      return {};
    default:
      return state;
  }
};

const creationSucceeded = (state = false, action) => {
  switch (action.type) {
    case CHATROOMS_CREATE_FAILURE:
      return false;
    case CHATROOMS_CREATE_SUCCESS:
      return true;
    default:
      return state;
  }
};

const fetchRequested = (state = false, action) => {
  switch (action.type) {
    case CHATROOMS_FETCH_REQUEST:
      return true;
    case CHATROOMS_FETCH_FAILURE:
      return false;
    case CHATROOMS_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

const fetchFailed = (state = false, action) => {
  switch (action.type) {
    case CHATROOMS_FETCH_FAILURE:
      return true;
    case CHATROOMS_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

const fetchFailedError = (state = {}, action) => {
  switch (action.type) {
    case CHATROOMS_FETCH_FAILURE:
      return action.error;
    case CHATROOMS_FETCH_SUCCESS:
      return {};
    default:
      return state;
  }
};

const chatroom = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_ADD:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
};

export const chatrooms = (state = {}, action) => {
  switch (action.type) {
    case CHATROOMS_FETCH_SUCCESS:
      return action.rooms;
    case MESSAGE_ADD:
      return {
        ...state,
        [action.room]: chatroom(state[action.room], action),
      };
    default:
      return state;
  }
};

export const chatroomsProperties = combineReducers({
  creation: combineReducers({
    requested: creationRequested,
    failed: creationFailed,
    failedError: creationFailedError,
    succeeded: creationSucceeded,
  }),
  fetch: combineReducers({
    requested: fetchRequested,
    failed: fetchFailed,
    failedError: fetchFailedError,
  }),
});
