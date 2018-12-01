import {
  CHATROOMS_CREATE_REQUEST,
  CHATROOMS_CREATE_FAILURE,
  CHATROOMS_CREATE_SUCCESS,
  CHATROOMS_FETCH_REQUEST,
  CHATROOMS_FETCH_FAILURE,
  CHATROOMS_FETCH_SUCCESS,
} from './types';

export const chatroomsFetchRequest = () => ({
  type: CHATROOMS_FETCH_REQUEST,
});

export const chatroomsFetchFailure = error => ({
  type: CHATROOMS_FETCH_FAILURE,
  error,
});

export const chatroomsFetchSuccess = rooms => ({
  type: CHATROOMS_FETCH_SUCCESS,
  rooms,
});

export const chatroomsCreateRequest = () => ({
  type: CHATROOMS_CREATE_REQUEST,
});

export const chatroomsCreateFailure = error => ({
  type: CHATROOMS_CREATE_FAILURE,
  error,
});

export const chatroomsCreateSuccess = () => ({
  type: CHATROOMS_CREATE_SUCCESS,
});
